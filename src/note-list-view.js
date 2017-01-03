(function(exports){
  function NoteListView(noteList) {
    this.noteList = noteList;
    this._listOfNotes = noteList.listOfNotes;
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
