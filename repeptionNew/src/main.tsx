import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './repetitionCash/index.css'
import {App} from './repetitionCash/App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
