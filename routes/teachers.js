const express = require('express');
const router = express.Router();

const dataTeachers = require('../data/teachers.json');

router.get('/', (req, res) => {
  const subject = req.query.subject;
  const newArray = [];
  if(!subject){
    res.json(dataTeachers);
  }else{
    for(let i=0; i<dataTeachers.length; i++){
      if(dataTeachers[i].subject_name === subject){
        newArray.push(dataTeachers[i]);
      }
    }
    res.json(newArray);
  }
});

module.exports = router;