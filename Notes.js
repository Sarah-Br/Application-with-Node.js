// console.log('Starting Notes.js')

// const add=(x,y)=>{
//    return  x+y
// }
// const sub=(x,y)=>{
//     return  x-y
//  }
//  module.exports={
//      add,
//      sub
//  }
const fs = require("fs");
const fetchNotes = () => {
  try {
    return JSON.parse(fs.readFileSync("notes.txt"));
  } catch (err) {
    return [];
  }
};

const addingNote = (title, body) => {
  var notes = fetchNotes();
  let note = {
    title,
    body
  };
  notes.push(note);
  fs.writeFileSync("notes.txt", JSON.stringify(notes));
};
const removeNote = title => {
  let notes = fetchNotes();
  let filterdNotes = notes.filter(note => note.title !== title);
  fs.writeFileSync("notes.txt", JSON.stringify(filterdNotes));
};
const readNote = title => {
  let notes = fetchNotes();
  let filterdNotes = notes.filter(note => note.title === title);
  console.log(`Title: ${filterdNotes[0].title} Body: ${filterdNotes[0].body}`);
};
const getAll=()=>{
    let notes = fetchNotes();
    console.log(notes)
}

module.exports = {
  addingNote,
  removeNote,
  readNote,
  getAll
};
