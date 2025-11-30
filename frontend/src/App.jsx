import { useState, useEffect } from 'react'
import './index.css'

function App() {
  const [count, setCount] = useState(0)
  const [message, setMessage] = useState('')

  useEffect(() => {
    fetch('/api/hello')
      .then(res => res.json())
      .then(data => setMessage(data.message))
      .catch(err => console.error("Failed to fetch from backend:", err))
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white flex flex-col items-center justify-center p-4">
      <div className="max-w-3xl w-full text-center space-y-8">
        <h1 className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600 animate-fade-in-down">
          Flask + Vite + React
        </h1>
        <p className="text-xl text-gray-300 animate-fade-in-up">
          A powerful full-stack template with a modern landing page.
        </p>

        <div className="p-6 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 shadow-xl animate-fade-in-up delay-100">
          <h2 className="text-2xl font-semibold mb-4">Backend Connection</h2>
          <p className="text-lg">
            Message from Flask: <span className="font-mono text-green-400">{message || 'Loading...'}</span>
          </p>
        </div>

        <div className="flex justify-center gap-4 animate-fade-in-up delay-200">
          <button
            onClick={() => setCount((count) => count + 1)}
            className="px-8 py-3 bg-blue-600 hover:bg-blue-500 rounded-full font-semibold transition-all transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-blue-500/25"
          >
            Vote for this feature ({count})
          </button>
          <a
            href="https://vitejs.dev"
            target="_blank"
            rel="noreferrer"
            className="px-8 py-3 bg-gray-700 hover:bg-gray-600 rounded-full font-semibold transition-all transform hover:scale-105 active:scale-95"
          >
            Learn Vite
          </a>
        </div>
      </div>
    </div>
  )
}

export default App
