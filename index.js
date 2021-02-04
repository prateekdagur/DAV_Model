require("dotenv").config();
const express = require('express')
const bodyParser = require('body-parser')
const userRouters = require('./routes/colleges')
let app = express()
require('./database/sequelize');
const port = process.env.PORT || 3000
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/college', userRouters)
app.use(require('body-parser').urlencoded({ extended: true }));

app.listen(port, () => console.log(`Express server currently running on port ${port}`))
