import React, { useState } from 'react'

const Counter = ({ step = 1 }) => {
  const [count, setCount] = useState(0)

  const addStep = () => {
    setCount(previousCount => previousCount + step)
  }

  return <button onClick={() => addStep()}>{count}</button>
}

export default Counter
