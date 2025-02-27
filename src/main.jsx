import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
// import { PracticeCSS } from './practiceCSS'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <PracticeCSS /> */}
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </StrictMode>,
)
