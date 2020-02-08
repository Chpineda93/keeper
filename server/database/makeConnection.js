const knex = require("knex");
const opt = require("./connection");

const db = knex(opt);

module.exports = db;