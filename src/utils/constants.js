/**
 * Constants
 * Central location for application-wide constants
 */

// API Configuration
export const API_CONFIG = {
  BASE_URL: 'http://localhost:5000/api',
  TIMEOUT: 10000, // 10 seconds
  ENDPOINTS: {
    CHAT: '/chat',
    CONVERSATION: '/conversation',
    HEALTH: '/health',
  },
}

// Message Sender Types
export const MESSAGE_SENDER = {
  USER: 'user',
  BOT: 'bot',
}

// UI Configuration
export const UI_CONFIG = {
  MAX_MESSAGE_LENGTH: 1000,
  CHAT_CONTAINER_HEIGHT: '600px',
  AUTO_SCROLL_BEHAVIOR: 'smooth',
}

// Error Messages
export const ERROR_MESSAGES = {
  NETWORK_ERROR: 'Network error. Please check your connection and try again.',
  SERVER_ERROR: 'Server error. Please try again later.',
  INVALID_INPUT: 'Please enter a valid message.',
  UNKNOWN_ERROR: 'An unexpected error occurred.',
}
