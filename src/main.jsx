import React from 'react'
import ReactDOM from 'react-dom/client'
import GlobalStyle from './GlobalStyle'
import Router from './Router'
import './bootstrap.min.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router/>
    <GlobalStyle/>
  </React.StrictMode>,
)
