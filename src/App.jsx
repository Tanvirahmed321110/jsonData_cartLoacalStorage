import { useState } from 'react'
import './App.css'
import Header from './Component/Header/Header'
import Footer from './Component/Footer/Footer'
import Bottles from './Component/Bottles/Bottles'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header></Header>
      <Bottles></Bottles>
      <Footer></Footer>
    </>
  )
}

export default App
