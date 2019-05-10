import React, { useState } from 'react'

const Input = () => {
  const [text, setText] = useState('')

  return <input onChange={e => setText(e.target.value)} value={text} />
}

export default Input
