import React from 'react'
import star from '../../assets/star.svg'


export const Card = (props) => {
    let badgeText
    if(props.openSpot === 0){
      badgeText = "SOLD OUT"
    } else if (props.location === "Online") {
      badgeText = "ONLINE"
    }

  return (
    <div className="card">
        {badgeText && <div className='card-badge'>{badgeText}</div>}
        <img src= {`../../images/${props.img}`} alt="card" className="card-image"/>
        <div className="card-stats">
            <img src={star} alt="favourite" className="fav-icon"/>
            <span className='gray'>{props.rating}</span>
            <span className='gray'>(5) .</span>
            <span className='gray'>{props.location}</span>
        </div>
        <p className="card-title">{props.title}</p>
        <p className="card-price"><span>From $ {props.price}</span> / person</p>
    </div>
  )
}
