/**
 * Message Component
 * Displays a single message in the chat.
 * Styling differs based on whether it's from the user or the bot.
 */

import { cn } from '@/lib/utils'
import { Bot, User } from 'lucide-react'

/**
 * Message Component
 * @param {Object} message - Message object containing id, text, sender, timestamp
 */
const Message = ({ message }) => {
  // Determine if this is a user message
  const isUser = message.sender === 'user'
  
  // Determine if this is an error message
  const isError = message.isError

  /**
   * Format timestamp for display
   * Shows time in HH:MM format
   */
  const formatTime = (timestamp) => {
    return new Date(timestamp).toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
    })
  }

  return (
    <div
      className={cn(
        // Base styles for message container
        'flex gap-3 animate-slide-in',
        // Align user messages to the right
        isUser && 'flex-row-reverse'
      )}
    >
      {/* Avatar/Icon */}
      <div
        className={cn(
          // Base avatar styling
          'flex h-8 w-8 shrink-0 select-none items-center justify-center rounded-full',
          // Different colors for user vs bot
          isUser
            ? 'bg-primary text-primary-foreground'
            : 'bg-secondary text-secondary-foreground'
        )}
      >
        {/* Show appropriate icon */}
        {isUser ? (
          <User className="h-4 w-4" />
        ) : (
          <Bot className="h-4 w-4" />
        )}
      </div>

      {/* Message Content */}
      <div className={cn('flex flex-col gap-1 max-w-[75%]', isUser && 'items-end')}>
        {/* Sender Label */}
        <span className="text-xs text-muted-foreground">
          {isUser ? 'You' : 'AI Assistant'}
        </span>

        {/* Message Bubble */}
        <div
          className={cn(
            // Base message bubble styling
            'rounded-lg px-4 py-2 w-fit max-w-full break-words overflow-wrap-anywhere',
            // Different styling for user vs bot messages
            isUser
              ? 'bg-primary text-primary-foreground'
              : 'bg-muted',
            // Error message styling
            isError && 'bg-destructive/10 text-destructive border border-destructive/20'
          )}
        >
          <p className="text-sm whitespace-pre-wrap break-words overflow-wrap-anywhere">{message.text}</p>
        </div>

        {/* Timestamp */}
        <span className="text-xs text-muted-foreground">
          {formatTime(message.timestamp)}
        </span>
      </div>
    </div>
  )
}

export default Message
