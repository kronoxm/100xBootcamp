// ## File cleaner
// Read a file, remove all the extra spaces and write it back to the same file.

// For example, if the file input was
// ```
// hello     world    my    name   is       raman
// ```

// After the program runs, the output should be

// ```
// hello world my name is raman
// ```

const fs = require("fs");

fs.readFile("./data/cleanFile.txt", "utf-8", (err, data) => {
  const newData = data
    .split(" ")
    .filter((el) => el != "")
    .join(" ");
  fs.writeFile("./data/cleanFile.txt", newData, (err) =>
    err ? console.log(err) : console.log("File updated successfully")
  );
});
