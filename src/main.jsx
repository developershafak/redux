import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider as ReduxProvider } from 'react-redux'
import store from './Redux/ReduxSlice/Store.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      {/* <Navbarr /> */}
      <App />
    </ReduxProvider>
  </React.StrictMode>,
)
