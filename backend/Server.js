const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const PORT = 4000;
const DB_URL = "mongodb://localhost:27017/test";

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect(
  DB_URL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if (err) {
      console.log(`Error connecting to the database: ${err}`);
    } else {
      console.log("Successfully connected to the database");
    }
  }
);

const crudRoutes = require("./routes/crudRoutes");
app.use("/api", crudRoutes);

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
