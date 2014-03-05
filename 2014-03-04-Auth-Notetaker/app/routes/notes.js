'use strict';

var Note = require('../models/note');

exports.index = function(req, res){
  Note.findNotesByUserId(req.session.userId, function(notes){
    res.render('notes/index', {title:'Notes', notes:notes});
  });
};
