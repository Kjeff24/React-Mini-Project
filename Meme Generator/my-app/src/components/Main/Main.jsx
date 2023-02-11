import React, {useState} from 'react'
import { ImageMeme } from '../ImageMeme/ImageMeme'
import meme from './meme'

export const Main = () => {

  const [memeObj, setMemeObj] = useState({
    memeImage: "person_1.jpg",
    topText: "My meme",
    bottomText: "😂😂"
  })
  

  function random() {
    const randomNum = Math.floor(Math.random()*meme.length)
    return randomNum
   
  }

  function getMemmeImage() {
    
    const randNum = random();
    const NewMemeImage = meme[randNum].image
    console.log(NewMemeImage)
    setMemeObj(prevData => ({
      ...prevData,
      memeImage: NewMemeImage
    })) 
  }

  function handleChange(event) {

    setMemeObj(prevData => {
      return {
        ...prevData,
        [event.target.name]: event.target.value
      }
    })


  }



  return (
    <main className='main'>
  
      <div className="input">
          <input 
            type="text" 
            placeholder='Top Text' 
            name='topText' 
            className='form--input input1' 
            onChange={handleChange} 
            value={memeObj.topText}
          />
          <input 
            type="text" 
            placeholder='Bottom Text' 
            name='bottomText' 
            className='form--input input2' 
            onChange={handleChange}
            value={memeObj.bottomText}
          />
      </div>
      <div className='button'>
        <button className='form--button' onClick={getMemmeImage}>Get a new meme image</button>
      </div>
      <ImageMeme memeObj={memeObj}/>
    </main>
  )
}
