const jwt = require('jsonwebtoken')
const User=require('../models/userModel')


const requireAuth = async(req,res,next ) => {
    //verify authentication , headers will have an authorisation property 
   const {authorisation } = req.headers //contains jwbt
   if(!authorisation){
    return res.status(401).json({error:"no token found"})
   }
   
   //authorisation is three parts 
   const token = authorization.split(' ')[1] //get token

   try{
     const {_id}=jwt.verify(token,process.env.SECRET)//get the id after decrypting
     req.user = await User.findOne({_id}).select('_id') //just return id property 
     next()
   }catch(error){
   console.log(error)
   res.status(401).json({error:"Request not authorised"})
   }

   next()
}

module.exports = requireAuth