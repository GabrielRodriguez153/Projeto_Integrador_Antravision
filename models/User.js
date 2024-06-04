import mongoose from 'mongoose'

const Users = new mongoose.Schema({
    nome:String,
    sobrenome:String,
    telefone:Number,
    cargo:String,
    email:String,
    senha:String
})

export default Users