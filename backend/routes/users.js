const userRouter = require("express").Router();
const authMiddleware = require("../middleware/auth-middleware");
const User = require("../models/User");

userRouter.get("/",authMiddleware, async(req,res)=>{
    try{
    const listOfUsers = await User.find();
    const mapedUser = listOfUsers.map((user)=>{
            return {
                id:user._id,
                userName:user.userName,
                email:user.email
            }
    });

    res.json(mapedUser);
}catch(error){
    console.log(error);
    res.status(400).json(error);
}
    
});

module.exports = userRouter;