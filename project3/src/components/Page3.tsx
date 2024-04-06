import axios from "axios"
import { useState } from "react"
import { useEffect } from "react"

function Page3() {

  const [p,setP] = useState("")
  const [colors,setColors] = useState(["yellow"])

  const [num,setNum] = useState(0)
  const getHome = async () =>{
    const result = await axios.get("http://localhost:3000/") 
    console.log(result)
    setP(result.data)
  }

  useEffect(()=>{
    getHome()
    getColors()
  },[num])
  
  const getColors = async () =>{
    const result = await axios.get("http://localhost:3000/colors") 
    setColors(()=> result.data)
    console.log(colors)
  }
  return (
    <div>
      <p>{p}</p>

      {colors.map((item)=>
        <p key={item}>{item}</p>
      )}

      {/* <p>{colors}</p> */}
      <button onClick={()=>setNum(num+1)}>Increment {num}</button>
    </div>
  )
}

export default Page3
