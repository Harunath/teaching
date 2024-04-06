import { useState } from "react"
import Page from "./components/Page"
import Page2 from "./components/Page2"
import Page3 from "./components/Page3"
import RandonPick from "./components/RandonPick"

function App() {
  // const [v,setV] = useState("green")

  // let v = "green"
  // console.log("app is rerendering")
  return (
    <>
      {/* <p>{v}</p>
      <p>not changing</p>
      <p>{v}</p>
      <p>not changing</p>
      <p>{v}</p> */}


      {/* <Page v={v}/>
      <button className="bg-red-200 m-2 border" onClick={()=>setV("red")}>Red</button> */}

      <Page2/>

      {/* <Page3/> */}
      {/* <RandonPick/> */}
      
      
      {/* <button className="bg-red-200 m-2 border" onClick={()=>{v="red"; console.log(v)}}>Red</button>
      <button className="bg-yellow-200 m-2 border" onClick={()=>{v="yellow"; console.log(v)}}>yellow</button>
      <button className="bg-blue-200 m-2 border" onClick={()=>{v="blue";console.log(v)}}>blue</button> */}
    </>
  )
}

export default App
