var http = require('http');
const express = require('express')
const session = require('express-session');
const bodyParser = require('body-parser')
const db = require('./queries')
const app = express()
var path = require('path');
const port = 3000

app.use(express.static('./public'));

app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'static')));
let cors = require("cors");
app.use(cors());


app.get('/', (request, response) => {
  response.json({ info: 'Node.js, Express, and Postgres API' })
})



app.post('/booking', db.createBooking)

 

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})