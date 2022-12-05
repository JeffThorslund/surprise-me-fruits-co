CREATE TABLE product
(
    id serial PRIMARY KEY,
    product_name text NOT NULL
);

INSERT INTO product("product_name")
VALUES ('Apple'),
       ('Blueberry'),
       ('Cranberry'),
       ('Durian'),
       ('Elderberry'),
       ('Figs'),
       ('Grape'),
       ('Honeyberry'),
       ('Icaco');
