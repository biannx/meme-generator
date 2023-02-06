import { useState } from 'react'
import './App.css'
import Header from './components/header.jsx'
import Meme from './components/meme.jsx'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header />
      <Meme />
    </div >
  )
}

export default App
