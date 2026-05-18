import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './Myapp.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Myapp/>
  </StrictMode>,
)

