import React, { useEffect, useRef, useState } from 'react'
// import Counter from './Counter'
const timerStyles = {background:"black",
color:"white",
fontWeight:"700",
fontSize:"1.5rem",
width:"50px",
display:"inline-block",
textAlign:"center",
marginInline:"10px"}

const buttonStyles = {
background:"green"
,color:"white",
fontWeight:"700",
paddingInline:"10px",
marginTop:"10px",marginInline:"5px"}

    const StopWatch = () => {
    const [time,setTime] = useState(120)
    const [isRunning,setIsRunning] = useState(true) 

    let intervalId = null
    useEffect(()=>{
    if (isRunning) {
    intervalId = setInterval(()=>{
    setTime((prev)=>{
    return prev - 1 
    })

    },1000)

    }

    if (time === 0) {
    setIsRunning(false)
    clearInterval(intervalId)
    setTime(0)
    }

    if (isRunning) {

    }
    return ()=> clearInterval(intervalId)
    },[time,isRunning])

    const handleReset = ()=>{
setIsRunning(true)
setTime(120)
    }

  return (
    <div>
      <h1>Stop stopWatch</h1>
<div>
<span style={timerStyles}>{Math.floor(time / 60)}</span>:
<span style={timerStyles}>{time % 60}</span>
</div>
      <button style={buttonStyles} onClick={()=> setIsRunning((prev)=> !prev)}>
{isRunning ? "pause" : "resume"}
      </button>
      <button style={buttonStyles} onClick={()=> setIsRunning(false)} >Stop</button>
      <button style={buttonStyles} onClick={handleReset}>Reset</button>
    </div>
  )
}

export default StopWatch
