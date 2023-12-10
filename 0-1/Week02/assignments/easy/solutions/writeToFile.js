// Write to a file
// Using the fs library again, try to write to the contents of a file. You can use the fs library to as a black box, the goal is to understand async tasks.

const fs = require("fs");

const writeDataToFile = (data) => data;

fs.writeFile(
  "./data/sample.txt",
  writeDataToFile("Hello world from write"),
  (err) => (err ? console.log(err) : console.log("File written successfully")),
  fs.readFile("./data/sample.txt", "utf-8", (err, data) => console.log(data))
);
