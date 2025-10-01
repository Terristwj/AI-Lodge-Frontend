/**
 * Root App Component
 * This is the main component that serves as the entry point for our chatbot application.
 * It provides the overall layout and contains the ChatContainer component.
 */

import ChatContainer from './components/Chat/ChatContainer'
import './App.css'

function App() {
  return (
    <div className="app-container">
      {/* Main application wrapper with full height and centered content */}
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center p-4">
        {/* Header Section */}
        <div className="w-full max-w-4xl">
          <header className="text-center mb-6">
            <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-2">
              AI Lodge Chatbot
            </h1>
            <p className="text-gray-600 dark:text-gray-300">
              Your intelligent conversation partner
            </p>
          </header>

          {/* Main Chat Interface */}
          <ChatContainer />
        </div>
      </div>
    </div>
  )
}

export default App
