/**
 * Main entry point for the React application
 * This file imports React, our App component, and global styles,
 * then mounts the app to the DOM
 */

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Get the root DOM element where React will be mounted
const rootElement = document.getElementById('root')

// Create a React root and render the App component
// StrictMode helps identify potential problems in the application during development
ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
