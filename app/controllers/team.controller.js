const { teams } = require("../models");
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

//retrieves all teams
exports.findAll = (req, res) => {
  Team.findAll()
    .then((data) => res.send(data))
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving teams",
      });
    });
};

// exports.findOne = (req, res) => {
//   const id = req.params.id;

//   Team.findByPk(id)
//     .then((data) => {
//       if (data) res.send(data);
//       else
//         res.status(400).send({
//           message: `cannot find team with id = ${id}`,
//         });
//     })
//     .catch((err) => {
//       res.status(500).send({
//         message: `cannot find team with id = ${id}`,
//       });
//     });
// };

exports.update = (req, res) => {
  const id = req.params.id;

  Team.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          messasage: "Team updated sucessfully",
        });
      } else {
        res.send({
          message: `Cannot update Team with id=${id}. Maybe Team was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: `Error updating Team by id = ${id}`,
      });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;

  Team.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Team was deleted",
        });
      } else {
        res.send({
          message: `Cannot delete Team with id=${id}. Maybe Team was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: `Cannot delete Team with id=${id}`,
      });
    });
};
