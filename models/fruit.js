const mongoose = require('mongoose')



const FruitSchima = new mongoose.Schema({
    name : String , 
    color : String , 
    size : Number



}, {timestamps : true})

const Fruit = mongoose.model('Fruit' , FruitSchima)
module.exports = Fruit
