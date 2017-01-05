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

function showSingleNote() {
  // function NoteDouble() {
  //   this._text = "I am a note";
  //   this.id = 0;
  // }
  // var noteDouble = new NoteDouble();
  //
  //
  // function NoteListDouble() {
  //   this._list = [noteDouble];
  // }
  // var noteListDouble = new NoteListDouble();
  //
  var noteController = new NoteController();
  // noteController.noteList = noteListDouble;
  //
  // function SingleNoteDouble(noteDouble) {
  //   this.note = noteDouble;
  // }

  noteController.showSingleNote("This is a note");

  var element = document.getElementById("note");
  console.log(element);
  assert.isTrue(element.innerHTML === "This is a note");
}

controllerExists();
controllerCanInsertHTML();
showSingleNote();
