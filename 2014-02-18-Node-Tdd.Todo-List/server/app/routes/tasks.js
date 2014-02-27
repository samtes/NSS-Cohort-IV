'use strict';

var Task;

exports.create = function(req, res){
  init();

  var task = new Task(req.body);
  console.log(req.body);
  task.save(task, function(savedTask){
    res.send(savedTask);
  });
};

function init(){
  Task = require('../models/task');
}
