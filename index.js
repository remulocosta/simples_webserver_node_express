const express = require('express');
const bodyParser = require('body-parser')

const userRoute = require('./routes/userRoute');
const postRoute = require('./routes/postRoute');

const app = express();
app.use(bodyParser.urlencoded({extended: false}))
const port = 3000;

userRoute(app)
postRoute(app)

app.get('/', (req, res) => res.send('Olá mundo, Express!'));

app.listen(port, () => console.log('API rodando na porta', port));