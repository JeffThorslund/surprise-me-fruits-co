CREATE TABLE customer
(
    id serial PRIMARY KEY,
    alpha_identifier text NOT NULL,
    name text NOT NULL,
    max integer DEFAULT 100,
    min integer DEFAULT 10
);

INSERT INTO customer("alpha_identifier", "name")
VALUES ('a', 'Anton'),
       ('b', 'Bob'),
       ('c', 'Charlie'),
       ('d', 'Doug'),
       ('e', 'Edward'),
       ('f', 'Frank'),
       ('g', 'George'),
       ('h', 'Heather'),
       ('i', 'Isablle'),
       ('j', 'Joan'),
       ('k', 'Kirk'),
       ('l', 'Leslie'),
       ('m', 'Mike'),
       ('n', 'Nancy'),
       ('o', 'Oscar'),
       ('p', 'Peter'),
       ('q', 'Qaizer'),
       ('r', 'Rachel'),
       ('s', 'Sandy'),
       ('t', 'Tom'),
       ('u', 'Ursula'),
       ('v', 'Victor'),
       ('w', 'Walker'),
       ('x', 'Xavier'),
       ('y', 'Yusuf'),
       ('z', 'Zoe');
