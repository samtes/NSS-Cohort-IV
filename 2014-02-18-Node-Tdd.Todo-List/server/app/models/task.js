'use strict';

module.exports = Task;
var tasks = global.nss.db.collection('tasks');
//var Mongo = require('mongodb');

function Task(task){
  this.name = task.name;
  this.dueDate = task.dueDate;
  this.priority = task.priority;
  this.tags = task.tags.split(', ');
}

Task.protoype.save = function(fn){
  tasks.save(this, function(err, record){
    fn(record);
  });
};


