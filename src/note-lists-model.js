(function(exports) {

function NoteList() {
  this._list = [];
  this._idCount = 0;
}

NoteList.prototype.returnList = function() {
  return this._list;
};

NoteList.prototype.createNote = function(text) {
  note = new Note(text, this._idCount);
  this._list.push(note);
  this._idCount++;
};

exports.NoteList = NoteList;
})(this);
