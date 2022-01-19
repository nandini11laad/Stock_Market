const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const app = express()

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', "*");
  res.header('Access-Control-Allow-Methods', '*');
  res.header('Access-Control-Allow-Headers', '*');
  next();
});
app.use('/', require('./routes/registerMaster'))
app.use('/', require('./routes/sector'))
app.use('/', require('./routes/company'))
app.use('/', require('./routes/transactionMaster'))

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const port = 3000
var server = app.listen(port, function () {
  console.log("Listening on" + port);

});

