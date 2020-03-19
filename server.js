const express = require('express')
const app = express()
const mongoose = require('mongoose')
const ejs = require('ejs')
const Fruit = require('./models/fruit')
mongoose.connect('mongoDb://localhost:27017/fruit' , {useNewUrlParser : true , useUnifiedTopology: true},

()=> console.log ("mongo is connect"))

app.set("view engine" , 'ejs')

app.use(express.urlencoded({extended :true}))


app.get('/' , (req , res) =>{



    res.render('index' , {banana : "any thing" , c : "C" })
})

app.get('/create' ,  (req , res) =>{

res.render('create')


})

app.post('/create' , (req , res) =>{

    // console.log(req.body)
    Fruit.create(req.body)
    .then((fruit)=>{
        console.log(fruit)
        res.redirect('/')
    }).catch((err) => console.log(err))
   
    
    
    })
    





app.listen(4000 , ()=> console.log("server run on 4000"))