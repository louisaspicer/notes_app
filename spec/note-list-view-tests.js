function testNoteListModelIsStored() {
  var noteListModel = ["This is a note"];
  var noteListView = new NoteListView(noteListModel);
  assert.isTrue(noteListView.noteList === noteListModel, "Note list model is instantiated");
}

function testConvertsStringToHTML() {
  var noteListModel = new NoteList();
  noteListModel.createNote("This is not a real note");
  var noteListView = new NoteListView(noteListModel);
  assert.isTrue(noteListView.convertNotesToHTML() === "<ul><li><div>This is not a real note</div></li></ul>", "Converts note to html");
}

function testConvertsMultipleNotesToHTML() {
  var noteListModel = new NoteList();
  noteListModel.createNote("This is not a real note");
  noteListModel.createNote("This is also not a real note");
  var noteListView = new NoteListView(noteListModel);
  assert.isTrue(noteListView.convertNotesToHTML() === "<ul><li><div>This is not a real note</div></li><li><div>This is also not a real note</div></li></ul>", "Converts multiple notes to html");
}

testNoteListModelIsStored();
testConvertsStringToHTML();
testConvertsMultipleNotesToHTML();
