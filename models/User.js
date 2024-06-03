import mongoose from 'mongoose'

const Users = new mongoose.Schema({
    nome:String,
    email:String,
    senha:String
})

export default Users