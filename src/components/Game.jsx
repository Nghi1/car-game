import React from 'react'
import backGround from '../images/road.png'
import GreenCar from './GreenCar'
import RedCar from './RedCar'

export default function Game() {
  return (
    <div style={{
        position: 'relative',
        backgroundImage: `url(${backGround})`,
        width: 300,
        height: 500,
        backgroundSize: 'cover'
    }}>
        <RedCar/>
        <GreenCar/>
    </div>
  )
}
