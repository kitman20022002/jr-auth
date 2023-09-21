const User = require("../model/user");
const bcrypt = require('bcryptjs');

exports.login = async (req,res)=>{
    const {email, password} = req.body;
    const user = await User.findOne({email});
    const isMatch = await bcrypt.compare(password, user.password);
    if(!isMatch){
        return res.sendStatus(401);
    }
    const updatedUser = await user.generateAuthToken();
    return res.send(updatedUser);
}