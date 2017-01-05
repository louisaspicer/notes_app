(function(exports) {

function NoteList() {
  this._list = [];
  this.idCounter = 0;
}

NoteList.prototype.returnList = function() {
  return this._list;
};

NoteList.prototype.createNote = function(text) {
  note = new Note(text, this.idCounter);
  this._list.push(note);
  this.idCounter += 1;
};

exports.NoteList = NoteList;
})(this);
