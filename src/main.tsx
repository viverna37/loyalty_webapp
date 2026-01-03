import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './shared/styles/main.css'
import App from "./app/App.tsx";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <div>123</div>
    <App />
  </StrictMode>,
)
