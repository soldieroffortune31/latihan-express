const express = require('express');
const router = express.Router();

const dataStudents = require('../data/students.json');

router.get('/', (req, res) =>{
  const subject = parseInt(req.query.subject);
  if(!subject){
    res.json(dataStudents);
  }else{
    const newArray = [];
    let fullName = "";
    for(let i=0; i<dataStudents.length; i++){
      for(let j=0; j<dataStudents[i].subject_id.length; j++){
        if(dataStudents[i].subject_id[j]===subject){
          fullName = dataStudents[i].first_name+" "+dataStudents[i].last_name;
          newArray.push(fullName)
        }
      }
    }
    res.json(newArray);
  }
});

router.get('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const newArray = [];
  for(let i=0; i<dataStudents.length; i++){
    if(dataStudents[i].id === id){
      newArray.push(dataStudents[i]);
    }
  }
  res.json(newArray);
});

module.exports = router;