import React from 'react'
import { NavBar } from './components/NavBar/NavBar'
import { Card } from './components/Card/Card'
import CardData from './components/Card/CardData'

const App = () => {

  const cards = CardData.map((item) => {
    return (
        <Card 
          key={item.id}
          {...item}
        />
    )
  })

  return (
    <div className='container'>
        <NavBar />
        <section className="cards-list">
          {cards}
        </section>

    </div>
  )
}

export default App