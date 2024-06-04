import express from 'express'
import bcrypt from "bcrypt"
const router = express.Router()
import UserService from '../services/UserService.js'
import OtherService from '../services/OtherService.js'
router.get("/sign_in",(req,res) =>{
    res.render("sign_in", {
        loggedOut: true,
        messages : req.flash()
    })
})

router.get("/sign_up",(req,res) =>{
    res.render("sign_up", {
        loggedOut: true,
        messages : req.flash()
    })
})

router.post("/logout",(req,res) => {
    const id = req.session.user.id
    console.log(id)
    UserService.Delete(id)
    res.redirect("/sign_up")
})

router.post("/alterar",async (req,res) => {
    await UserService.Update(
        req.session.user.id,
        req.body.nome,  
        req.body.sobrenome,
        req.body.email,
        req.body.telefone,
        req.body.cargo
    )
    console.log(req.body.email)
    const perfil = await OtherService.perfil(req.session.user.id)
    res.render("perfil", {
        perfil: perfil
    })
})


router.post("/autenticar", (req, res) => {
    const email = req.body.email
    const password = req.body.senha
    UserService.SelectOne(email).then(user => {
        if (user != undefined){
            const correct = bcrypt.compareSync(password, user.senha)
            if(correct){
                req.session.user = {
                    id : user.id,
                    email : user.email
                }

              
                req.flash('success','Login Efetuado com Sucesso!')
                res.redirect("/main")
            } else {
                req.flash('danger','A senha está Incorreta!')
                res.redirect("/sign_in")
            }  
        } else {
            req.flash('danger','O Usuário não existe!')
            res.redirect("/sign_in")
        }
    })
})

router.post("/criarUser", (req,res) => {
    const name = req.body.nome
    const email = req.body.email
    const password = req.body.senha
    UserService.SelectOne(email).then(user => {
        if (user == undefined) {
        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(password, salt)
        UserService.Create(name, email, hash)
        res.redirect("/main")
        } else {
            req.flash('danger', 'O Usuário já está Cadastrado!')
            res.redirect("/sign_up")
        }
    })
})

router.get("/main",function(req,res){
    res.render("main")
})

export default router