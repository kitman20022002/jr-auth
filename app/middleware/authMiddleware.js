const jwt = require('jsonwebtoken');
const User = require("../model/user");

exports.isAuth = async (req,res, next)=>{
    try {
        const {authorization} = req.headers;
        const authType = authorization.split(' ')[0];
        const authToken = authorization.split(' ')[1];
        if(!authType || !authToken) return res.sendStatus(401);

        if(authType === 'Bearer'){
            const verifyUser = jwt.verify(authToken, process.env.ACCESS_SECRET)
            const user = await User.findById(verifyUser._id);
            if(!user){
                return res.sendStatus(401);
            }
            req.user = user;
            return next();
        }
    }catch(e){
        return res.sendStatus(401);
    }
}