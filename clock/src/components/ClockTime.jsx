import { useEffect } from "react"
import { useState } from "react"


function ClockTime() {

  // const time = new Date()

  const [time,setTime]= useState(new Date())

  useEffect(()=>{
    const intervalId = setInterval(()=>{
      setTime(new Date())
    },1000)
    
    return () => clearInterval (intervalId) // return callback function !!!
  },[])

  return (
    <div>
        This is the current time: {time.toLocaleDateString()}, {time.toLocaleTimeString()}
    </div>
  )
}

export default ClockTime
