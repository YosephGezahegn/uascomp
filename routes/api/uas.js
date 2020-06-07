/*INSERT INTO uas 
(uas_name)
VALUES
('Arcada') */

const express = require("express");
const router = express.Router();
const knex = require("../../database/index.js");

router.get("/", (req, res) => {
  knex("uas")
    .select()
    .then(data => {
      res.send(data);
    });
});



router.get("/:id", (req, res) => {
  knex("uas")
    .where({ id: req.params.id })
    .then(data => {
      res.send(data);
    });
});

router.put("/:id", function (req, res) {
  knex("uas")
    .where({ id: req.params.id })
    .update(req.body)
    .returning("*")
    .then(function (data) {
      res.send(data);
    });
});
router.post("/", function (req, res) {
  knex.insert(req.body)
    .into("uas")
    .then(function (data) {
      res.send(data);
    });
});

router.delete("/:id", function (req, res) {
  knex("uas")
    .where({ id: req.params.id })
    .del()
    .then(res.send(`${req.params.id} deleted from the database`));
});

module.exports = router;
