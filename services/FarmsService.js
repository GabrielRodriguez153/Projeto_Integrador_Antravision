import mongoose from "mongoose"
import far from '../models/Farms.js'

const Farm = mongoose.model("Farm", far)

class FarmService{
    Create(num_plantas,dt_analise,localizacao,tamanho,tipo_pupunheira,imagem){
        const newFarm = new Farm({
            num_plantas : num_plantas,
            dt_analise : dt_analise,
            localizacao : localizacao,
            tamanho : tamanho,
            tipo_pupunheira : tipo_pupunheira,
            imagem : imagem
        })
        newFarm.save()
    }
    SelectAll() {
        const fazendas = Farm.find()
        return fazendas
    }
}

export default new FarmService()