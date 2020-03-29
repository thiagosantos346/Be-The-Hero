const express = require('express');
const { errors } = require('celebrate');
const routes = require('./routes');
const cors = require('cors');
const port = 3333;
const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(errors());

app.listen(port, ()=> console.log(`Listerning the port ${port}`) );