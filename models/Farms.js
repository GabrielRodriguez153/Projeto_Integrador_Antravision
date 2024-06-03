import mongoose from "mongoose";

const Farms = new mongoose.Schema({
    num_plantas : Number,
    dt_analise : Date,
    localizacao : String,
    tamanho : Number,
    tipo_pupunheira : String,
    imagem : String
})

export default Farms