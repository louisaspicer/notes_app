(function(exports) {

  function NoteController() {
    this._noteList = new NoteList();
  }

  NoteController.prototype = {

    createNote: function(noteText) {
      this._noteList.createNote(noteText);
    },

    _createHTMLWithNotes: function() {
      var noteListView = new NoteListView(this._noteList);
      return noteListView.convertNotesToHTML();
    },

    insertHTMLNotes: function() {
      document.getElementById("app")
      .innerHTML = this._createHTMLWithNotes();
    }
  };

  // function changeElement() {
  //   document.getElementById("app")
  //   .innerHTML = "Howdy";
  // }

  exports.NoteController = NoteController;

})(this);

insertHTMLNotes();
