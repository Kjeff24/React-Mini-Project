import React from 'react'
import { NavBar } from './components/NavBar/NavBar'
import {ReactForm} from './components/Form/ReactForm'


const App = () => {
  return (
    <div className="container">
        <NavBar />
        <ReactForm />
    </div>
  )
}

export default App