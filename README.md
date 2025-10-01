# AI Lodge Frontend - Chatbot UI

## Quick Start Guide

### Step 1: Install Dependencies

```bash
npm install
```

### Step 2: Start Development Server

```bash
npm run dev
```

✅ You should see similar output:

```
VITE v5.0.8  ready in 500 ms

➜  Local:   http://localhost:3000/
➜  press h + enter to show help
```

### Step 3: Open in Browser

The app should automatically open in your browser at:

```
http://localhost:3000
```

If it doesn't open automatically, click the link or paste it into your browser.

## 💡 Helpful Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Check for code issues
npm run lint
```

## 🛠️ Tech Stack

- **React 18**: Modern React with hooks
- **Vite**: Fast build tool and development server
- **Tailwind CSS**: Utility-first CSS framework
- **ShadCN UI**: High-quality, accessible UI components
- **Axios**: HTTP client for API requests
- **Lucide React**: Beautiful icon library

# Project Structure Overview

This document provides a quick reference to the project's file organization.

## 📁 Root Directory

```
AI-Lodge-Frontend/
├── src/                    # Source code
├── public/                 # Static assets
├── index.html             # HTML entry point
├── package.json           # Dependencies and scripts
├── vite.config.js         # Vite configuration
├── tailwind.config.js     # Tailwind CSS configuration
├── postcss.config.js      # PostCSS configuration
├── .env.example           # Environment variables template
├── .gitignore             # Git ignore rules
├── README.md              # Main documentation
```

## 📂 Source Directory (`src/`)

### Components

```
src/components/
├── Chat/                           # Chat feature components
│   ├── ChatContainer.jsx          # Main chat wrapper
│   ├── MessageList.jsx            # Displays all messages
│   ├── Message.jsx                # Single message component
│   ├── ChatInput.jsx              # Input field and send button
│   ├── TypingIndicator.jsx        # Animated typing dots
│   └── TypingIndicator.css        # Typing animation styles
│
└── ui/                             # Reusable UI components (ShadCN style)
    ├── Button.jsx                 # Button with variants
    ├── Card.jsx                   # Card layout component
    ├── Input.jsx                  # Text input field
    └── ScrollArea.jsx             # Custom scrollable container
```

### Hooks

```
src/hooks/
└── useChat.js                     # Custom hook for chat state and logic
```

### Services

```
src/services/
└── api.js                         # API service for backend communication
```

### Utilities

```
src/lib/
└── utils.js                       # React utility functions (cn helper)

src/utils/
├── constants.js                   # Application constants
└── helpers.js                     # Pure utility functions
```

### Core Files

```
src/
├── App.jsx                        # Root component
├── App.css                        # App component styles
├── main.jsx                       # Application entry point
└── index.css                      # Global styles and Tailwind imports
```

## 🎨 Component Hierarchy

```
App
└── ChatContainer
    ├── MessageList
    │   ├── Message (multiple)
    │   │   ├── User Icon
    │   │   ├── Message Text
    │   │   └── Timestamp
    │   └── TypingIndicator
    │       └── Animated Dots
    └── ChatInput
        ├── Input Field
        └── Send Button
```

## 🔄 Data Flow

```
User Action
    ↓
ChatInput Component
    ↓
sendMessage() function
    ↓
useChat Hook
    ↓
API Service
    ↓
Backend Server
    ↓
Response
    ↓
useChat Hook (updates state)
    ↓
MessageList Component
    ↓
Message Component
    ↓
UI Update
```

## 📦 Key Dependencies

| Package        | Purpose               | Location     |
| -------------- | --------------------- | ------------ |
| react          | UI framework          | package.json |
| react-dom      | React renderer        | package.json |
| vite           | Build tool            | package.json |
| tailwindcss    | CSS framework         | package.json |
| axios          | HTTP client           | package.json |
| lucide-react   | Icons                 | package.json |
| clsx           | Class utilities       | package.json |
| tailwind-merge | Tailwind class merger | package.json |

## 🎯 File Responsibilities

### Components

| File                  | Responsibility                | Key Props/Hooks          |
| --------------------- | ----------------------------- | ------------------------ |
| `ChatContainer.jsx`   | Main chat orchestrator        | useChat()                |
| `MessageList.jsx`     | Display messages, auto-scroll | messages, isLoading      |
| `Message.jsx`         | Render single message         | message object           |
| `ChatInput.jsx`       | Handle user input             | onSendMessage, isLoading |
| `TypingIndicator.jsx` | Show typing animation         | none                     |

### Hooks

| File         | Responsibility              | Returns                                                |
| ------------ | --------------------------- | ------------------------------------------------------ |
| `useChat.js` | Manage chat state and logic | messages, isLoading, error, sendMessage, clearMessages |

### Services

| File     | Responsibility        | Exports                                                             |
| -------- | --------------------- | ------------------------------------------------------------------- |
| `api.js` | Backend communication | sendMessage, getConversationHistory, clearConversation, healthCheck |

### Utilities

| File           | Responsibility  | Exports                                   |
| -------------- | --------------- | ----------------------------------------- |
| `utils.js`     | React utilities | cn() function                             |
| `constants.js` | App constants   | API_CONFIG, MESSAGE_SENDER, UI_CONFIG     |
| `helpers.js`   | Pure functions  | formatTimestamp, generateId, isValidInput |

## 📁 Project Structure

```
AI-Lodge-Frontend/
├── src/
│   ├── components/
│   │   ├── Chat/              # Chat-related components
│   │   │   ├── ChatContainer.jsx    # Main chat wrapper
│   │   │   ├── MessageList.jsx      # Message display container
│   │   │   ├── Message.jsx          # Individual message bubble
│   │   │   ├── ChatInput.jsx        # Input field and send button
│   │   │   ├── TypingIndicator.jsx  # Animated typing indicator
│   │   │   └── TypingIndicator.css  # Typing animation styles
│   │   └── ui/                # Reusable UI components (ShadCN)
│   │       ├── Button.jsx
│   │       ├── Card.jsx
│   │       ├── Input.jsx
│   │       └── ScrollArea.jsx
│   ├── hooks/
│   │   └── useChat.js         # Custom hook for chat logic
│   ├── services/
│   │   └── api.js             # API service for backend communication
│   ├── lib/
│   │   └── utils.js           # Utility functions (cn helper)
│   ├── utils/
│   │   ├── constants.js       # Application constants
│   │   └── helpers.js         # Helper utility functions
│   ├── App.jsx                # Root component
│   ├── App.css                # Global app styles
│   ├── index.css              # Tailwind imports and theme
│   └── main.jsx               # Entry point
├── public/                    # Static assets
├── index.html                 # HTML template
├── package.json               # Dependencies and scripts
├── vite.config.js            # Vite configuration
├── tailwind.config.js        # Tailwind configuration
├── postcss.config.js         # PostCSS configuration
└── README.md                 # This file
```

## 🔌 Backend Integration

This frontend expects a backend API with the following endpoints:

### POST `/api/chat`

Send a message to the chatbot

```json
// Request
{
    "message": "Hello, how are you?",
    "model": "gpt-3.5-turbo", // optional
    "max_tokens": 1000, // optional
    "temperature": 0.7 // optional
}
// Response
{
    "response": "Hello! I'm doing well, thank you for asking. How can I help you today?",
    "model": "gpt-3.5-turbo",
    "usage": {
        "completion_tokens": 37,
        "prompt_tokens": 13,
        "total_tokens": 50,
        "completion_tokens_details": {
            "accepted_prediction_tokens": 0,
            "audio_tokens": 0,
            "reasoning_tokens": 0,
            "rejected_prediction_tokens": 0
        },
        "prompt_tokens_details": {
            "audio_tokens": 0,
            "cached_tokens": 0
        }
    }
}
```

### GET `/api/health`

Health check endpoint

## 📚 Learning Resources

- [React Documentation](https://react.dev/)
- [Vite Documentation](https://vitejs.dev/)
- [Tailwind CSS Documentation](https://tailwindcss.com/)
- [ShadCN UI](https://ui.shadcn.com/)
- [Axios Documentation](https://axios-http.com/)
