/* jshint expr:true, camelcase:false */

'use strict';

var expect = require('chai').expect;
var Task;
var priority_id;

describe('Task', function(){

  before(function(done){
    var connect = require('../../app/lib/mongodb-connection-pool');
    connect('Task-test', function(){
      Task = global.nss.Task;
      done();
    });
  });

  beforeEach(function(done){
    global.nss.db.dropDatabase(function(err, result){
      Task = global.nss.Task;
      done();
    });
  });

  // ------------------------------------------------------------------------ //
  describe('new', function(){
    it('should create a new Task', function(){
      var obj = {name:'Laundry', dueDate: '02-30-2014', isComplete: false, tags:'cleaning, boring stuff'};
      var obj2 = {name:'shopping', dueDate: '02-28-2014', isComplete: false};
      var t1 = new Task(obj);
      var t2 = new Task(obj2);

      expect(t1).to.be.instanceof(Task);
      expect(t1).to.have.property('name').and.equal('Laundry');
      expect(t1).to.have.property('dueDate').and.equal('02-30-2014');
      expect(t2.tags).to.have.length(0);
    });
  });
  // ------------------------------------------------------------------------ //

  describe('#save', function(){
    it('should save a Task object into the database', function(done){
      var t1 = new Task ({name:'Laundry', dueDate: '02-30-2014', isComplete: false, tags:'cleaning, boring'});
      t1.save(function(record){
        expect(t1).to.be.instanceof(Task);
        expect(t1.name).to.equal('Laundry');
        expect(t1.dueDate).to.equal('02-30-2014');
        expect(t1).to.have.property('_id').and.be.ok;
        done();
      });
    });


  });

  // ------------------------------------------------------------------------ //
  describe('.findAll', function(){
    it('should return all Tasks in the datbase', function(done){
      var t1 = new Task ({name:'Laundry', dueDate: '02-30-2014', isComplete: false, tags:'cleaning, boring'});
      var t2 = new Task ({name:'Grocery', dueDate: '02-29-2014', isComplete: false, tags:'shopping, logistics'});
      var t3 = new Task ({name:'parachuting', dueDate: '02-28-2014', isComplete: false, tags:'entertainment, fun'});

      t1.save(function(){
        t2.save(function(){
          t3.save(function(){
            Task.findAll(function(Tasks){
              expect(Tasks).to.have.length(3);
              done();
            });
          });
        });
      });
    });
  });

  // ------------------------------------------------------------------------ //
  describe('.findById', function(){
    it('should find the Task by its id', function(done){
      var t1 = new Task ({name:'Laundry', dueDate: '02-30-2014', isComplete: false, tags:'cleaning, boring'});
      var t2 = new Task ({name:'Grocery', dueDate: '02-29-2014', isComplete: false, tags:'shopping, logistics'});
      var t3 = new Task ({name:'parachuting', dueDate: '02-28-2014', isComplete: false, tags:'entertainment, fun'});

      t1.save(function(){
        t2.save(function(){
          t3.save(function(){
            var id = t2._id.toString();
            Task.findById(id, function(foundTask){
              //expect(foundTask).to.be.instanceof(Task);
              expect(foundTask._id.toString()).to.equal(id);
              done();
            });
          });
        });
      });
    });
  });

// ---------------------Delete---------------------------------------------- //
  describe('.deleteById', function(){
    it('should delete the Task by its id from the datbase', function(done){
      var t1 = new Task ({name:'Laundry', dueDate: '02-30-2014', isComplete: false, tags:'cleaning, boring'});
      var t2 = new Task ({name:'Grocery', dueDate: '02-29-2014', isComplete: false, tags:'shopping, logistics'});
      var t3 = new Task ({name:'parachuting', dueDate: '02-28-2014', isComplete: false, tags:'entertainment, fun'});

      t1.save(function(){
        t2.save(function(){
          var id = t2._id.toString();
          t3.save(function(){
            Task.deleteById(id, function(numberRemoved){
              Task.findById(id, function(foundTask){
                expect(numberRemoved).to.equal(1);
                expect(foundTask).to.be.null;
                done();
              });
            });
          });
        });
      });
    });
  });

// -----------------Name--------------------------------------------------- //

  describe('.findByName', function(){
    it('should find the Task by its name', function(done){
      var t1 = new Task ({name:'Laundry', dueDate: '02-30-2014', isComplete: false, tags:'cleaning, boring'});
      var t2 = new Task ({name:'Grocery', dueDate: '02-29-2014', isComplete: false, tags:'shopping, logistics'});
      var t3 = new Task ({name:'parachuting', dueDate: '02-28-2014', isComplete: false, tags:'entertainment, fun'});

      t1.save(function(){
        t2.save(function(){
          t3.save(function(){
            Task.findByName('Grocery', function(foundTask){
              expect(foundTask).to.be.instanceof(Task);
              expect(foundTask.name).to.equal('Grocery');
              done();
            });
          });
        });
      });
    });

    it('should not find the Task by its name', function(done){
      Task.findByName('Grocery', function(foundTask){
        expect(foundTask).to.be.null;
        done();
      });
    });
  });
// ----------------------------findByComplete-------------------------------------- //

  describe('.findByComplete', function(){
    it('should filter Tasks by either true of false', function(done){
      var t1 = new Task({name:'Laundry', dueDate: '02-30-2014', isComplete: false, tags:'cleaning, boring', priority_id: priority_id});
      var t2 = new Task({name:'Grocery', dueDate: '02-29-2014', isComplete: false, tags:'shopping, logistics', priority_id: priority_id});
      var t3 = new Task({name:'parachuting', dueDate: '02-28-2014', isComplete: false, tags:'entertainment, fun', priority_id: priority_id});

      t1.save(function(){
        t2.save(function(){
          t3.save(function(){
            Task.findByComplete(false, function(Tasks){
              expect(Tasks).to.have.length(3);
              expect(Tasks[0].name).to.equal('Laundry');
              done();
            });
          });
        });
      });
    });
  });
// --------------------------------------------------------------------------------- //

});


