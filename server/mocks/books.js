module.exports = function(app) {
  var express = require('express');
  var router = express.Router();
  var book = require('../json/book.json');

  router.get('', function(req, res) {
    res.send(book);
  });

  router.patch('/:id', function(req, res) {
    res.send(204);
  });

  app.use('/api/v1/books', router);
};
