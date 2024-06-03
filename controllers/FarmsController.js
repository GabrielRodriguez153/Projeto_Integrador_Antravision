import express from 'express'
const router = express.Router()
import FarmsService from '../services/FarmsService.js'

router.get("/dados",function(req,res){
    res.render("dados")
})

router.post("/criarFarm", (req,res) => {
    FarmsService.Create(
        req.body.num_plantas,
        req.body.dt_analise,
        req.body.localizacao,
        req.body.tamanho,
        req.body.tipo_pupunheira,
        req.body.imagem
    )
    res.redirect("/dados") 
})

export default router