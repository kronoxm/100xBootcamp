const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

const port = 3000;

app.get("/", (req, res) => res.send("Hello World"));

app.post("/conversations", function (req, res) {
  console.log(req.body);
});

app.listen(port, () => console.log(`Listening on ${port}`));
