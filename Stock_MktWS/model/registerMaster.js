 const {Sequelize}=require('sequelize')
 const db=require('../dbschema')

 const modelFunction={}

 const errHandler=(err)=>{
     console.log("Error in register model:"+err);
     throw err;
 }

 modelFunction.getAllRegister=()=>{
    return db.RegisterMaster.findAll({
        include:[db.RegisterTransaction]
    }).catch(errHandler)
 }

 modelFunction.addCustomer=(cust)=>{
     return db.RegisterMaster.create({
         Name:cust.name,
         Email:cust.email,
         Username:cust.username,
         Password:cust.password,
         Cpassword:cust.cpassword,
         ClientID:cust.cid
     }).catch(errHandler)
 }

module.exports=modelFunction;




