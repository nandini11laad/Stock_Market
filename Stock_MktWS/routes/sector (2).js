const serviceFunction = require('../service/sector')

const express = require('express')
const app = express()

app.use(express.json())

app.get('/getAllSector', async function (req, res) {
    try {
        var sector = await serviceFunction.getAllSector()
        res.send(sector)
    }
    catch(err){
        res.status(500)
        res.statusMessage=err
    }
    
    
})

module.exports=app;