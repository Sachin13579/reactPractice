import './App.css'
import ColorPicker from './components/ColorPicker'
import ColorContainer from './components/ColorContainer'
import { useState } from 'react'

function App() {
  const [color,setColor]=useState("")
  function handleColor(value:string) {
    setColor(value)
  }

    return (
        <>
            <ColorContainer props={color}/>
            <ColorPicker setColor={handleColor} />
            <h1>Hello world</h1>
            <p>This is an example of a Vite app.</p>
        </>
    )
}

export default App
