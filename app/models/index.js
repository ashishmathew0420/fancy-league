const dbConfig = require("../config/db.config");

const Sequelize = require("sequelize");
const teamModal = require("./team.model.js");
const playerModal = require("./players.model");

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
db.players = playerModal(sequelize, Sequelize);

db.teams.hasMany(db.players, { as: "players" });
db.players.belongsTo(db.teams, {
  foreignKey: "teamId",
  as: "team",
});

module.exports = db;
