const express = require("express");
const app = express();
const cors = require("cors");
const port = 4000;

const mongoose = require("mongoose");

app.use(express.json());

mongoose.connect("mongodb://localhost:27017/test", { useNewUrlParser: true });
const con = mongoose.connection;

con.on("open", () => {
  console.log("connected...");
});

app.use(cors());

const routes = require("./routes/crudRoutes");
app.use("/api", routes);

const routess = require("./routes/crudRoutes");
app.use("/ap", routess);

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
