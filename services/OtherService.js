import mongoose from "mongoose"
import us from "../models/User.js"

const User = mongoose.model("User", us)

class OtherService{

    async perfil(id){
        return await User.findById(id)
    }
}

export default new OtherService()