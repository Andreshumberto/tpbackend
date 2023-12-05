const express=require('express')
const dotenv=require('dotenv')
const cors=require('cors')
const path=require('path')

const productRouter=require('./routers/productRouter')

dotenv.config()
const mongoose=require('./config/dbConfig')
const app=express()
const PORT=process.env.PORT||8080

app.use(express.static(path.join(__dirname+'/public')))
app.use(cors())
app.use(express.urlencoded({extended: true}))
app.use(express.json())



app.use('/api/products',productRouter)


app.listen(PORT,()=>{
    console.log('el servidor se esta escuchando en http://localhost:'+PORT)
})