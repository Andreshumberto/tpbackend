import React, { useEffect,useState } from 'react'
import{Link} from 'react-router-dom'
import('./Product.css')

const Products=()=>{
    const [products,setProducts]=useState([])
    useEffect(()=>{
      fetch('http://localhost:3040/api/products')
      .then (res=>res.json())
      .then (result=>setProducts(result.products))
    },[])
    
    return(
        <>
          <h1>"Zarate" - Productos para el Hogar</h1>
          <h3>Listado de Productos</h3>
          <table>
            <thead>
                <td>Codigo</td>
                <td>Producto</td>
                <td>Precio</td>
            </thead>
          </table>
          <div>
             {products.length != 0  && products.map((product) =>(
             <Link to={'/product/'+product._id} key={product._id}>
               <table>
                  <tr>
                    <td>{product.Codigo}</td>
                    <td>{product.Nombre}</td>
                    <td>{product.Precio}</td>
                  </tr>
               </table>
              </Link>
            

            
              ))}
               <div>
                   <hr/>
                   <Link to={'/datos'}>Agregar Producto</Link>
                
                  
               </div>
            </div>
    
        
        </>
        
        
    )
  
} 
 
export default Products
