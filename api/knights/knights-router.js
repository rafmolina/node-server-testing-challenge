const express = require('express');

const Knights = require('./knights-model');

const router = express.Router();

router.get('/', (req,res)=>{
    Knights.find()
    .then(knight =>{
        res.status(200).json(knight)
    })
});

router.post('/', (req, res) => {
    Knights.insert(req.body)
    .then(knight =>{
      res.status(200).json(knight)
    })
    .catch(err =>{
      res.status(500).json(err)
    })
  });

  router.delete("/:id", (req, res) => {
    const id = req.params.id;
    Knights.remove(id)
      .then(res => {
        res.status(201).json(res);
      })
      .catch(err => {
        res.status(500).json(err);
      });
});


module.exports = router;