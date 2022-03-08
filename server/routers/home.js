const {Router} = require('express');
const {TemplateRecord} = require("../records/template.record");

const apiRouter = Router();

apiRouter
    .get('/list-of-users', async (req, res) => {
        const listOfAllUsers = await TemplateRecord.listAll();
        res.json({ "results": listOfAllUsers });
    })
    .post('/adder/:name', async (req, res)=>{
        const {name} = req.params;

        const newRecord = new TemplateRecord({name});
        const newUser = await newRecord.createNew();

        res.json({ "results": [newUser,]
        })
    })
    .delete('/:id', async (req, res)=>{
        const {id} = req.params;
        const userToDelete = await TemplateRecord.getOne(id);
        await userToDelete.delete();

        const listOfAllUsers = await TemplateRecord.listAll();
        res.json({ "results": listOfAllUsers });
    })
module.exports = { apiRouter };