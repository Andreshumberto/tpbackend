import React from 'react'
import{Route,Routes}from 'react-router-dom'
import './App.css'
import Products from './screens/products'
import ProductDetail from './screens/ProductDetail'
import FormDatos from './screens/FormData'

function App() {
  
  return (
    <>
      <Routes>
        <Route path='/' element={<Products/>}/>
        <Route path='/product/:pid' element={<ProductDetail/>}/>
        <Route path='/datos'  element={<FormDatos/>}/>
      </Routes>
      
      
    </>
  )
}

export default App
