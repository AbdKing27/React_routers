import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <h1 className='bg-green-600'>This is the end </h1> */}
    <Header  />

    </>
  )
}

export default App
