
function noteExists() {
  var note = new Note();
  assert.isTrue(note);
}

function noteTakesAndStoresText() {
  var note = new Note("Chris can't do Javascript");
  assert.isTrue(note._text === "Chris can't do Javascript");
}

function noteReturnsText() {
  var note = new Note("Chris can't do Javascript");
  assert.isTrue(note.returnText() === "Chris can't do Javascript");
}

function noteHasId() {
  var noteList = new NoteList();
  noteList.createNote("This is a note");
  assert.isTrue(noteList._list[0].id === 0);
}

function secondNoteHasId2() {
  var noteList = new NoteList();
  noteList.createNote("This is a note");
  assert.isTrue(noteList._list[0].id === 0);
  noteList.createNote("This is a note");
  assert.isTrue(noteList._list[1].id === 1);
}

noteExists();
noteTakesAndStoresText();
noteReturnsText();
noteHasId();
secondNoteHasId2();
