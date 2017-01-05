function noteListExists() {
  var noteList = new NoteList();
  assert.isTrue(noteList);
};

function noteListReturnsList() {
  var noteList = new NoteList();
  assert.isTrue(noteList.returnList() instanceof Array);
};

function noteListCreatesNote() {
  var noteList = new NoteList();
  noteList.createNote("Tom can do Javascript");
  assert.isTrue(noteList._list.length === 1);
};

function creatingNoteIncrementsId() {
  var noteList = new NoteList();
  noteList.createNote("Tom can do Javascript");
  noteList.createNote("Louisa can do Javascript");
  assert.isTrue(noteList._list[0]._id === 0);
  assert.isTrue(noteList._list[1]._id === 1);
}

noteListExists();
noteListReturnsList();
noteListCreatesNote();
creatingNoteIncrementsId();
