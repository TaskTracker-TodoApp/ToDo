import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from './Components/Home'
import { Navbar } from './Components/Navbar'
import { Login } from './Components/Login'
import { SignUp } from './Components/SignUp'
import { Footer } from './Components/Footer'
import { Template } from './Components/Template'
import { About } from './Components/About'
import Contact from './Components/Contact'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <About/>
    <Contact/>
      <Router>
        {/* <Navbar /> */}
        <Routes>
          {/* <Route path='/' element={<Home />} /> */}
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/template' element={<Template />} />


        </Routes>
        {/* <Footer /> */}

      </Router>

    </>
  )
}
export default App
