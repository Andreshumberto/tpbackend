const express=require('express')
const { getProduct,createProduct,deleteProduct,getProductById} = require('../dao/controlers/productControler')
const productRouter=express.Router()

productRouter.get('/',async(req,res)=>{
    res.json({ok:true,products:await getProduct()})
})

productRouter.post('/',async(req,res)=>{
   const{Codigo,Nombre,Descripcion,Precio,Imagen}=req.body
   console.log(body)
   await createProduct({Codigo,Nombre,Descripcion,Precio,Imagen})
   res.json({ok:true})
})

productRouter.delete('/:pid', async(req, res) =>{
    const {pid} = req.params
    let result = await deleteProduct(pid)
    if(result.ok){
        return res.status(200).json(
            {
                ok: true, 
                products: await getProducts(), 
                deleteProduct: result.deletedProduct
            }
        )
    }
    else{
        return res.status(404).json({ok: false, error: result.error})
    }
})

productRouter.get('/:pid', async (req, res) =>{
    const {pid} = req.params

    let product = await getProductById(pid)
    if(product){
        res.status(200).json({ok: true, product})
    }
    else{
        res.status(404).json({ok: false, error: 'No encontrado'})
    }
})




module.exports=productRouter

