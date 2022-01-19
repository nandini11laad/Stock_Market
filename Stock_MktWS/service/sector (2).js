const modelFunction=require('../model/sector')

serviceFunction={}

const errHandler=(err)=>{
    throw err
}

serviceFunction.getAllSector=async function(){
    var sector=await modelFunction.getAllSector().then((data)=>{
        data=JSON.parse(JSON.stringify(data))
        console.log(data);
        return data
    }).catch(errHandler)
    return sector
}

module.exports=serviceFunction;