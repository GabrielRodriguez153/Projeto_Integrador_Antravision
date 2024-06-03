import express from 'express'
const router = express.Router()

router.get("/mapa",(req,res) =>{
    res.render("mapa")
})

router.get("/perfil", (req,res) => {
    res.render("perfil")
})

export default router