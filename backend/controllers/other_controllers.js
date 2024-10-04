// const User = require('../models/userModel')


const getAllCommunities = async(req,res)=>{
  res.json({msg:"getting all communities"})
}

const createCommunity = async (req,res)=>{
    res.json({msg:"Creating a single Community"})
}

module.exports={getAllCommunities,createCommunity}