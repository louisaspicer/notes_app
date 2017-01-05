function singleNoteExists() {
  var singleNote = new SingleNote();
  assert.isTrue(singleNote);
}

function convertsToHTML() {
  function NoteDouble(text) {
    this._text = text;
  }

  NoteDouble.prototype = {
    returnText: function() {
      return this._text;
    }
  };


  var noteDouble = new NoteDouble("This is a note");
  var singleNote = new SingleNote(noteDouble);

  assert.isTrue(singleNote.convertToHTML() === "<div>This is a note</div>");
}

singleNoteExists();
convertsToHTML();
