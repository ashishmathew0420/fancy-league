const dbConfig = require("../config/db.config");

const Sequelize = require("sequelize");
const dbConfig = require("../config/db.config");
const teamModal = require("./team.model.js");

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.teams = teamModal(sequelize, Sequelize);

module.exports = db;
