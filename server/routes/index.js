const poolErrorHandler = require("../helpers/poolErrorHandler");
var router = require("express").Router();

router.get("/products", (req, res) => {
  poolErrorHandler("SELECT * from product", (result) => {
    res.json(result.rows);
  });
});

router.get("/customers", (req, res) => {
  poolErrorHandler("SELECT * from customer", (result) => {
    res.json(result.rows);
  });
});

// UPDATE
router.put("/global-fruit-limit", (req, res) => {
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
router.post("/specific-fruit-limit", (req, res) => {
  const { customer_id, product_id } = req.body;
  handlePoolQuery(
    `INSERT INTO specific_fruit_limit(customer_id, product_id) VALUES (${customer_id}, ${product_id})`,
    (result) => {
      res.json(result.rows);
    }
  );
});

// READ
router.get("/specific-fruit-limit", (req, res) => {
  handlePoolQuery("SELECT * from specific_fruit_limit", (result) => {
    res.json(result.rows);
  });
});

// UPDATE
router.put("/specific-fruit-limit", (req, res) => {
  const { specific_fruit_limit_id, min, max } = req.body;
  handlePoolQuery(
    `UPDATE specific_fruit_limit SET min= ${min}, max= ${max} WHERE id = ${specific_fruit_limit_id}`,
    (result) => {
      res.json(result.rows);
    }
  );
});

// DELETE
router.delete("/specific-fruit-limit", (req, res) => {
  const { specific_fruit_limit_id } = req.body;
  handlePoolQuery(
    `DELETE FROM specific_fruit_limit WHERE id = ${specific_fruit_limit_id};`,
    (result) => {
      res.json(result.rows);
    }
  );
});

module.exports = router;
