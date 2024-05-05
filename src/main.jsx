import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import App from './App.jsx'
import store from './components/redux/store.js'
import "react-toastify/dist/ReactToastify.css"
import './index.css'
import { getTotalamount } from './components/redux/slice/CartSlice.js'

store.dispatch(getTotalamount())

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <Provider store={store}>
  <BrowserRouter>
  <ToastContainer/>
  <App />
  </BrowserRouter>
  </Provider>
  </React.StrictMode>,
  )
  