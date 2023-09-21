
const Post = require('../model/post');
const mongoose = require('mongoose');

exports.index = async (req,res)=>{
    const {user} = req;
    const posts = await Post.find({userId: user._id});
    return res.send(posts);
}

exports.update = (req,res)=>{
    return res.send("update");
}

exports.store = async (req,res)=>{
    const post = await new Post(req.body);
    post.save();
    return res.send(post);
}

exports.delete = async (req,res)=>{
    const { id } = req.params;
    await Post.findOneAndDelete({
      _id: mongoose.Types.ObjectId(id),
    });
    return res.status(200).json({});
}