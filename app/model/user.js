const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
        },
        password: {
            type: String,
        },
        email: {
            type: String,
        },
        token: {
            type: String,
        }
    }, {timestamps: true},
);

userSchema.pre('save', async function(next){
  const user = this;
  if(user.isModified('password')){
    user.password = await bcrypt.hash(user.password, 8)
  }  
  next();
})

userSchema.methods.toJSON = function(){
    const user = this;
    const userObject = user.toObject();
    delete userObject.password;
    return userObject;
}

userSchema.methods.generateAuthToken = async function (){

    const user = this;
    const token = jwt.sign({_id: user._id.toString()}, process.env.ACCESS_SECRET, {expiresIn: '48h'});
    user.token = token;
    await user.save();
    return user;
}


const User = mongoose.model('User', userSchema);
module.exports = User;