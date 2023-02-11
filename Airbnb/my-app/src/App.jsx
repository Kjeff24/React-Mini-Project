import React from 'react'
import { NavBar } from './components/NavBar/NavBar'
import { Main } from './components/Main/Main'
import { Card } from './components/Card/Card'
import cardProps from './components/Card/cardProps'

const App = () => {
  const cards = cardProps.map((item) => {
    return (
        <Card 
          key={item.id}
          // item = {item}
          {...item}
        />
    )
  })
  return (
    <div  className="container">
        <NavBar />
        <Main />
        <section className="cards-list">
          {cards}
        </section>
    </div>
  )
}

export default App