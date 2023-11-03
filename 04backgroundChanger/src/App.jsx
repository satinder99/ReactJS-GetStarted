import { useState } from 'react'
import './App.css'
function App() {

let [color,setColor] = useState('olive');

function colorGenerator(){
  let myColor = "#";
  const range = "0123456789ABCDEF"

  for(let i=0;i<6;i++){
    let index = Math.floor(Math.random()*(15)) + 1
    console.log(index)
    myColor += range[index];
  }
  console.log("hex value",myColor)
  return myColor;
}

  return (
    <div className="w-full h-screen duration-200"
    style={{backgroundColor:color}}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-black px-3 py-2 rounded-3xl">
          
          <button onClick={()=>{
            let myColor = colorGenerator
            return setColor(myColor)
          }}
          className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
          style={{backgroundColor: "white"}}
          >Random Color</button>

          <button
          onClick={()=>setColor('red')}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "red"}}
          >Red</button>

          <button
          onClick={()=>setColor('green')}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "green"}}
          >Green</button>

          <button
          onClick={()=>setColor('blue')}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "blue"}}
          >Blue</button>

          <button
          onClick={()=>setColor('grey')}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "grey"}}
          >Grey</button>

          <button
          onClick={()=>{return setColor('pink')}}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "pink"}}
          >Pink</button>
        </div>
      </div>
    </div>
  )
}

export default App
