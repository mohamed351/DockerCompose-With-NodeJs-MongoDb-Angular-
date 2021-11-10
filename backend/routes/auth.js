const auth = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcryptjs");
auth.post("/register",async (req,res)=>{
    try{
     const userExist = await  User.findOne({userName:req.body.userName});
     const emailExist =  await User.findOne({email:req.body.email});
     if(userExist) {return res.status(400).json("user is exist");}
     if(emailExist) {return res.status(400).json("email is exist");}
    const salt = await bcrypt.genSaltSync(10);
    const hash = await bcrypt.hashSync(req.body.password,salt);
    
    const currentUser = new User({
        userName:req.body.userName,
        password:hash,
        email:req.body.email,
        phone:req.body.phone
    });
   const result = await currentUser.save();
    res.json(result._id);
    }catch(error){
        console.log(error);
        res.json(error);
    }
});

auth.post("/login",(req,res)=>{

});



module.exports = auth;