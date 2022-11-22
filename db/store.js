const util = require('util');
const fs = require('fs'); 

const uuidv1 = require('uuidv1');

class Store {
  read() {
    return fs.readFileAsync('db/db.json', 'utf8');
  }

  write(note) {
    return writeFileAsync('db/db.json', JSON.stringify(note));
}

getNotes() {
  return this.read().then((notes) => {
    let parsedNotes;
    try {
      parsedNotes = JSON.parse(notes);
    } catch (err) {
      parsedNotes = [];
    }
    
    return parsedNotes;
  });
}

addNote(note) {
  const { title, text } = note;
  if (!title || !text) {
    throw new Error("Note title and text cannot be empty");

  const newNote = { title, text id: uuidv1() };

  }
}

module.exports = new Store();