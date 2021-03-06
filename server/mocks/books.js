module.exports = function(app) {
  var express = require('express');
  var router = express.Router();
  var book = require('../json/book.json');

  router.get('', function(req, res) {
    res.send(book);
  });

  router.get('/:id', function(req, res) {
    const id = req.id || 1;

    book.data = book.data[id - 1];
    res.send(book);
  });

  router.patch('/:id', function(req, res) {
    const id = req.id || 1;

    book.data = book.data[id - 1];
    res.send(book, 204);
  });

  app.use('/api/v1/books', router);
};
