const express = require('express')
const app = express()
const mongoose = require('mongoose')
const ejs = require('ejs')
const Fruit = require('./models/fruit')
const methodOverride = require('method-override')


mongoose.connect('mongodb://localhost/fruit' , {useNewUrlParser : true , useUnifiedTopology: true},

()=> console.log ("mongo is connect"))

app.set("view engine" , 'ejs')
app.use(methodOverride('_method'))

app.use(express.urlencoded({extended :true}))


app.get('/' , (req , res) =>{


    Fruit.find()
    .then(fruits =>{

        res.render('index' , {fruits })
    })
   
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
// localhost:4000/fruit/idqwoidhwiqy372648kjhdkjwahd
app.get('/fruit/:id' , (    req , res)=>{

    

Fruit.findById(req.params.id)
.then (fruit => {

    res.render('show' , {fruit})
} )
})
    
// Fruit.find() .then (fruits => )
// Fruit.find({color : red}).then (fruits => )
// Fruit.findById(id).then (fruit =>  )

//Fruit.create({})

// Fruit.findByIdAndUpdate(id , {name : "apple" })
app.get('/update/:id' ,  (req , res) =>{

    res.render('update' , {id : req.params.id})
    
    
    })

app.put('/edit/:id' , (req,res) =>{

    Fruit.findByIdAndUpdate(req.params.id ,{name : req.body.name , color : req.body.color , size :req.body.size})
    .then(()=>{
        res.redirect('/')
    }).catch(err => console.log(err))
})


// Fruit.findByIdAndDelete(id)

app.delete('/delet/:id' , (req , res) =>{

    Fruit.findByIdAndDelete(req.params.id)
    .then(()=>{

        res.redirect('/')
    }).catch(err => console.log(err))

})






app.listen(4000 , ()=> console.log("server run on 4000"))