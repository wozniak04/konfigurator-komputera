import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'
import { GoogleOAuthProvider } from '@react-oauth/google';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <GoogleOAuthProvider clientId='828982989711-kc4obhed5l9senof04a6m5cp87vbvme3.apps.googleusercontent.com'>
        <BrowserRouter>
            <App />
        </BrowserRouter>
        </GoogleOAuthProvider>
    </React.StrictMode>
)
