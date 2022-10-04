import React,{useContext} from 'react'
import redCar from '../images/red-car.png'
import { prp } from './Game'

export default function RedCar(props) {
  const direc=useContext(prp)
  return (
    <div style={{
        position: 'absolute',
        top: 400,
        left: direc.goLeft,
        backgroundImage: `url(${redCar})`,
        backgroundSize: 'cover',
        rotate: '180deg',
        transition: '0.5s',
        width: 50,
        height: 90
    }}></div>
  )
}
