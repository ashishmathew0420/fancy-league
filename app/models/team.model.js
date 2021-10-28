const { sequelize } = require(".");
const { Datatypes } = require(sequelize);

module.exports = (sequelize) => {
  const teams = sequelize.define("teams", {
    team_id: {
      type: Datatypes.INTEGER,
      primarykey: true,
      autoincrement: true,
    },
    team_name: {
      type: Datatypes.STRING,
      allowNull: false,
    },
    team_logo: {
      type: Datatypes.STRING,
    },
  });
  return teams;
};
