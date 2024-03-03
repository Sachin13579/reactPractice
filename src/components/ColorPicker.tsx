import { useState } from "react"


const ColorPicker = ({ setColor }: { setColor: (color: string) => void }) => {
  const [colorPicker,setColorPicker]=useState("")
  console.log(colorPicker)
  setColor(colorPicker)
  
  return (
    <div >
      <button style={{backgroundColor:"red"}} value={"red"} onClick={(e)=>{setColorPicker(e.target.value)}}>Red</button>
      <button style={{backgroundColor:"Yellow",color:"black"}} onClick={(e)=>{setColorPicker(e.target.value)}} value={"Yellow"}>Yellow</button>
      <button style={{backgroundColor:"Blue"}}value={"Blue"}onClick={(e)=>{setColorPicker(e.target.value)}}>Blue</button>
    </div>
  )
}

export default ColorPicker