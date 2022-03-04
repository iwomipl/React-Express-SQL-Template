const {Router} = require('express');
const {ValidationError} = require("../utils/errors");

const apiRouter = Router();

apiRouter
    .get('/api', (req, res) => {
        res.json({ "results": ["one", "two", "three", "four"] });
    })
module.exports = { apiRouter };