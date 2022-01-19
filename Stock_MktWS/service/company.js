const modelFunction=require('../model/company')

serviceFunction={}

const errHandler=(err)=>{
    throw err
}

serviceFunction.getAllCompany=async ()=>{
    var company=await modelFunction.getAllCompany().then(data=>{

        data=JSON.parse(JSON.stringify(data))
        console.log(data);
        return data
    }).catch(errHandler)
    return company
}

module.exports=serviceFunction