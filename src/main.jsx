import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

//the two fonts we installed we introduce it to our project
//so that whenever we want to use them they will be available
import '@fontsource/outfit'
import '@fontsource/roboto'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
