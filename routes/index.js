const express = require('express');
const router = express.Router();

const dataStudents = require('../data/students.json');
const dataTeachers = require('../data/teachers.json');

router.get('/', (req, res) => {
  res.json(dataStudents.concat(dataTeachers));
});

module.exports = router;