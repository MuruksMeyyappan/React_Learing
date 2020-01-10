require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const app = express();
const server = require("./server/server");

// middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use(express.static(path.resolve(__dirname, "client/build")));

app.get("/ping", (_, res) => {
  return res.send("pong");
});

app.get("/", (_, res) => {
  res.sendFile(path.resolve(__dirname, "client/build", "index.html"));
});

app.use("/api", server);

app.set("PORT", process.env.PORT || 8080);
app.listen(app.get("PORT"), err => {
  if (err) throw err;
  console.log(`Server started on PORT: ${app.get("PORT")}`);
});
