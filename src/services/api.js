/**
 * API Service
 * This file contains all the functions that communicate with the backend API.
 * It uses axios to make HTTP requests.
 *
 * Updated to match the new API format with model, max_tokens, and temperature parameters.
 *
 * NOTE FOR WORKSHOP: Update the BASE_URL to match your backend server URL
 */

import axios from 'axios'

// Base URL for the backend API
// TODO: Replace this with your actual backend URL
const BASE_URL = 'http://localhost:8000/api'

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
   * @param {Object} options - Optional parameters (model, max_tokens, temperature)
   * @returns {Promise<Object>} Response containing the bot's reply and usage info
   */
  sendMessage: async (message, options = {}) => {
    try {
      // Make POST request to the chat endpoint
      const response = await apiClient.post('/chat', {
        message,
        model: options.model || 'gpt-3.5-turbo', // Default model
        max_tokens: options.max_tokens || 1000, // Default max tokens
        temperature: options.temperature || 0.7, // Default temperature
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
