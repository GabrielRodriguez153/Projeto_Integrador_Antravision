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
}

export default new UserService()