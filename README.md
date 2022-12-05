# Surprise Me Fruit Co.

All your produce tracking needs in a single dashboard.

## Overview

Here at "Surprise Me Fruits Company", we have created a customer dashboard for overseeing ordering limits on "per
customer" basis. After every change you make, press "Save" to persist it in the database, or "Reset" to go back to its
original value.

* Adjust global customer minimums and maximums.
* Add a specific product from the product dropdown.
* Adjust the max and min of specific fruits.
* Delete a specific product from any customer.
* Read validation messages when incorrect values are saved. (Bonus #1)
* See UI loading states during pending requests.

## To Run

```shell
    docker-compose build
    docker-compose up
```

Go to `http://localhost:3000/`

## Layers
### Database
* Postgres

### Server
* Node.js and Express
* Javascript was used to prioritize speed over type-safety

### Client
* React for declarative style and re-components
* Typescript for type-safety in prop passing, componentization and state updating methods
* Grommet UI for quick UI prototyping

### Build Tools
* Docker

## Future Steps
* Automated testing
* Granular authentication and authorization for various roles
* Server-side input validation
