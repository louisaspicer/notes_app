(function(exports) {
  function NoteList() {
    this.listOfNotes = [];
  }

  NoteList.prototype = {
    createNote: function(noteText) {
      note = new Note(noteText);
      this.listOfNotes.push(note.text);
    }
  };


  exports.NoteList = NoteList;
})(this);
