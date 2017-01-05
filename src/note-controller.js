(function(exports) {

  function NoteController() {
    this.noteList = new NoteList();
    this.noteListView = new NoteListView(this.noteList);
  }

  NoteController.prototype.createNote = function(text) {
    this.noteList.createNote(text);
  };

  NoteController.prototype.HTMLconvert = function() {
    return this.noteListView.htmlString();
  };

  NoteController.prototype.insertHTML = function() {
    document.getElementById("app").innerHTML = this.HTMLconvert();
  };

  NoteController.prototype.makeUrlChangeShowNoteForCurrentPage = function() {
     window.addEventListener("hashchange", this.showNoteForCurrentPage());
   };
  NoteController.prototype.showNoteForCurrentPage = function() {
      html = this.singleNoteFromUrl(this.getIdFromUrl(window.location));
      this.showSingleNote(html);
    };

  NoteController.prototype.getIdFromUrl = function(location) {
    return location.hash.split('/')[1];
  };

  NoteController.prototype.singleNoteFromUrl = function(idFromUrl) {
    var note = new SingleNote(this.noteList._list[idFromUrl]);
    return note.convertToHTML();
  };

  NoteController.prototype.showSingleNote = function(singleNoteFromUrl) {
    document.getElementById("note")
     .innerHTML = singleNoteFromUrl;
  };

  exports.NoteController = NoteController;
})(this);
