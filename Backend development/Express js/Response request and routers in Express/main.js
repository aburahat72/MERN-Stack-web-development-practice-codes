const express = require("express");
const blog = require("./routes/blog");
const app = express();
const port = 3000;
app.use(express.static("public"));
app.use("/blog", blog)

// Here we can use => get, POST, put , delete any of the methods according to the needs
app.post("/", (req, res) => {
  console.log("hey its a post request");
  res.send("Hello World post!");
});

//Here iam using the get request and sendFile for rendering the html docs to the frontend
app.get("/index", (req, res) => {
  console.log("hey iam index");
  res.sendFile("templates/index.html", { root: __dirname });
});

app.get("/api", (req, res) => {
  console.log("hey iam api");
  res.json({ a: 1, b: 5, c: 8 });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
