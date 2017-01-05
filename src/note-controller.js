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

  NoteController.prototype.insertSingleNote = function(note) {
        var singleNote = new SingleNote(note);
        document.getElementById("app").innerHTML = singleNote.convertToHTML();
  };

  NoteController.prototype.getIdFromUrl = function(location) {
    return Number(location.hash.split("/")[1]);
  };

  exports.NoteController = NoteController ;
})(this);
