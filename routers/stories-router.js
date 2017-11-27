'use strict';

const express = require('express');
const router = express.Router();

var data = require('../db/dummy-data');

const { DATABASE } = require('../config');
console.log(DATABASE);
const knex = require('knex')(DATABASE);

/* ========== GET/READ ALL ITEMS ========== */
router.get('/stories', (req, res) => {
  knex('stories')
    .select()
    .then(results => res.status(200).json(results));
});

// Another way:

// router.get('/stories', (req, res) => {
//  knex.select()
//    .from('stories')
//    .then(results=>res.json(results));
// });

/* ========== GET/READ SINGLE ITEMS ========== */
router.get('/stories/:id', (req, res, next) => {
  const idInput = parseInt(req.params.id);
  knex('stories')
    .select('id', 'title', 'content')
    .where('id', idInput)
    .then(([result]) => {
      res.status(200).json(result);
    });
});

/* ========== POST/CREATE ITEM ========== */
router.post('/stories', (req, res) => {
  const contentInput = req.body.content;
  const titleInput = req.body.title;
  knex('stories')
    .insert({title: titleInput, content: contentInput})
    .then(results => res.status(201).json(results));
});


// router.post('/stories', (req, res) => {
//   const {title, content} = req.body;
  
//   /***** Never Trust Users! *****/
  
//   const newItem = {
//     id: data.nextVal++,
//     title: title,
//     content: content
//   };
//   data.push(newItem);
//   res.location(`${req.originalUrl}/${newItem.id}`).status(201).json(newItem);
// });

/* ========== PUT/UPDATE A SINGLE ITEM ========== */
router.put('/stories/:id', (req, res) => {
  const idInput = parseInt(req.params.id);
  const titleInput = req.body.title;
  const contentInput = req.body.content;
  knex('stories')
    .where('id', idInput)
    .update('title', titleInput)
    .update('content', contentInput)
    .then(results => res.status(202).json(results));
});


// Original code using dummy-data:
// router.put('/stories/:id', (req, res) => {
//   const {title, content} = req.body;
  
//   /***** Never Trust Users! *****/
  
//   const id = Number(req.params.id);
//   const item = data.find((obj) => obj.id === id);
//   Object.assign(item, {title, content});
//   res.json(item);
// });

/* ========== DELETE/REMOVE A SINGLE ITEM ========== */
router.delete('/stories/id:', (req, res) => {
  const idInput = Number(req.params.id);
  knex('stories')
    .where('id', idInput)
    .del()
    .then(results => {
      if(results) {
        res.sendStatus(204);
      }
    });
});

// Original code using dummy-data:
// router.delete('/stories/:id', (req, res) => {
//   const id = Number(req.params.id);
//   const index = data.findIndex((obj) => obj.id === id);
//   data.splice(index, 1);
//   res.status(204).end();
// });

module.exports = router;