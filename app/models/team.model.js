const { sequelize, Sequelize } = require(".");

module.exports = (sequelize) => {
  const { DataTypes } = require("sequelize");
  const teams = sequelize.define("teams", {
    team_id: {
      type: DataTypes.INTEGER,
      primarykey: true,
      autoincrement: true,
    },
    team_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    team_logo: {
      type: DataTypes.STRING,
    },
  });
  return teams;
};
