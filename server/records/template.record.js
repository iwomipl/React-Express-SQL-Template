const { v4: uuid } = require('uuid');
const { pool } = require('../utils/db');
const {ValidationError} = require("../utils/errors");

class TemplateRecord{
    constructor(obj){
        this.id = obj.id ?? uuid();
        this.name = obj.name;
        this.startTime = obj.startTime;
        this._validate();
    }

    _validate(){
        if ((this.name.trim()).length <= 3) {
            throw new ValidationError('Name should be longer, than 2 characters.');
        }
        if ((this.name.trim()).length > 50) {
            throw new ValidationError('Name should be shorter, than 25 characters.');
        }
    }

    async createNew() {
        await pool.execute('INSERT INTO `users` VALUES(:id, :name, :startTime)', {
            id: this.id,
            name: this.name,
            startTime: this.startTime ?? new Date(),
        });
        const cratedUser = await TemplateRecord.getOne(this.id);
        return new TemplateRecord(cratedUser);
    }

    static async listAll(){
        const [listOfAllUsers] = await pool.execute('SELECT * FROM `users`');
        return listOfAllUsers.map((user => new TemplateRecord(user)));
    }

    static async getOne(id){
        const [[oneUser]] = await pool.execute('SELECT * FROM `users` WHERE `id`= :id', {
            id,
        });
        return new TemplateRecord(oneUser);
    }
}

module.exports = {TemplateRecord};