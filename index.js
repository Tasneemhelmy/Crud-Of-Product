import express from 'express'
import dotenv from 'dotenv'
import connected from './DB/connection.js'
import Product from './DB/models/product.model.js'
const app=express()
const port = process.env.PORT||3000
dotenv.config()
connected()
app.use('/public',express.static('public'))
app.use(express.urlencoded({extended:true}))
app.set('view engine','ejs')
app.get('/',async(req,res,next)=>{
    const products=await Product.find()
    res.render('index',{title:"Product Page",products})
    
    // res.sendFile('E:/weeks/MVC/index.html')
})
app.post('/deleteProduct',async(req,res,next)=>{
    await Product.findByIdAndDelete(req.body.deleteId)
    res.redirect('/')   
})

app.post('/addProduct',async(req,res,next)=>{
    await Product.create(req.body)
    res.redirect('/')

})
app.get('/updatePage/:id',async(req,res,next)=>{
    const product= await Product.findById(req.params.id)
    res.render('update',{title:"Update Product",product})
})
app.post('/update/:id',async(req,res,next)=>{
    await Product.findByIdAndUpdate(req.params.id,req.body)
    res.redirect('/')
})


app.listen(port,(error)=>{
    if(error) console.log(error)
        else console.log("server running");
    });   