import React,{useState} from 'react'
import ('./FormData.css')
import{Link} from'react-router-dom'

const FormDatos=()=>{
    const [datos,setDatos]=useState({
        Codigo:'',
        Nombre:'',
        Descripcion:'',
        Precio:0,
        Imagen:''

    })

    const handleCambioIng=(event)=>{
      setDatos({...datos,[event.target.name]:event.target.value})
      console.log(datos)
    }
    
    const handleSubmit=(event)=>{
        event.preventDefault(),
        fetch('http://localhost:3040/api/products',{
        method:'POST',
        headers:{'Content-Type':'application:json'},
        body:JSON.stringify(datos),
        
    })
    console.log(body)
    .then(res=>res.json())
    .then((data)=>{
        console.log('respuesta del servidor',data)
    })
    .catch((error)=>{
        console.error(error)
    })
   
   }

    return(
   <>
         <h2>Formulario de Carga de Productos</h2>
         
         <form onSubmit={handleSubmit} className='userForm'>
          <br/>
          <label htmlFor='Codigo'>Codigo</label>
          <input placeholder='0000' name='Codigo' id='codigo' value={datos.Codigo} onChange={handleCambioIng}></input>
          <label htmlFor='Nombre'>Nombre</label>
          <input placeholder='Nombre' name='Nombre' id='nombre' value={datos.Nombre}  onChange={handleCambioIng}  ></input>
          <label htmlFor='Descripcion'>Descripcion</label>
          <input placeholder='Descripcion' name='Descripcion'id='descripcion' value={datos.Descripcion} onChange={handleCambioIng}  ></input>
          <label htmlFor='Precio'>Precio</label>
          <input placeholder='0' name='Precio' id='precio'  value={datos.Precio} onChange={handleCambioIng}></input>
          <label htmlFor='Imagen'>Imagen</label>
          <input placeholder='Imagen.jpg' name='Imagen' id='imagen' value={datos.Imagen} onChange={handleCambioIng}></input>
          
          <div>
            <button type='submit'><b>Guardar en Base de Datos</b></button>
          </div>
          <div>
            <Link to={'/'}>Volver al Listado</Link>
          </div>
        </form>
        

   </>  
      
      
        
    ) 


}
export default FormDatos