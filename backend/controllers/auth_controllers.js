const User = require('../models/userModel')
const jsw  = require('jsonwebtoken')

const createToken = (_id) => { //for creating and returning token based on email or an id 
     return jsw.sign({_id},process.env.SECRET,{ expiresIn: '1d' })
    }

//login - after credentials are valid and user object details are returned, we create token and send it back
const loginUser = async (req,res) => {
    const {email,password} =req.body //get request from fronend
    console.log("login: ",email)
    try{

        const user = await User.login(email,password) // valid or not 
        //user object is from usermodel and has object details
        //create token
        const token = createToken(user._id) //c
         
       res.status(200).json({email,token}) //also can here JWBT token here
    }catch(error){
       res.json({error:error.message}) //send an error message here
    }
    // res.json({msg:'login user'})
}

//signup
const signupUser = async(req,res)=>{
    const {email,password }=req.body
    console.log("login: ",email)
    
    try{
        const user = await User.signup(email,password) // valid or not 
        //user object is from usermodel and has object details
        //create token
        const token = createToken(user._id) //c
         
       res.status(200).json({email,token}) //also can here JWBT token here
    }catch(error){
       res.status(400).json({error:error.message}) //send an error message here
    }
}


module.exports={loginUser,signupUser}