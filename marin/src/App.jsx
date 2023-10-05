import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/NavBar/navBar'
import ItemListContainer from './components/ItemListContainer/itemListContainer'

function App() {
  return (
    <>
    <NavBar/>
    <ItemListContainer greting={"Bienvenido a nuestro e-comerce"}/>
    </>
  )
}

export default App
