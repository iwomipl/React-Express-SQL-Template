const {Router} = require('express');
const {ValidationError} = require("../utils/errors");

const homeRouter = Router();

homeRouter
    .get('/', (req, res) => {
        res.send({result: `I'm in homeRouter`});
    })
module.exports = { homeRouter };