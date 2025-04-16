import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Routes,Route } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import Room from './components/Room'

function App() {
  const [count, setCount] = useState(0)

  return (

<Routes>
<Route path='/' element={<Home/>} />
<Route path='/room/:roomid' element={<Room/>}/>
</Routes>


  )
}

export default App
