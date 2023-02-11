import React from 'react'
import { Persona } from './components/Persona/Persona'
import { About } from './components/About/About'
import { Footer } from './components/Footer/Footer'


const App = () => {
  return (
    <div className='container'>
        <Persona />
        <About />
        <Footer />
    </div>
  )
}

export default App