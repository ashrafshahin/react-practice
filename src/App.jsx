import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Registration from './pages/Registration'
import Login from './pages/Login'

function App() {
  

  return (
    <>
      <div className='m-10'>

        <Registration />
        <Login />
        
      </div>
      
    </>
  )
}

export default App
