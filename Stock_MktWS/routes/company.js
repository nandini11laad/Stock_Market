const express=require('express')
const app=express()

const serviceFunction=require('../service/company')

app.get('/getAllCompany',async (req,res)=>{
    try{
        var company=await serviceFunction.getAllCompany()
        console.log("In Route",company);
        res.send(company)
    }
    catch(err){
        res.status(500)
        res.statusMessage=err
    }
})

module.exports=app