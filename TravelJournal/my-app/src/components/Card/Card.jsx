import React from 'react'
import location_icon from "../../assets/location_icon.svg"

export const Card = (props) => {
  console.log(props.name)
  return (
    <div className='card'>
      <img src={`../../images/${props.image}.jpg`} alt="mount-fuji" className='card-image' />
      <div className='card-details'>
        <div className='location'>
          <img src={location_icon} alt="location-icon" className='location-icon' />
          <h3 className='location-name'>{props.location}</h3>
          <p className='google-location'><a href='google.com'>View on Google Maps</a></p>
        </div>
        <h2 className='card-title'>{props.name}</h2>
        <p className='card-date'><span>{props.startDate}</span> - <span>{props.endDate}</span></p>
        <p className='card-description'>{props.description}</p>
      </div>
    </div>
  )
}
