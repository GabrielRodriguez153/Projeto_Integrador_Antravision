import express from 'express'
import OtherService from '../services/OtherService.js'
const router = express.Router()

router.get("/mapa",(req,res) =>{
    res.render("mapa")
})

router.get("/perfil", async (req,res) => {
    const perfil = await OtherService.perfil(req.session.user.id)
    res.render("perfil", {
        perfil: perfil
    })
})



export default router