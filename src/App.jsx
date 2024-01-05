
import { useState } from 'react'
import './App.css'

function App() {
  
  const [color,setColor] = useState("purple")


  return (
    <div className="w-full h-screen duration-200" style={{backgroundColor:color}}>
      <button className='rounded-xl px-3 py-1 outline-none bg-red-700 text-black m-3'
      onClick={()=>setColor("red")}>
        RED
      </button>
      <button className='rounded-xl px-3 py-1 outline-none bg-black text-white m-3'
      onClick={()=>setColor("black")}>
        BLACK
      </button>
      <button className='rounded-xl px-3 py-1 outline-none bg-green-800 text-black m-3'
      onClick={()=>setColor("green")}>
        GREEN
      </button>
      <button className='rounded-xl px-3 py-1 outline-none bg-pink-600 text-black m-3'
      onClick={()=>setColor("pink")}>
        PINK
      </button>
      <button className='rounded-xl px-3 py-1 outline-none bg-blue-700 text-black m-3'
      onClick={()=>setColor("blue")}>
        BLUE
      </button>
    </div>
  )
}

export default App
