/**
 * MessageList Component
 * Displays all chat messages in a scrollable container.
 * Automatically scrolls to the bottom when new messages arrive.
 */

import { useEffect, useRef } from 'react'
import { ScrollArea } from '@/components/ui/ScrollArea'
import Message from './Message'
import TypingIndicator from './TypingIndicator'

/**
 * MessageList Component
 * @param {Array} messages - Array of message objects
 * @param {boolean} isLoading - Whether a message is currently being sent
 */
const MessageList = ({ messages, isLoading }) => {
  // Ref to the bottom of the message list for auto-scrolling
  const messagesEndRef = useRef(null)

  /**
   * Scroll to bottom whenever messages change or loading state changes
   * This ensures users always see the latest message
   */
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  // Effect to scroll to bottom when messages update
  useEffect(() => {
    scrollToBottom()
  }, [messages, isLoading])

  return (
    <ScrollArea className="flex-1 p-4">
      {/* Container for all messages */}
      <div className="space-y-4">
        {/* Render each message */}
        {messages.map((message) => (
          <Message key={message.id} message={message} />
        ))}

        {/* Show typing indicator when bot is responding */}
        {isLoading && <TypingIndicator />}

        {/* Invisible element at the bottom for scrolling reference */}
        <div ref={messagesEndRef} />
      </div>
    </ScrollArea>
  )
}

export default MessageList
