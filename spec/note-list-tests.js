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

function noteListIncrementsIdCounter() {
  var noteList = new NoteList();
  noteList.createNote("Tom can do Javascript");
  assert.isTrue(noteList.idCounter === 1);
}

noteListExists();
noteListReturnsList();
noteListCreatesNote();
noteListIncrementsIdCounter();
