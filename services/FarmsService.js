import mongoose from "mongoose"
import far from '../models/Farms.js'

const Farm = mongoose.model("Farm", far)

class FarmService{
    Create(num_plantas,dt_analise,localizacao,tamanho,tipo_pupunheira){
        const newFarm = new Farm({
            num_plantas : num_plantas,
            dt_analise : dt_analise,
            localizacao : localizacao,
            tamanho : tamanho,
            tipo_pupunheira : tipo_pupunheira,
        })
        newFarm.save()
    }
    
    SelectAll() {
        const fazendas = Farm.find()
        return fazendas
    }
    
    Delete(id){
        Farm.findByIdAndDelete(id).then(() => {
            console.log("Plantação Excluída com Sucesso")
        }).catch(err => {
            console.log(err)
        })
    }

    SelectOne(id){
        const fazen = Farm.findOne({_id : id})
        return fazen
    }

    Update(id,num_plantas,dt_analise,localizacao,tamanho,tipo_pupunheira){
        Farm.findByIdAndUpdate(id, {
            num_plantas : num_plantas,
            dt_analise : dt_analise,
            localizacao : localizacao,
            tamanho : tamanho,
            tipo_pupunheira : tipo_pupunheira
        }).then(() => {
            console.log("Dados da Plantação Alterados com Sucesso")
        }).catch(err =>{
            console.log(err)
        })
    }
}

export default new FarmService()