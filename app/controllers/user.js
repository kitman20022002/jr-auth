
const User = require('../model/user');

exports.store = async (req,res)=>{
    const user = await new User(req.body);
    user.save();
    // console.log(user);
    // const userWithHashPassword = await User.findById(user._id);
    return res.send({id: user._id, email: user.email});
}


