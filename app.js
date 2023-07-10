const express     = require('express');
const app         = express();
const mysql       = require("mysql2");
const bodyParser  = require('body-parser');
const db          = require("./db/models");

app.use(express.json());

const controll = require('./controllers/routers')
const jobs = require('./controllers/jobs')

app.use('/users', controll)
app.use('/jobs', jobs)

app.get('/', (req, res) => {
   //res.send('Welcome principal')
})



app.listen(3000, () => {
   console.log('listening on port 3000')
});

// Use body-parser
app.use(bodyParser.urlencoded({ extended: false}))