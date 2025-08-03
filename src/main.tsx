import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './routes/App.tsx'
import { BrowserRouter } from 'react-router'
import { NameProvider } from './context/nameContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <NameProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </NameProvider>
  </StrictMode>,
)
