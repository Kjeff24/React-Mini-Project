import React from 'react'

export const ImageMeme = (props) => {
  return (
    <div className="image-content">
        <img src={`../../images/${props.memeObj.memeImage}`} alt="meme" className='meme-image'/>
        <h3 className="text text1">{props.memeObj.topText}</h3>
        <h3 className='text text2'>{props.memeObj.bottomText}</h3>
      </div>
  )
}
