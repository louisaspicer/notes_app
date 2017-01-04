(function(exports) {

  function NoteListView(newlist) {
    this.noteList = newlist;
    this._stringLength = 20;
  }

  NoteListView.prototype.htmlString = function() {
    var htmlString = "<ul>";
    var length = this.noteList._list.length;
    for (var index = 0; index < length; index++) {
      var shortenedString = this.shortenString(this.noteList._list[index]._text);
      htmlString += "<a href=#note/"+this.noteList._list[index].id+"><li><div>" + shortenedString + "</div></li></a>";
      }
    htmlString += "</ul>";
    return htmlString;
  };

  NoteListView.prototype.shortenString = function(string) {
    return string.substring(0, this._stringLength);
  };



  exports.NoteListView = NoteListView;

})(this);
