require("dotenv").config()
const express = require("express");
const morgan = require("morgan")
const authorRouter = require("./routes/author")
const logger =require("./logger")
const app = express()
const port = process.env.PORT || 63260;

app.use(express.json())
app.use(logger);
app.use(express.static("public"));
// app.use(morgan("dev"))

app.use("/api/v1/author", authorRouter);

app.get("/", (req, res) => {
  res.send("Hello World")
});

app.all("*", (req, res) => {
  res.status(404).json({ message: "Page not found" });
});

app.listen(port, () => {
  console.log(`server started successfully at port ${port}`);
});