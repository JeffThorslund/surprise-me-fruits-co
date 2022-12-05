CREATE TABLE specific_fruit_limit
(
    id serial PRIMARY KEY,
    customer_id integer references customer (id),
    product_id integer references product (id),
    max integer DEFAULT 100,
    min integer DEFAULT 0
);
