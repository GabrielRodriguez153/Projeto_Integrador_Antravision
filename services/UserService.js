import mongoose from 'mongoose'
import us from "../models/User.js"

const User = mongoose.model("User", us)

class UserService {
    Create(nome,email,senha){
        const newUser = new User({
            nome : nome,
            email : email,
            senha : senha
        })
        newUser.save()
    }
    SelectOne(email){
        const user = User.findOne({email : email})
        return user
    }

    Delete(id){
        User.findByIdAndDelete(id).then(() => {
            console.log(`Usuário foi Excluido com Sucesso`)
        }).catch(err => {
            console.log(err)
        })
    }

    async Update(id,nome,sobrenome,email,telefone,cargo){
        await User.findByIdAndUpdate(id,{
            nome : nome,
            sobrenome : sobrenome,
            email : email,
            telefone : telefone,
            cargo : cargo
        }).then(() => {
            console.log(`Dados alterados com sucesso`)
        }).catch(err =>{
            console.log(err)
        })
    }
}

export default new UserService()