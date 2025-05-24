import express from "express";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello Guys welcome to littcood🔥");
});

app.listen(8080, (req, res) => {
  console.log("Server is running on port 8080");
});
