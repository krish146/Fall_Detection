const express=require('express')
const router = express.Router()
const {signupUser,loginUser } = require('../controllers/auth_controllers')


//Home page
// router.get('/',homePage) //idk what to retrieve here tho xD

//login route 
router.post('/Login',loginUser)

//signup route
router.post('/signup',signupUser) 



module.exports = router