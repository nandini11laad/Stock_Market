const serviceFunction = require('../service/registerMaster')
const express=require('express')
const app=express();
app.use(express.json());


app.get('/getAllRegister', async function(req, res){
    try {
        var register = await serviceFunction.getAllRegister()    
        res.send(register)
    }
    catch(err){
        res.status(500)
        res.statusMessage=err
    }
});

app.post('/addCustomer',async function(req,res){
    try{
        var register=await serviceFunction.addCustomer(req.body)
        console.log(register);
        
        res.send(register)
    }
    catch(err){
        res.status(500)
        res.statusMessage=err
    }
})

module.exports=app;