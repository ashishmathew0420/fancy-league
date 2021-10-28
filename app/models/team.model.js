module.exports = (sequelize, Sequelize) => {
  const { DataTypes } = require("sequelize");
  const teams = sequelize.define(
    "teams",
    {
      team_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      team_logo: {
        type: DataTypes.STRING,
        defaultValue: "https://cdn.soccerwiki.org/images/logos/clubs/3310.png",
      },
    },
    {
      timestamps: false,
    }
  );
  return teams;
};
