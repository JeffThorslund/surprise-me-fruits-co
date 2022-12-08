const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const router = require("./routes/index");
const port = 8080;
require("dotenv").config();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

app.use("/api", router);

app.listen(port, () => {
  console.log(`Listening on port ${process.env.PORT || port}`);
});
