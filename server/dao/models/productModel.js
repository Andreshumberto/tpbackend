const mongoose=require('mongoose')
const Product=mongoose.model('product',{
    Codigo:String,
    Nombre:String,
    Descripcion:String,
    Precio:Number,
    Imagen:String
})

module.exports=Product