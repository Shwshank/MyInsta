const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const port = process.env.PORT || 5000;
const app = express()
const config = require('./config/config')
const routes = require('./routes/routes')
const db = require('./db/db')

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))

app.use('', routes)

app.listen(port, ()=> console.log('Server is up and listening on port : '+port));

module.exports = app;
