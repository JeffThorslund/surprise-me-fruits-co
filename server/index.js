const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");

const port = 8080;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(
    cors({
        origin: "http://localhost:3000",
    })
);

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
