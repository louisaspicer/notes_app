
function noteExists() {
  var note = new Note();
  assert.isTrue(note);
};

function noteTakesAndStoresText() {
  var note = new Note("Chris can't do Javascript");
  assert.isTrue(note._text === "Chris can't do Javascript");
};

function noteReturnsText() {
  var note = new Note("Chris can't do Javascript");
  assert.isTrue(note.returnText() === "Chris can't do Javascript");
};

function noteHasId() {
  var note = new Note("George & Louisa can do Javascript", 0);
  assert.isTrue(note._id === 0);
};

noteExists();
noteTakesAndStoresText();
noteReturnsText();
noteHasId();
