(function(exports){
  function NoteListView(noteListModel) {
    this.noteListModel = noteListModel;
    this._listOfNotes = noteListModel.listOfNotes;
  }

  NoteListView.prototype = {

    convertNotesToHTML: function() {
      var output = "<ul>";
      this._listOfNotes.forEach(function(noteText){
        output += "<li><div>" + noteText + "</div></li>";
      });
      output += "</ul>";
      return output;
    }

  };

  exports.NoteListView = NoteListView;
})(this);
