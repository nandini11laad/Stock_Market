const db=require('../dbschema');
const transaction=require('../service/transactionMaster')
const modelFunction={}

const errHandler=(err)=>{
    throw err;
}

modelFunction.getAllSector=()=>{
  return db.Sector.findAll({
      SID:transaction.SID
    }).catch(errHandler)
}

module.exports=modelFunction;