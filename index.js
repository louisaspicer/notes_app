  window.onload = function () {
  var noteController = new NoteController();
  // window.addEventListener("hashchange", noteController.showNoteForCurrentPage.bind(noteController))
  //   noteController.createNote("I'm a note");
  //   noteController.insertHTML();

  noteController.makeUrlChangeShowNoteForCurrentPage();
  noteController.createNote("I'm a note");
  noteController.insertHTML();
};
