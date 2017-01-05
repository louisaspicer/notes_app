function controllerExists() {
  var noteController = new NoteController();
  assert.isTrue(noteController);
};

function controllerCanInsertHTML() {
  function NoteListViewDouble() {};
  NoteListViewDouble.prototype = {
    htmlString: function() {
      return "<ul><li><div>Chris is slightly better at Javascript</div></li></ul>"
    }
  };
  var noteController = new NoteController();
  var noteListViewDouble = new NoteListViewDouble();
  noteController.noteListView = noteListViewDouble
  var element = document.getElementById("app");
  noteController.insertHTML()
  assert.isTrue(element.innerHTML === "<ul><li><div>Chris is slightly better at Javascript</div></li></ul>");
};

function controllerCanCreateSingleNoteView() {
  var noteController = new NoteController();
  noteController.createNote("This is a note");
  var note = noteController.noteList._list[0];
  noteController.insertSingleNote(note);
  var element = document.getElementById("app");
  assert.isTrue(element.innerHTML === "<div>This is a note</div>");

};

function controllerGetsUrl() {
  var noteController = new NoteController();
  function LocationDouble() {
    this.hash = "#note/0";
  }
  var locationDouble = new LocationDouble();
  console.log(locationDouble.hash.split("/"))
  var id = noteController.getIdFromUrl(locationDouble);
  assert.isTrue(id === 0);
}

controllerExists();
controllerCanInsertHTML();
controllerCanCreateSingleNoteView();
controllerGetsUrl();
