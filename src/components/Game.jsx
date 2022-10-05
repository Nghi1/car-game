import React, {useEffect, useState, useRef, createContext} from 'react'
import backGround from '../images/road.png'
import Display from './Display'
import GreenCar from './GreenCar'
import RedCar from './RedCar'
export const prp=createContext()
export default function Game() {
  const right=useRef([50,125,200])
  const [goBottom,setGoBottom]=useState(10)
  const [goLeft, setGoLeft]=useState(125)
  const [start, setStart]=useState('START')
  const [show, setShow]=useState('block')
  const [positionCar, setPositionCar]=useState([50])
  useEffect(()=>{
    if(start==='GO'){
       setInterval(()=>{
      setPositionCar(prev=>[...prev, right.current[Math.floor(Math.random()*3)]]
      )
    }, 2000)
    }
  }, [start])
  useEffect(()=>{
    if(start==='GO'){
      setShow('none')
       const end=setInterval(()=>{
        setGoBottom((prev=>prev+10))
      }, 200)
      localStorage.clear()
      localStorage.setItem('end-id', end)
    }
    else if(start==='START'){
      setGoBottom(10)
      setShow('block')
    }
    else if(start==='LOST'){
      setGoBottom(10)
      setShow('block')
      clearInterval(localStorage.getItem('end-id'))
    }
  },[start])
  useEffect(()=>{
    const handleMove=(e)=>{
      if(e.keyCode===65){
        leftFunction()   
      }else if(e.keyCode===68){
         rightFunction()
      }
      else if(e.keyCode===13){
        setStart('GO')
      }
    }
    document.addEventListener('keypress', handleMove)
  },[])
  const leftFunction=()=>{
    setGoLeft((prev)=>prev-5)  
  }
  const rightFunction=()=>{
    setGoLeft((prev)=>prev+5)  
  }
  return (
    <>
    <div style={{
        position: 'relative',
        backgroundImage: `url(${backGround})`,
        width: 300,
        height: 500,
        backgroundSize: 'cover',
        overflow: 'hidden'
    }}>
      <div style={{
        textAlign: 'center',
        padding: '250px 0',
        fontSize: '30px',
        color: '#fff',
        display: show
      }}>{start==='START'?<div>Press Enter!</div>:start==='LOST'?<div>You Lost!
        &rarr;Enter</div>:<div></div>}</div>
        <prp.Provider value={{goLeft, goBottom, positionCar, setStart}}>
        <RedCar/>
        <GreenCar/>
        </prp.Provider>
    </div>
     <Display/>
     </>
  )
}
