const jwt = require("jsonwebtoken");

module.exports = function(req,res,next){
    const token = req.header("auth-token");
    if(!token){return res.status(401).json("Access Denied");}
    try{
        
        const verifed = jwt.verify(token,process.env.TOKEN);
        
        req.user = verifed;
        next();
    }
    catch{
        res.status(401).json("Invalid Token");
    }
}