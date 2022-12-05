const basePath = "http://localhost:8080/api";

export const getCustomers = fetch(basePath + "/customers").then((response) =>
  response.json()
);

export const getProducts = fetch(basePath + "/products").then((response) =>
  response.json()
);

export const getSpecificFruitLimits = fetch(
  basePath + "/specific-fruit-limit"
).then((response) => response.json());
