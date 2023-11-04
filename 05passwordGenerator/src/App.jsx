
import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'
import { useRef } from 'react';

function App() {

  function generatePassword(){
    let myNewPassword = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    const nums = "0123456789"
    const chars = "!@#$%^&*.~"

    if(isNumber) str+= nums
    if(isCharacter) str+=chars
    let strLen = str.length
    for(let i=0; i<length; i++){
      let ran = Math.floor(Math.random()*strLen);
      let char= str[ran]
      // console.log(str)
      // if(!char){
      //   console.table([
      //     {"isNumber : ": isNumber},
      //     {"isCharacter":isCharacter},
      //     {"Str:":str},
      //     {"ran":ran}])
      // }
      myNewPassword += char;
    }

    setPassword(myNewPassword)

    console.log("password generated",myNewPassword);
  }

  let [length,setLength] = useState(8)
  let [password,setPassword] = useState(8)
  let [isNumber,setIsNumber] = useState(false)
  let [isCharacter,setIsCharacter] = useState(false)
  let passwordRef = useRef(null);

  useEffect(()=>{
    generatePassword()
  },[length,isNumber,isCharacter])

  function copyPasswordToClipBoard(){
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  }
  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
      <h1 className='text-white text-center my-3'>Password generator</h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
            ref={passwordRef}
        />
        <button
        className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
        onClick={copyPasswordToClipBoard}
        id="copyBtn"
        >copy</button>
        
      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input 
          type="range"
          min={6}
          max={20}
          className='cursor-pointer'
          onChange={(e)=>setLength(e.target.value)}
          value={length}
            />
          <label>Length: {length}</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
              type="checkbox"
              onChange={(e)=>setIsNumber(e.target.checked)}
          />
          <label htmlFor="numberInput">Numbers</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
              type="checkbox"
              onChange={(e)=>setIsCharacter(e.target.checked)}
          />
          <label htmlFor="characterInput">Characters</label>
        </div>
      </div>
    </div>
  )
}

export default App
