// Importando o Express com ES6 Modules
import express from 'express'

const app = express() 

import mongoose from 'mongoose'

import session from "express-session"
import Auth from './middleware/Auth.js'

import flash from 'express-flash'

// Configurando o Express Flash
app.use(flash())


import UserController from './controllers/UserController.js'
import FarmsController from './controllers/FarmsController.js'
import OtheController from './controllers/OtherController.js'

app.use(session({
    secret: "pi",
    // Sessão expira em n segundos (3600000 = 1 hora / 30000 = 30 segundos)
    cookie: {maxAge: 3600000},
    saveUninitialized : false,
    resave: false
}))

mongoose.connect("mongodb://localhost:27017/PI")

// Permite receber dados vindo de formularios
app.use(express.urlencoded({extended: false}))
app.use(express.json())

// Define o EJS como Renderizador de páginas
app.set('view engine', 'ejs')

// Define o uso da pasta "public" para uso de arquivos estáticos
app.use(express.static('public'))

app.use("/", UserController)
app.use("/", FarmsController)
app.use("/", OtheController)

// ROTA PRINCIPAL
app.get("/",Auth,function(req,res){
    res.render("index", {
        messages : req.flash()
    })
})


// INICIA O SERVIDOR NA PORTA 8080
app.listen(8085,function(erro){
    if(erro) {
        console.log("Ocorreu um erro!")

    }else{
        console.log("Servidor iniciado com sucesso!")
    }
})