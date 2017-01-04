function noteListViewExists() {
  var noteListView = new NoteListView();
  assert.isTrue(noteListView);
};

function noteListExistsInView() {
  var noteList = new NoteList()
  var noteListView = new NoteListView(noteList);
  assert.isTrue(noteListView.noteList);
};

function htmlStringOneNote() {
  var noteList = new NoteList()
  var noteListView = new NoteListView(noteList);
  noteListView.noteList.createNote('Chris is slightly better at Javascript');
  assert.isTrue(noteListView.htmlString() === "<ul><a href=#note/0><li><div>Chris is slightly be</div></li></a></ul>");
};

function htmlStringMultipleNotes() {
  var noteList = new NoteList()
  var noteListView = new NoteListView(noteList);
  noteListView.noteList.createNote('Chris is slightly better at Javascript');
  noteListView.noteList.createNote('Tom is also slightly better at Javascript');
  noteListView.noteList.createNote('Chris spotted the text');
  assert.isTrue(noteListView.htmlString() === "<ul><a href=#note/0><li><div>Chris is slightly be</div></li></a><a href=#note/1><li><div>Tom is also slightly</div></li></a><a href=#note/2><li><div>Chris spotted the te</div></li></a></ul>");
};

function htmlStringZeroNotes() {
  var noteList = new NoteList()
  var noteListView = new NoteListView(noteList);
  assert.isTrue(noteListView.htmlString() === "<ul></ul>");
};

function StringLimitSetTo20() {
  var noteList = new NoteList()
  var noteListView = new NoteListView(noteList);
  assert.isTrue(noteListView.shortenString("Chris is slightly better at Javascript") === "Chris is slightly be")
}

noteListViewExists();
noteListExistsInView();
htmlStringOneNote();
htmlStringMultipleNotes();
htmlStringZeroNotes();
StringLimitSetTo20();
