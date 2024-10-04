const mongoose = require('mongoose')
const bcrypt=require('bcrypt')
const validator = require('validator')

const Schema = mongoose.Schema

const userSchema = new Schema ( { 
    email: {
        type : String,
        required: true,
        unique: true
    },
    password:{
        type:String,
        required: true
    }
})

//static signup method
userSchema.statics.signup = async function(email, password)  {
    if(!email || !password){
        throw Error('All fields must be filled!')
    }

    if(!validator.isEmail(email)){
        throw Error('Email is not Valid!')
    }
   
    if(!validator.isStrongPassword(password)){
        throw Error('Password not strong enough!')
    }
    //if email already exists or not && salting and hashing for security
     const exists = await this.findOne({email} ) //this instead of User as User maynot still refer to a model
         if( exists ){
            throw Error (' Email already in use ')
         }
        //mypassword 
        const salt = await bcrypt.genSalt(10)
        const hash = await bcrypt.hash(password,salt)

        const user = await this.create({ email, password : hash}) //returning details of object after creation
        return user
    }

//static method 
userSchema.statics.login = async function(email,password){
    if(!email || !password){ 
        throw Error('All fields must be filled!')
    }
    const user = await this.findOne({email}) //object with that email will be returned 
    if(!user){
        throw Error('Incorrect email')
    }
    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password,salt)

    const match=await bcrypt.compare(password,user.password) 
    if(!match){
        return Error('Incorrect Password')
    }
   
    return user
}

module.exports = mongoose.model('User', userSchema)