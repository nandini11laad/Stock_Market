const serviceFunction = require('../service/transactionMaster')

const express = require('express')

const app = express()
app.use(express.json());

app.get('/getAllTransaction', async (req, res) => {
  try {
    var transaction = await serviceFunction.getAllTransactionMaster()
    console.log(transaction);
    
    res.send(transaction)
  }
  catch (err) {
    res.status(500)
    res.statusMessage = err
  }

})

app.get('/getTransactionByRID', async (req, res) => {
  try {
    var transaction = await serviceFunction.getTransactionByRID()
    console.log(transaction);
    
    res.send(transaction)
  }
  catch (err) {
    res.status(500)
    res.statusMessage = err
  }

})

app.post('/addTransaction', async (req, res) => {
  try {


    var transaction = await serviceFunction.addTransaction(req.body)


    res.send(transaction)
  }
  catch (err) {
    res.status(500)
    res.statusMessage = err
  }
})

app.put('/updateTransaction', async (req, res) => {
  try {


    var transaction = await serviceFunction.updateTransaction(req.body)


    res.send(transaction)
  }
  catch (err) {
    res.status(500)
    res.statusMessage = err
  }
})

app.post('/deleteTransaction', async (req, res) => {
  try {
    var transaction = await serviceFunction.deleteTransaction(req.body)

    console.log(transaction)
    res.send(transaction)
  }
  catch (err) {
    res.sendStatus(500)
    res.statusMessage = err
  }
})

module.exports = app