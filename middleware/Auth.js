function Auth(req, res, next) {
    if(req.session.user != undefined){
        next()
    } else {
        res.render("index", {
            loggedOut: true
        })
    }
}

export default Auth