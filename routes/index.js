const route = require('express').Router()

const path = require('path')

route.get('/',(req,res)=>res.sendFile(path.join(__dirname,'./../views/index.html')))

route.get('/add',(req,res)=>res.sendFile(path.join(__dirname,'../views/añadir.html')))
route.get('/ObjectId',(req,res)=>res.sendFile(path.join(__dirname,'../views/filtro.html')))

module.exports = route