const basePath = "http://localhost:8080/api";

export const getCustomers = () =>
  fetch(basePath + "/customers").then((response) => response.json());

export const getProducts = () =>
  fetch(basePath + "/products").then((response) => response.json());

export const getSpecificFruitLimits = () =>
  fetch(basePath + "/specific-fruit-limit").then((response) => response.json());

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

export const deleteSpecificFruitLimit = (specificFruitLimitId: number) =>
  fetch(basePath + "/specific-fruit-limit", {
    method: "DELETE",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ specific_fruit_limit_id: specificFruitLimitId }),
  });

export const updateSpecificFruitLimit = (
  specificFruitLimitId: number,
  min: number,
  max: number
) =>
  fetch(basePath + "/specific-fruit-limit", {
    method: "PUT",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      specific_fruit_limit_id: specificFruitLimitId,
      min,
      max,
    }),
  });
