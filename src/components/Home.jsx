import React, { useCallback, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const [value,setValue]=useState('')

    const navigate=useNavigate()

    const handleJoin=useCallback(()=>{
        navigate(`room/${value}`)
    },[navigate,value])

  return (
    <>
        <div>Home</div>
        <div>
            <input type='text' placeholder='Enter room id'
            value={value}
            onChange={(e)=>setValue(e.target.value)}
            >
            </input>
            <button onClick={handleJoin}>Join</button>
        </div>
    </>

    
  )
}

export default Home