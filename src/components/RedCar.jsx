import React from 'react'
import redCar from '../images/red-car.png'

export default function RedCar(props) {
  return (
    <div style={{
        position: 'absolute',
        top: 400,
        left: props.direc,
        backgroundImage: `url(${redCar})`,
        backgroundSize: 'cover',
        rotate: '180deg',
        transition: '0.5s',
        width: 50,
        height: 90
    }}></div>
  )
}
