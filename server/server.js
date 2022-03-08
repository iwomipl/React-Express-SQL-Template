const express = require('express');
require('express-async-errors');
const cors = require('cors');
const { apiRouter } = require("./routers/home");
const {handleError} = require("./utils/errors");

const API_PORT = process.env.port || 5000;
const host = '0.0.0.0';
const app = express();

app.use(express.urlencoded({
    extended: true,
}));
app.use(express.json());
app.use(cors());

app.get('*', apiRouter);
app.post('*', apiRouter);
app.delete('*', apiRouter);

app.use(handleError);

app.listen(API_PORT, host, ()=> console.log(`Listening on port http://${host}:${API_PORT}`));


