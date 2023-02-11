import React from 'react'
import album from "../../assets/album.jpg";

export const Main = () => {
  return (
    <main>
      <img src={album} alt="image here" className="album-logo"/> 
        <h1 className='react-title'>Online Experiences</h1>
        <p className="react-para">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
    </main>
  )
}
