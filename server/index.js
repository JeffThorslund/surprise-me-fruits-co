const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const poolErrorHandler = require("./helpers/poolErrorHandler")
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

app.get("/products", (req, res) => {
    poolErrorHandler("SELECT * from product", (result) => {
        res.json(result.rows);
    });
})

app.get("/customers", (req, res) => {
    poolErrorHandler("SELECT * from customer", (result) => {
        res.json(result.rows);
    });
});

// UPDATE
app.put("/global-fruit-limit", (req, res) => {
    const { customer_id, min, max } = req.body;
    handlePoolQuery(
        `UPDATE customer SET min= ${min}, max= ${max} WHERE id = ${customer_id}`,
        (result) => {
            res.json(result.rows);
        }
    );
});

