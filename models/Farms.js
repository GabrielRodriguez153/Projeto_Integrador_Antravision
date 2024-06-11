import mongoose from "mongoose";

const Farms = new mongoose.Schema({
    num_plantas : Number,
    dt_analise : String,
    localizacao : String,
    tamanho : Number,
    tipo_pupunheira : String,
})

export default Farms