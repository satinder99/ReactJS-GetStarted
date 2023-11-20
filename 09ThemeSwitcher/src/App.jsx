import { useState } from "react"
import Card from "./components/Card"
import ThemeBtn from "./components/Themebtn"
import { ThemeProvider } from "./context/Theme"
import { useEffect } from "react"

function App() {
  const [themeMode, setThemeMode] = useState('light')

  const darkTheme = ()=>{
    setThemeMode('dark')
    console.log("dark mode on")
  }

  const lightTheme = ()=>{
    setThemeMode('light')
    console.log("light mode on")
  }

  useEffect(()=>{
    document.querySelector('html').classList.remove('light','dark')
    document.querySelector('html').classList.add(themeMode)

    console.log("changing the mode of theme")
  },[themeMode])
  return (
    <ThemeProvider value={{themeMode,darkTheme,lightTheme}}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn/>    
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card/>
          </div>
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App
