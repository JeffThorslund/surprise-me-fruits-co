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

// Specific Fruit Parameters CRUD

// CREATE
app.post("/specific-fruit-limit", (req, res) => {
    const { customer_id, product_id } = req.body;
    handlePoolQuery(
        `INSERT INTO specific_fruit_limit(customer_id, product_id) VALUES (${customer_id}, ${product_id})`,
        (result) => {
            res.json(result.rows);
        }
    );
});

// READ
app.get("/specific-fruit-limit", (req, res) => {
    handlePoolQuery("SELECT * from specific_fruit_limit", (result) => {
        res.json(result.rows);
    });
});

// UPDATE
app.put("/specific-fruit-limit", (req, res) => {
    const { specific_fruit_limit_id, min, max } = req.body;
    handlePoolQuery(
        `UPDATE specific_fruit_limit SET min= ${min}, max= ${max} WHERE id = ${specific_fruit_limit_id}`,
        (result) => {
            res.json(result.rows);
        }
    );
});

// DELETE
app.delete("/specific-fruit-limit", (req, res) => {
    const { specific_fruit_limit_id } = req.body;
    handlePoolQuery(
        `DELETE FROM specific_fruit_limit WHERE id = ${specific_fruit_limit_id};`,
        (result) => {
            res.json(result.rows);
        }
    );
});


