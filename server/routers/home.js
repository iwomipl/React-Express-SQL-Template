const {Router} = require('express');
const {TemplateRecord} = require("../records/template.record");

const apiRouter = Router();

apiRouter
    .get('/list-of-users', async (req, res) => {
        const listOfAllUsers = await TemplateRecord.listAll();
        res.json({ "results": listOfAllUsers });
    })
//     .get('/adder', async (req, res)=>{
//     const name = 'string with stringi';
//     const newRecord = new TemplateRecord({name});
//
//     const id = await newRecord.createNew();
//     res.json({ "results": [id, "two"] });
// })
module.exports = { apiRouter };