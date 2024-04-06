import React, { useEffect, useState } from 'react'

function RandonPick() {
  const [num,setNum] = useState(0)
  const [result,setResult] = useState(0)

  const getResult = () =>{
    setResult(Math.floor(Math.random()*num))
  }
  const updateNum = (e) =>{
    setNum(e.target.value)
  }
  useEffect(()=>{getResult()},[num])
  return (
    <div>
      <label>Input : 
        <input className='border bg-blue-300 p-1' type="number" name="number" value={num} onChange={updateNum} />
      </label>
      <p>Random number is {result}</p>
      <button onClick={getResult}>Get result</button>
    </div>
  )
}

export default RandonPick
