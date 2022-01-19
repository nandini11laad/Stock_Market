const modelFunction=require('../model/registerMaster')

const serviceFunction={}

const errHandler=(err)=>{
    throw err
}

serviceFunction.getAllRegister=async function(){

    return await modelFunction.getAllRegister().then(data=>{
        
        
        data= JSON.parse(JSON.stringify(data))
        console.log("In service",data);
        return data
    }).catch(errHandler)
}

serviceFunction.addCustomer=async function(cust){
    console.log('Reached Service regm');
    
    return await modelFunction.addCustomer(cust).then(data=>{
        data=JSON.parse(JSON.stringify(data))
        console.log('In service',data)
        return data
    }).catch(errHandler)
}
module.exports=serviceFunction;