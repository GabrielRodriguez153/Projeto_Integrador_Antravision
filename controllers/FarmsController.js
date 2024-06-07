import express from 'express'
const router = express.Router()
import FarmsService from '../services/FarmsService.js'

router.get("/dados",(req,res) => {
    FarmsService.SelectAll().then((fazendas) => {
        res.render("dados", {
            fazendas : fazendas
        })
    })
})

router.get("/deletarFarm/:id", (req,res) => {
    const id = req.params.id
    FarmsService.Delete(id)
    res.redirect("/dados")
})

router.get("/editFarm/:id", (req,res) =>{
    const id = req.params.id
    FarmsService.SelectOne(id).then((fazenda) => {
        res.render("dados_edit", {
            fazenda : fazenda
        })
    })
})

router.post("/criarFarm", (req,res) => {
    FarmsService.Create(
        req.body.num_plantas,
        req.body.dt_analise,
        req.body.localizacao,
        req.body.tamanho,
        req.body.tipo_pupunheira
    )
    res.redirect("/dados")
})

router.post("/atualizarFarm/:id", (req,res) => {
    FarmsService.Update(
        req.body.id,
        req.body.num_plantas,
        req.body.dt_analise,
        req.body.localizacao,
        req.body.tamanho,
        req.body.tipo_pupunheira
    )
    res.redirect("/dados")
})


export default router