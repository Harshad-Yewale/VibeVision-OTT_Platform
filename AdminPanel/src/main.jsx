import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { AuthContextProvider } from './context/authContext/AuthContext.jsx'
import { MovieContextProvider } from './context/movieContext/MovieContext.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthContextProvider>
      <MovieContextProvider>
        <App />
      </MovieContextProvider>
    </AuthContextProvider>
  </StrictMode>,
)
