import React from 'react'

const Card = ({ image, price, title, location, days }) => {
  return (
    <div className="card bg-base-100 w-96 shadow-xl">
    <figure>
      <img
        src={image}
    />
    </figure>
    <div className="card-body">
      <h2 className="card-title">Rs: {price}</h2>
      <h2 className="card-title">{title}</h2>
      <p>{location}</p>
      <p>{days}</p>
    </div>
  </div>
  )
}

export default Card