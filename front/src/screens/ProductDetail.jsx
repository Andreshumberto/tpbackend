import React from 'react'
import { useParams } from 'react-router-dom'
import {useState,useEffect} from 'react'
import{Link} from 'react-router-dom'
import('./ProductDetail.css')


const ProductDetail = () => {
  const {pid}=useParams()
  const [productSelect,setProductSelect]=useState(null)
   useEffect(()=>{
     fetch('http://localhost:3040/api/products/'+pid)
     .then (res=>res.json())
     .then ((result)=>setProductSelect(result.product))

   },[])
   
    return (
    <>
        <div>
          
             <h3>Detalle del Producto</h3>
          {
           productSelect
           ?
           (<div>
              <img src={'http://localhost:3040/'+productSelect.Imagen} alt='foto'></img>
        
              <h4>{productSelect.Nombre}</h4>
              <p>{productSelect.Descripcion}</p>
            </div> )
            :
      
      
            <h2>Cargando</h2>
          }
      
    
        </div>
        <div>
          <Link to={'/'}>Volver al Listado</Link>
        </div>
    
    
    </>     
    )       
         
}



export default ProductDetail