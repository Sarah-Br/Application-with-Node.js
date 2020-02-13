console.log("starting app.js");

const yargs = require("yargs");
const Notes = require("./Notes.js");
const argv = yargs.argv;

// console.log(Notes.add(5,7))
// console.log(Notes.sub(10,3))

// console.log("propcess",process.argv)
// console.log("yargs",yargs.argv)
const title = yargs.argv.title;
const body = yargs.argv.body;
const command = yargs.argv._[0];
if (command === "add") {
  console.log("adding note");
  Notes.addingNote(title,body)
} else if (command === "remove") {
  console.log("removing note");
  Notes.removeNote(title)
} else if (command === "read") {
  console.log("reading note");
  Notes.readNote(title)
} else if (command === "list") {
  console.log("listing all notes");
  Notes.getAll()
} else {
  console.log("Unknown command was used!");
}
