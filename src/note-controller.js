(function(exports) {

  function NoteController() {
    this.noteList = new NoteList();
    this.noteListView = new NoteListView(this.noteList);
  };

  NoteController.prototype.createNote = function(text) {
    this.noteList.createNote(text)
  };

  NoteController.prototype.HTMLconvert = function() {
    return this.noteListView.htmlString();
  };

  NoteController.prototype.insertHTML = function() {
    document.getElementById("app").innerHTML = this.HTMLconvert();
  };

  NoteController.prototype.showSingleNote = function(id) {
        var note = this.noteList._list[id];
        var singleNote = new SingleNote(note);
        document.getElementById("app").innerHTML = singleNote.convertToHTML();
  };

  NoteController.prototype.getIdFromUrl = function(location) {
    return Number(location.hash.split("/")[1]);
  };

  NoteController.prototype.showNoteForCurrentPage = function() {
    console.log(this);
    this.showSingleNote(this.getIdFromUrl(window.location));
  };

  exports.NoteController = NoteController;
})(this);
