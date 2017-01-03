function testNoteIsStoredInArray() {
  var noteModel = "I am a note";
  var notes = new NoteList();
  assert.isTrue(notes.listOfNotes, "Note is stored in an array");
}

function testCreateNoteModel() {
  var noteModel = "I am another note";
  var notes = new NoteList();
  notes.createNote("I am another note");
  assert.isTrue(notes.listOfNotes = ["I am another note"], "Stores note model");
}

testNoteIsStoredInArray();
testCreateNoteModel();
