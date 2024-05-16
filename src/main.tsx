import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import 'normalize.css/normalize.css'
import './showInfo.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
