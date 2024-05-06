import React, { useState } from 'react'
import './components/styles/App.css'
import MainRoutes from './routes/MainRoutes'


export const Context = React.createContext()

function App() {
  const [hasIntroModal,setHasIntroModal] = useState(false)
  const [place,setPlace] = useState('')
  const [deliveryType,setDeliveryType] = useState(null)
  const [hasPlaceChange,setHasPlaceChange] = useState(false)
  return (
    <>
    <Context.Provider value={[hasIntroModal,setHasIntroModal,place,setPlace,deliveryType,setDeliveryType,hasPlaceChange,setHasPlaceChange]}>
    <MainRoutes/>
    </Context.Provider>
    </>
  )
}

export default App
