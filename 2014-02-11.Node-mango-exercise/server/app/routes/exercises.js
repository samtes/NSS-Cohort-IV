'use strict';

var MongoClient = require('mongodb').MongoClient;
var Exercise = require('../models/exercise');

exports.create = function(req, res){

  MongoClient.connect('mongodb://localhost/GYM', function(err, db) {
      if(err) {throw err;}
      console.log('Connected to Database');

      var exercise = new Exercise(req.body.name, req.body.time, req.body.calories, req.body.date);

      db.collection('exercises').insert(exercise, function(err, records){
        console.log('RECORDS INSERTED');
        res.jsonp({records:records});
      });
    });
};


exports.list = function(req, res){

  MongoClient.connect('mongodb://localhost/GYM', function(err, db) {
      if(err) {throw err;}
      console.log('Connected to Database');

      db.collection('exercises').find().toArray(function(err, exercises){
        console.log('EXERCISE LIST');
        res.jsonp({exercises:exercises});
      });
    });
};

exports.queryName = function(req, res){

  MongoClient.connect('mongodb://localhost/GYM', function(err, db) {
      if(err) {throw err;}
      console.log('Connected to Database');

      db.collection('exercises').find({name:req.params.name}).toArray(function(err, exercises){
        console.log('EXERCISE');
        res.jsonp({exercises:exercises});
      });
    });
};

