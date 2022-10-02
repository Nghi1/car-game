import React from 'react'
import greenCar from '../images/green-car.jpg'

export default function GreenCar() {
  return (
    <div style={{
        position: 'absolute',
        left: 125,
        top: 10,
        width: 50,
        height: 90,
        backgroundSize: 'cover',
        backgroundImage: `url(${greenCar})`
    }}></div>
  )
}
