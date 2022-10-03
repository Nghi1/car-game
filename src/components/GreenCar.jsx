import React from 'react'
import greenCar from '../images/green-car.jpg'

export default function GreenCar(props) {
  return (
    <div style={{
        position: 'absolute',
        left: 125,
        top: props.direc,
        width: 50,
        height: 90,
        backgroundSize: 'cover',
        transition: '0.5s',
        backgroundImage: `url(${greenCar})`
    }}></div>
  )
}
