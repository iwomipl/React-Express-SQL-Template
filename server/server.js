const express = require('express');
require('express-async-errors');
const methodOverride = require('method-override');
const cors = require('cors');
const {homeRouter} = require("./routers/home");
const {handleError} = require("./utils/errors");

const API_PORT = process.env.port || 5000;
const host = '0.0.0.0';
const app = express();

app.use(methodOverride('_method'));
app.use(express.urlencoded({
    extended: true,
}));
app.use(express.json());
app.use(cors());

app.get('/', homeRouter);

app.use(handleError);

app.listen(API_PORT, host, ()=> console.log(`Listening on port http://${host}:${API_PORT}`));


