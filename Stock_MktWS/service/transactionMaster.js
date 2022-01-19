const modelFunction=require('../model/transactionMaster')

serviceFunction={}

const errHandler=(err)=>{
    throw err
}
serviceFunction.getAllTransactionMaster=async ()=>{

   
    
    return await modelFunction.getAllTransactionMaster().then(data=>{
        data=JSON.parse(JSON.stringify(data))
        console.log(data);
        
        
        return data
    }).catch(errHandler)
    
}

serviceFunction.getTransactionByRID=async ()=>{

   
    
    return await modelFunction.getTransactionByRID().then(data=>{
        data=JSON.parse(JSON.stringify(data))
        console.log(data);
        
        
        return data
    }).catch(errHandler)
    
}

serviceFunction.addTransaction=async (tran)=>{
    
    return await modelFunction.addTransaction(tran).then(data=>{
        data=JSON.parse(JSON.stringify(data))
        return data
    }).catch(errHandler)
}

serviceFunction.updateTransaction=async (tran)=>{
   
    return await modelFunction.updateTransaction(tran).then(data=>{
        data=JSON.parse(JSON.stringify(data))
        return data
    }).catch(errHandler)
}

serviceFunction.deleteTransaction=async (tid)=>{
    
    return await modelFunction.deleteTransaction(tid).then(data=>{
        data=JSON.parse(JSON.stringify(data))
        return data
    }).catch(errHandler)
}

module.exports=serviceFunction;