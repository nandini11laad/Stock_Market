const db=require('../dbschema')

modelFunction={}

const errHandler=(err)=>{
    throw err
}

modelFunction.getAllCompany=()=>{
    return db.Company.findAll({

    }).catch(errHandler)
}

module.exports=modelFunction