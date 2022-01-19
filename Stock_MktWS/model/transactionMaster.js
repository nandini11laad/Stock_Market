const db = require('../dbschema')

const modelFunction = {}

const errHandler = (err) => {
    throw err
}

modelFunction.getAllTransactionMaster = () => {
    return db.TransactionMaster.findAll({
        include:[
            db.Sector,
            db.Company
        ]
    }).catch(errHandler)
}

modelFunction.getTransactionByRID=(tran)=>{
    return db.TransactionMaster.findAll({
        include:[
            db.Sector,
            db.Company
        ],
        where:{
            RID:tran.RID
        }
    })
}

modelFunction.addTransaction = (tran) => {

   
            return db.TransactionMaster.create({
                Nshares: tran["nshares"],
                Rate: tran["rate"],
                NetAmt: tran["namt"],
                SID: tran.SID,
                CID: tran.CID

            }).catch(errHandler)
     

}

modelFunction.updateTransaction = (tran) => {
   
            return db.TransactionMaster.update({
                Nshares: tran["nshares"],
                Rate: tran["rate"],
                NetAmt: tran["namt"],
                SID: tran['SID'],
                CID: tran['CID']

            },
                { where: { TID: tran['TID'] } }).catch(errHandler)
       

}

modelFunction.deleteTransaction = (tid) => {
    return db.TransactionMaster.destroy({
        where: { TID: tid.TID }
    }).catch(errHandler)
}


module.exports = modelFunction;