const {Router} = require('express');

const homeRouter = Router();

homeRouter
    .get('/', (req, res) => {
        res.send({result: `I'm in homeRouter`})
    });
module.exports = { homeRouter };