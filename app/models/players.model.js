module.exports = (sequelize, Sequelize) => {
  const { DataTypes } = require("sequelize");
  const players = sequelize.define(
    "players",
    {
      player_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      player_number: {
        type: DataTypes.INTEGER,
      },
      player_type: {
        type: DataTypes.STRING,
      },
      player_age: {
        type: DataTypes.INTEGER,
      },
      player_image: {
        type: DataTypes.STRING,
        defaultValue:"https://cdn.soccerwiki.org/images/player/57658_1344446012.jpg"
      },
    },
    {
      timestamps: false,
    }
  );
  return players;
};
