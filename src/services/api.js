/**
 * API Service
 * This file contains all the functions that communicate with the backend API.
 * It uses axios to make HTTP requests.
 *
 * NOTE FOR WORKSHOP: Update the BASE_URL to match your backend server URL
 */

import axios from 'axios'

// Base URL for the backend API
// TODO: Replace this with your actual backend URL
const BASE_URL = 'http://localhost:5000/api'

// Create an axios instance with default configuration
const apiClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000, // Request timeout in milliseconds (10 seconds)
})

/**
 * API Service Object
 * Contains all methods for communicating with the backend
 */
const apiService = {
  /**
   * Send a message to the chatbot and get a response
   * @param {string} message - The user's message
   * @param {string} conversationId - Optional conversation ID for maintaining context
   * @returns {Promise<Object>} Response containing the bot's reply and conversation ID
   */
  sendMessage: async (message, conversationId = null) => {
    try {
      // Make POST request to the chat endpoint
      const response = await apiClient.post('/chat', {
        message,
        conversationId,
      })

      return response.data
    } catch (error) {
      // Log the error for debugging
      console.error('Error sending message:', error)

      // Throw a user-friendly error message
      throw new Error(
        error.response?.data?.message ||
          'Failed to send message. Please check your connection and try again.'
      )
    }
  },

  /**
   * Get conversation history
   * @param {string} conversationId - The conversation ID
   * @returns {Promise<Array>} Array of messages in the conversation
   */
  getConversationHistory: async (conversationId) => {
    try {
      const response = await apiClient.get(`/conversation/${conversationId}`)
      return response.data
    } catch (error) {
      console.error('Error fetching conversation history:', error)
      throw new Error('Failed to load conversation history.')
    }
  },

  /**
   * Delete/clear a conversation
   * @param {string} conversationId - The conversation ID to delete
   * @returns {Promise<void>}
   */
  clearConversation: async (conversationId) => {
    try {
      await apiClient.delete(`/conversation/${conversationId}`)
    } catch (error) {
      console.error('Error clearing conversation:', error)
      throw new Error('Failed to clear conversation.')
    }
  },

  /**
   * Health check endpoint to verify backend connectivity
   * @returns {Promise<boolean>} True if backend is healthy
   */
  healthCheck: async () => {
    try {
      const response = await apiClient.get('/health')
      return response.status === 200
    } catch (error) {
      console.error('Backend health check failed:', error)
      return false
    }
  },
}

export default apiService
