import React, {useContext} from 'react'
import greenCar from '../images/green-car.jpg'
import { prp } from './Game'

export default function GreenCar() {
  const direc=useContext(prp)
  return (
    direc.positionCar?<>{direc.positionCar.map((item, id)=>
        <div key={id} style={{
        position: 'absolute',
        left: item,
        top: direc.goBottom-id*400,
        width: 50,
        height: 90,
        backgroundSize: 'cover',
        transition: '0.5s',
        backgroundImage: `url(${greenCar})`
    }}>{direc.goBottom-id*400>=330
      &&direc.goBottom-id*400<=450
      &&((item+50>=direc.goLeft
      &&item+50<=direc.goLeft+50)
      ||(item-50<=direc.goLeft
      &&item+50>=direc.goLeft+50))
      &&direc.setStart('LOST')}</div>
     )}</>:<h3>asd</h3>
  )
}
