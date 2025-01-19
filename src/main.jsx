import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './css/output.css'
import App from './App.jsx'
import { GoogleOAuthProvider } from '@react-oauth/google';

const clientId="515157876394-233k85q6uq24m1iuuku3idjmspgqnko9.apps.googleusercontent.com";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GoogleOAuthProvider clientId={clientId}>
      <App />
    </GoogleOAuthProvider>
  </StrictMode>,
)
