require('dotenv').config() //for process.env object to get all the variables in .env to itself (initilize)

const mongoose=require('mongoose')
const express=require('express')

const routess=require('./routes/routes')
const communityroute= require('./routes/communities')

const app=express();

app.use(express.json());
app.use('/',(req,res,next)=>{//global middle ware, url is always optional
   
    console.log(req.path,req.method);
    next()
})
app.use('/Hobnob',routess) // go check the two url to get data by default
app.use('/Hobnob/Home',communityroute)
// app.use('/Hobnob/communities',communitylist)

mongoose.connect(process.env.MONG_URL).then(()=>{ //after connecting with database, listen to port for requests
    app.listen(port, () => {
        console.log("Server connected to port ",port);
    });

}).catch((error)=>{
    console.log(error)
})
const port =process.env.PORT||3000;
