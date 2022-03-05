const { v4: uuid } = require('uuid');
const { pool } = require('../utils/db');
const {ValidationError} = require("../utils/errors");

class TemplateRecord{
    constructor(obj){
        this.id = obj.id ?? uuid();
        this.name = obj.name;
        this.startTime = obj.startTime ?? new Date();
        this._validate();
    }

    _validate(){
        if ((this.name.trim()).length < 5) {
            throw new ValidationError('Name should be longer, than 4 characters.');
        }
        if ((this.name.trim()).length > 50) {
            throw new ValidationError('Name should be shorter, than 25 characters.');
        }
    }

    async createNew() {

        await pool.execute('INSERT INTO `users` VALUES(:id, :name, :startTime)', {
            id: this.id,
            name: this.name,
            startTime: this.startTime,
        });
        return this.id;
    }

    static async listAll(){
        const [listOfAllUsers] = await pool.execute('SELECT * FROM `users`');
        return listOfAllUsers.map((user => new TemplateRecord(user)));
    }
}

module.exports = {TemplateRecord};