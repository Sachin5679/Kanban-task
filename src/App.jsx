import { useState } from 'react'
import Navbar from './components/Navbar'
import Board from './components/Board';
import './App.css'
import "@fontsource/jost";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Board />
    </>
  )
}

export default App
