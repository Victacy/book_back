const jwt=require('jsonwebtoken')
require('dotenv').config()


function generateAccessToken(username){
    return jwt.sign(username,process.env.SECRET_KEY)
}

function authenticateToken(request,response,next){
    const authHeader=req.headers['authorization']
    const token=authHeader && authHeader.split('')[1]

    if (token == null)
    return response.sendStatus(401)
    jwt.verify(token,process.env.SECRET_KEY,(err,user) =>{
        console.log(err)
        if(err)
        return response.sendStatus(403)
        req.user=user
        next()
    })
}


module.exports={authenticateToken,generateAccessToken}