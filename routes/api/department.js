/*INSERT INTO department 
(department_name ,duration,extent,tution,studylevel,uas_id,scholarship, uas_name)
VALUES
('Bachelor of Health Care (Registered Nurse)',3.5, 210, 5000, 'Bachelor', true ) */

const express = require('express');
const router = express.Router();
const db = require('../../database');

router.get('/', (req, res) => {
	db('department')
		.select()
		.then((data) => {
			res.send(data);
		});
});

router.get('/:id', (req, res) => {
	db('department')
		.where({ id: req.params.id })
		.then((data) => {
			res.send(data);
		});
});

router.post('/', function(req, res) {
	db.insert(req.body)
		.into('department')
		.then(function(data) {
			res.send(data);
		});
});

router.delete('/delete/:id', function(req, res) {
	db('department')
		.where({ id: req.params.id })
		.del()
		.then(res.send(`${req.params.id} deleted from the database`));
});

router.put('/:id', function(req, res) {
	db('department')
		.where({ id: req.params.id })
		.update(req.body)
		.returning('*')
		.then(function(data) {
			res.send(data);
		});
});
router.get('/search/:text', (req, res) => {
	let text = req.params.text;
	db('department')
		.where('department_name', 'like', `%${text}%`)
		.then((data) => {
			res.send(data);
		});
});

module.exports = router;
