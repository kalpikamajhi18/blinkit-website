import React, { useState } from 'react'
import Navbar from './src/component/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './src/component/Footer'

const MainOutlet = () => {
  const [items,setItems] = useState(0)
  const[price,setPrice] = useState(0)
  return (
    <>
    <Navbar items = {items} price={price} />
    <Outlet context={{items,setItems,price,setPrice}} />
    <Footer/>
    </>
  )
}

export default MainOutlet