import React from 'react'
import redCar from '../images/red-car.png'

export default function RedCar() {
  return (
    <div style={{
        position: 'absolute',
        bottom: 10,
        left: 125,
        backgroundImage: `url(${redCar})`,
        backgroundSize: 'cover',
        rotate: '180deg',
        width: 50,
        height: 90
    }}></div>
  )
}
