/**
 * ChatContainer Component
 * This is the main container for the entire chat interface.
 * It manages the chat state using the useChat hook and renders all child components.
 */

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import MessageList from './MessageList'
import ChatInput from './ChatInput'
import { useChat } from '@/hooks/useChat'
import { RefreshCw } from 'lucide-react'

/**
 * ChatContainer Component
 * Orchestrates the entire chat interface
 */
const ChatContainer = () => {
  // Get chat state and methods from our custom hook
  const { messages, isLoading, error, sendMessage, clearMessages } = useChat()

  return (
    <Card className="w-full h-[600px] flex flex-col shadow-xl">
      {/* Chat Header */}
      <CardHeader className="border-b">
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl">Chat</CardTitle>
          
          {/* Clear Chat Button */}
          <Button
            variant="ghost"
            size="icon"
            onClick={clearMessages}
            title="Clear conversation"
            disabled={isLoading}
          >
            <RefreshCw className="h-4 w-4" />
          </Button>
        </div>
      </CardHeader>

      {/* Chat Content Area */}
      <CardContent className="flex-1 overflow-hidden p-0 flex flex-col">
        {/* Messages Display */}
        <MessageList messages={messages} isLoading={isLoading} />

        {/* Error Display (if any) */}
        {error && (
          <div className="px-4 py-2 bg-destructive/10 text-destructive text-sm">
            {error}
          </div>
        )}

        {/* Input Area */}
        <div className="border-t p-4">
          <ChatInput onSendMessage={sendMessage} isLoading={isLoading} />
        </div>
      </CardContent>
    </Card>
  )
}

export default ChatContainer
