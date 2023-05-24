const jwt=require('jsonwebtoken');
const Student=require("../models/student");


module.exports= (req,res,next)=>{
    const {authorization}=req.headers
    console.log("the authorization header i got auth.js",authorization);
    if(!authorization)
    {
        return res.status(401).json({error:"you must be logged in"})
    }
    const token = authorization.replace("Bearer ","")
    console.log("The passed jwt secrte is auth.js",process.env.JWT_SECRET);
    jwt.verify(token,process.env.JWT_SECRET,(err,payload)=>{

        console.log("the jwt token payload is auth.js",payload);
        if(err){
         return   res.status(401).json({error:"you must be logged in"})
        }

        const {_id} = payload
        Student.findById(_id).then(userdata=>{
            req.user = userdata
            next()
        })  
    })
}