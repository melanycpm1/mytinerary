/*import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'*/
import './App.css'
import Navbar from './components/navbar'
import Hero from './components/hero'
import Caroussel from './components/carrousel'


function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero/>
        <Caroussel/>
      </main>
    </>
  )
}

export default App
