import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from "./app/App.tsx";
import './shared/styles/reset.css'
import './shared/styles/main.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
