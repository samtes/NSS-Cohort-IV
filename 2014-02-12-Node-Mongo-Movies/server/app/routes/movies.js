'use strict';

var Movie = require('../models/movie');
var Mongo = require('mongodb');

exports.index = function(req, res){
  var db = req.app.locals.db;

  db.collection('movies').find().toArray(function(err, movies){
    res.send({movies:movies});
  });
};

exports.create = function(req, res){
  var db = req.app.locals.db;
  var movies = db.collection('movies');

  var movie = new Movie(req.body);
  movies.insert(movie, function(err, records){
    res.send(records[0]);
  });
};


exports.delete = function(req, res){
  var db = req.app.locals.db;
  var movies = db.collection('movies');
  var id = Mongo.ObjectID(req.params.id);
  var query = {_id : id};

  movies.remove(query, function(err, count) {
    res.send({deleted:count, id:req.params.id});
  });
};

exports.send = function(req, res){
  var db = req.app.locals.db;
  var movies = db.collection('movies');
  var id = Mongo.ObjectID(req.params.id);
  var query = {_id : id};

  movies.find(query).toArray(function(err, movie) {
    res.send({movie:movie});
  });
};

exports.adjust = function(req, res){
  var db = req.app.locals.db;
  var movies = db.collection('movies');

  var id = Mongo.ObjectID(req.params.id);
  var query = {_id : id};
  var movie = new Movie(req.body);
  movies.update(query, movie, function(err, count){
    res.send({updated:count, id:req.params.id, movie:movie});
  });
};





