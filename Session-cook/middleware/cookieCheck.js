module.exports = (req , res ,next) =>{
    if(req.cookies.userCookie){
        req.session.userLogin = req.cookies.userCookie
    }

    next()
}