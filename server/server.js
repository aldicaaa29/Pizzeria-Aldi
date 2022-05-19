const express = require('express');
const cors = require('cors');
const app = express();

const data = require('./data.json');

app.use(cors());
app.use(express.json());

app.post("/contact", function (req, res){
    console.log(req.body);
    res.send('Hello World!');
});

app.get('/data', function (req, res){
    res.json(data);
});

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(process.env.PORT || 3000);