import express from 'express'
const router = express.Router()
import FarmsService from '../services/FarmsService.js'

router.get("/dados",function(req,res){
    res.render("dados")
})

let dados = []


router.post("/criarFarm", (req,res) => {
    const novaFarm = {
        num_plantas: req.body.num_plantas,
        dt_analise: req.body.dt_analise,
        localizacao:req.body.localizacao,
        tamanho: req.body.tamanho,
        tipo_pupunheira:req.body.tipo_pupunheira,
    }
    dados.push(novaFarm)
})



export default router