import React, { useState } from 'react'
import './components/styles/App.css'
import MainRoutes from './routes/MainRoutes'


export const Context = React.createContext()

function App() {
  const [hasIntroModal,setHasIntroModal] = useState(false)
  return (
    <>
    <Context.Provider value={[hasIntroModal,setHasIntroModal]}>
    <MainRoutes/>
    </Context.Provider>
    </>
  )
}

export default App
