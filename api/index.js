const express = require("express");
const MongoClinet = require("mongodb").MongoClient;
const cors = require("cors");
const multer = require("multer");

const app = express();

app.use(cors());
app.use(
  cors({
    origin: "*",
  })
);
// // call moudle :
const Taks = require("./src/routes/taks.route");

// call route
Taks(app);
const port = 3030;
app.listen(port, () => {
  console.log("Server is running on port :", port);
});
