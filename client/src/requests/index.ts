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

export const updateCustomerLimit = (
  customerId: number,
  min: number,
  max: number
) =>
  fetch(basePath + "/global-fruit-limit", {
    method: "PUT",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ customer_id: customerId, min, max }),
  });

export const createSpecificFruitLimit = (
  customerId: number,
  productId: number
) =>
  fetch(basePath + "/specific-fruit-limit", {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ customer_id: customerId, product_id: productId }),
  });
