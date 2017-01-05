(function(exports) {
  function SingleNote(note) {
    this.note = note;
  }

SingleNote.prototype = {
  convertToHTML: function() {
    return "<div id="+this.note.id+">" + this.note.returnText() + "</div>";
  }
};
 exports.SingleNote = SingleNote;

})(this);
