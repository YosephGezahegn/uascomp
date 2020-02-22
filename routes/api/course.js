/*INSERT INTO course
( id ,Course_name ,Semester,Credit,department_id,Course_no)
VALUES
('	Advanced care: Polyclinical Care',1, 10,  ),
*/

const express = require("express");
const router = express.Router();
const db = require("../../database");

router.get("/", (req, res) => {
  db("course")
    .select()
    .then(data => {
      res.send(data);
    });
});

router.get("/:id", (req, res) => {
  db("course")
    .where({ id: req.params.id })
    .then(data => {
      res.send(data);
    });
});

router.post("/", function(req, res) {
  db.insert(req.body)
    .into("course")
    .then(function(data) {
      res.send(data);
    });
});

router.delete("/:id", function(req, res) {
  db("course")
    .where({ id: req.params.id })
    .del()
    .then(res.send(`${req.params.id} deleted from the database`));
});

router.put("/:id", function(req, res) {
  db("course")
    .where({ id: req.params.id })
    .update(req.body)
    .returning("*")
    .then(function(data) {
      res.send(data);
    });
});
module.exports = router;
