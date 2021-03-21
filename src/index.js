import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './styles/tailwind.css'
import { FirebaseProvider } from './context/firebase'

ReactDOM.render(
  <FirebaseProvider>
    <App />
  </FirebaseProvider>,
  document.getElementById('root')
)
