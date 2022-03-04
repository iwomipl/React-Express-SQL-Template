const express = require('express');
const cors = require('cors');
const {homeRouter} = require("./routers/home");
const { pool } = require('./utils/db');

const API_PORT = process.env.port || 5000;
const host = '0.0.0.0';
const app = express();

app.use(cors());

app.get('/', homeRouter)

app.listen(API_PORT, host, ()=> console.log(`Listening on port http://${host}:${API_PORT}`));


