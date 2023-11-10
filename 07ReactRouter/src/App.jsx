import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './Layout'
import Home from './componenets/Home/Home'
import About from './componenets/About/About'
import Contact from './componenets/Contact/Contact'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element = {<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path="about" element={<About/>}/>
          <Route path="contact" element={<Contact/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
