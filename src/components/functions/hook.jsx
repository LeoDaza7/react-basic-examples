import React, { Fragment, useState, useEffect } from 'react'

export default function Hook() {

  const [count, setCount] = useState(0)
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    function tick(){
      setTime(new Date())
    }
    const timer = setInterval(()=>tick(),1000)
    return () => {
      clearInterval(timer)
    }
  },[time])//to compare previous state/props before updating for performance reasons

  return (
    <Fragment>
      <h1>Hooks</h1>
      <h3>{time.toLocaleTimeString()}</h3>
      <p>you clicked me { count } times!</p>
      <button onClick={()=> setCount(count + 1) }>
        Click me
      </button>
    </Fragment>
  )

}
