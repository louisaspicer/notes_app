
function testNoteIsStored() {
  var note = new Note("I am undecided on my favourite programming language");
  assert.isTrue(note.text === "I am undecided on my favourite programming language", "Note is stored");
}

function testNoteIsReturned() {
  var note = new Note("I am undecided on my favourite programming language");
  assert.isTrue(note.showText() === "I am undecided on my favourite programming language", "Note is returned");
}

testNoteIsStored();
testNoteIsReturned();
