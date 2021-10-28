const db = require("../models");
const Team = db.teams;
const Op = db.Sequelize.Op;

//Create and save new team
exports.create = (req, res) => {
  if (!req.body.team_name) {
    res.status(400).send({
      message: "content cannot be empty!",
    });
    return;
  }

  //create team
  const team = {
    team_name: req.body.team_name,
  };

  //add newteam to teams table
  Team.create(team)
    .then((data) => res.send(data))
    .catch((err) =>
      res.status(500).send({
        message: err.message || "Some error occurred while creating the Team.",
      })
    );
};
