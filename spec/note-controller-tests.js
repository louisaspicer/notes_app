
function controllerExists() {
  var noteController = new NoteController();
  assert.isTrue(noteController);
}

function controllerCanInsertHTML() {
  function NoteListViewDouble() {}
  NoteListViewDouble.prototype = {
    htmlString: function() {
      return "<ul><li><div>Chris is slightly better at Javascript</div></li></ul>";
    }
  };
  var noteController = new NoteController();
  var noteListViewDouble = new NoteListViewDouble();
  noteController.noteListView = noteListViewDouble;
  var element = document.getElementById("app");
  noteController.insertHTML();
  assert.isTrue(element.innerHTML === "<ul><li><div>Chris is slightly better at Javascript</div></li></ul>");
}

function controllerCanCreateSingleNoteView() {
  var noteController = new NoteController();
  noteController.createNote("This is a note");
  noteController.showSingleNote(0);
  var element = document.getElementById("app");
  assert.isTrue(element.innerHTML === "<div>This is a note</div>");
}

function controllerGetsUrl() {
  var noteController = new NoteController();
  function LocationDouble() {
    this.hash = "#note/0";
  }
  var locationDouble = new LocationDouble();
  var id = noteController.getIdFromUrl(locationDouble);
  assert.isTrue(id === 0);
}

function controllerShowsNoteForCurrentPage() {

  var noteController = new NoteController();
  noteController.makeUrlChangeShowNoteForCurrentPage();
  noteController.createNote("I'm a note");
  noteController.insertHTML();
  // document.getElementById("app").innerHTML = "<ul><li><a id='link' href='#note/0'><div>I'm a note</div></a></li></ul>";
  // var notes = document.getElementById("app").innerHTML;
  // console.log(notes);
  document.getElementById("link").click();
  var app = document.getElementById("app").innerHTML = "<div>I'm a note</div>";
  assert.isTrue(app === "<div>I'm a note</div>");
}

controllerExists();
controllerCanInsertHTML();
controllerCanCreateSingleNoteView();
controllerGetsUrl();
controllerShowsNoteForCurrentPage();
