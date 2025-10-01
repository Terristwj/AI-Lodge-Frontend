/**
 * TypingIndicator Component
 * Shows an animated indicator when the bot is typing/thinking.
 * Provides visual feedback that the bot is processing the user's message.
 */

import { Bot } from 'lucide-react'
import './TypingIndicator.css'

/**
 * TypingIndicator Component
 * Displays animated dots to indicate the bot is typing
 */
const TypingIndicator = () => {
  return (
    <div className="flex gap-3">
      {/* Bot Avatar */}
      <div className="flex h-8 w-8 shrink-0 select-none items-center justify-center rounded-full bg-secondary text-secondary-foreground">
        <Bot className="h-4 w-4" />
      </div>

      {/* Typing Animation Container */}
      <div className="flex flex-col gap-1">
        <span className="text-xs text-muted-foreground">AI Assistant</span>
        
        {/* Animated Dots */}
        <div className="rounded-lg px-4 py-2 bg-muted">
          <div className="typing-indicator">
            <span className="typing-dot"></span>
            <span className="typing-dot"></span>
            <span className="typing-dot"></span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TypingIndicator
