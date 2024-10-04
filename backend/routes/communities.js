const express=require('express')
const router = express.Router()
const {getAllCommunities,createCommunity} = require('../controllers/other_controllers')
const requireAuth=require('../middleware/requireAuth')

router.use(requireAuth)
//Home page
// router.get('/',homePage) //idk what to retrieve here tho xD

//login route 
//community list retrival
router.get('/communities',getAllCommunities)

//community list entry 
router.get('/communities',createCommunity)

module.exports = router