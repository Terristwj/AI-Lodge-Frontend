/**
 * Custom Hook: useChat
 * This hook manages all chat-related state and operations.
 * It provides a clean interface for components to interact with the chat functionality.
 * 
 * This is a core concept in React - custom hooks let us reuse stateful logic
 * across different components.
 */

import { useState, useCallback, useRef, useEffect } from 'react'
import apiService from '@/services/api'

/**
 * useChat Hook
 * @returns {Object} Chat state and methods
 */
export const useChat = () => {
  // State for storing all messages in the chat
  // Each message has: id, text, sender ('user' or 'bot'), timestamp
  const [messages, setMessages] = useState([])
  
  // State for tracking if a message is currently being sent
  const [isLoading, setIsLoading] = useState(false)
  
  // State for storing any error messages
  const [error, setError] = useState(null)
  
  // Ref to store the current conversation ID (persists across re-renders)
  const conversationIdRef = useRef(null)

  /**
   * Send a message to the chatbot
   * useCallback ensures this function doesn't get recreated on every render
   */
  const sendMessage = useCallback(async (messageText) => {
    // Validate input
    if (!messageText || !messageText.trim()) {
      return
    }

    // Clear any previous errors
    setError(null)

    // Create user message object
    const userMessage = {
      id: Date.now(), // Simple unique ID using timestamp
      text: messageText.trim(),
      sender: 'user',
      timestamp: new Date(),
    }

    // Add user message to the chat immediately (optimistic update)
    setMessages((prev) => [...prev, userMessage])
    
    // Set loading state
    setIsLoading(true)

    try {
      // Call the API to get bot response
      const response = await apiService.sendMessage(
        messageText.trim(),
        conversationIdRef.current
      )

      // Store conversation ID for future messages
      if (response.conversationId) {
        conversationIdRef.current = response.conversationId
      }

      // Create bot message object
      const botMessage = {
        id: Date.now() + 1, // Ensure unique ID
        text: response.message || response.reply || 'I received your message.',
        sender: 'bot',
        timestamp: new Date(),
      }

      // Add bot message to the chat
      setMessages((prev) => [...prev, botMessage])
    } catch (err) {
      // Handle errors gracefully
      setError(err.message)
      
      // Optionally add an error message to the chat
      const errorMessage = {
        id: Date.now() + 1,
        text: 'Sorry, I encountered an error. Please try again.',
        sender: 'bot',
        timestamp: new Date(),
        isError: true,
      }
      
      setMessages((prev) => [...prev, errorMessage])
    } finally {
      // Always reset loading state
      setIsLoading(false)
    }
  }, [])

  /**
   * Clear all messages from the chat
   */
  const clearMessages = useCallback(async () => {
    try {
      // If we have a conversation ID, delete it on the backend
      if (conversationIdRef.current) {
        await apiService.clearConversation(conversationIdRef.current)
      }
    } catch (err) {
      console.error('Error clearing conversation:', err)
    } finally {
      // Clear messages and reset conversation
      setMessages([])
      conversationIdRef.current = null
      setError(null)
    }
  }, [])

  /**
   * Retry sending the last user message
   */
  const retryLastMessage = useCallback(() => {
    // Find the last user message
    const lastUserMessage = [...messages]
      .reverse()
      .find((msg) => msg.sender === 'user')

    if (lastUserMessage) {
      // Remove the error message and retry
      setMessages((prev) => 
        prev.filter((msg) => !msg.isError)
      )
      sendMessage(lastUserMessage.text)
    }
  }, [messages, sendMessage])

  // Add a welcome message when the component first mounts
  useEffect(() => {
    if (messages.length === 0) {
      const welcomeMessage = {
        id: Date.now(),
        text: 'Hello! I\'m your AI assistant. How can I help you today?',
        sender: 'bot',
        timestamp: new Date(),
      }
      setMessages([welcomeMessage])
    }
  }, []) // Empty dependency array means this runs once on mount

  // Return all state and methods that components might need
  return {
    messages,
    isLoading,
    error,
    sendMessage,
    clearMessages,
    retryLastMessage,
  }
}
