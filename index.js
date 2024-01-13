require("dotenv").config();
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/app", (req, res) => {
  res.send(
    '<h1 style="color:red; backgroundColor:powderblue">This is app route.</h1>'
  );
});

app.get("/redirect", (req, res) => {
  res.send('<a href="https://youtube.com" target="_blank">Go To Youtube</a>');
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`);
});
