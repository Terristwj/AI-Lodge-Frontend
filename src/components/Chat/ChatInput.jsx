/**
 * ChatInput Component
 * Handles user input for sending messages to the chatbot.
 * Includes a text input and send button.
 */

import { useState } from 'react'
import { Input } from '@/components/ui/Input'
import { Button } from '@/components/ui/Button'
import { Send } from 'lucide-react'

/**
 * ChatInput Component
 * @param {Function} onSendMessage - Callback function to send a message
 * @param {boolean} isLoading - Whether a message is currently being sent
 */
const ChatInput = ({ onSendMessage, isLoading }) => {
  // Local state for the input field
  const [inputValue, setInputValue] = useState('')

  /**
   * Handle form submission
   * Prevents default form behavior and sends the message
   */
  const handleSubmit = (e) => {
    e.preventDefault() // Prevent page reload

    // Only send if there's actual content and not currently loading
    if (inputValue.trim() && !isLoading) {
      onSendMessage(inputValue)
      setInputValue('') // Clear input after sending
    }
  }

  /**
   * Handle input change
   */
  const handleInputChange = (e) => {
    setInputValue(e.target.value)
  }

  /**
   * Handle Enter key press (without Shift)
   * Shift+Enter allows multi-line input
   */
  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSubmit(e)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      {/* Text Input */}
      <Input
        type="text"
        placeholder="Type your message..."
        value={inputValue}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
        disabled={isLoading}
        className="flex-1"
      />

      {/* Send Button */}
      <Button
        type="submit"
        disabled={!inputValue.trim() || isLoading}
        size="icon"
      >
        <Send className="h-4 w-4" />
      </Button>
    </form>
  )
}

export default ChatInput
