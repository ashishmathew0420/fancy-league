const db = require("../models");
const Player = db.players;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
  if (!req.body.player_name) {
    res.status(400).send({
      message: "content cannot be empty!",
    });
    return;
  }

  const id = req.params.id;

  //create player
  const player = {
    player_name: req.body.player_name,
    teamId: id,
    player_age: req.body.player_age,
    player_number: req.body.player_number,
    player_type: req.body.player_type,
    player_image: req.body.player_image,
  };

  //add newPlayer  to player table
  Player.create(player)
    .then((data) => res.send(data))
    .catch((err) =>
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the players.",
      })
    );
};

//retrive all players

exports.findAll = (req, res) => {
  const id = req.params.id;
  Player.findAll({ where: { teamId: id } })
    .then((data) => res.send(data))
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving players",
      });
    });
};

exports.update = (req, res) => {
  const id = req.params.id;

  Player.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          messasage: "Player updated sucessfully",
        });
      } else {
        res.send({
          message: `Cannot update Player with id=${id}. Maybe Player was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: `Error updating Player by id = ${id}`,
      });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;

  Player.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Player was deleted",
        });
      } else {
        res.send({
          message: `Cannot delete Player with id=${id}. Maybe Player was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: `Cannot delete Player with id=${id}`,
      });
    });
};
