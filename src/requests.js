const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

const port = 3030;

let data = [{ one: "one data" }];

// GET
app.get("/", (req, res) => {
  console.log("url is", req.url);
  res.send(data);
  console.log("data from GET ", data);
});

// POST
app.post("/", (req, res) => {
  console.log("body is ", req.body);
  data = [...data, req.body];
  res.send(data);
  console.log("data from GET ", data);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
