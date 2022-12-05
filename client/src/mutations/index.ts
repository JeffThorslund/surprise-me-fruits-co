import React from "react";
import { CustomerDB, SpecificFruitLimitDB } from "../types";

export const updateLocalCustomerLimit = (
  setCustomers: React.Dispatch<React.SetStateAction<CustomerDB[]>>,
  customerId: number,
  min: number,
  max: number
) => {
  setCustomers((prevCustomers) => {
    return prevCustomers.map((prevCustomer) => {
      if (prevCustomer.id === customerId) {
        return {
          ...prevCustomer,
          min,
          max,
        };
      }

      return prevCustomer;
    });
  });
};

export const updateLocalProductLimit = (
  setSpecificFruitLimit: React.Dispatch<
    React.SetStateAction<SpecificFruitLimitDB[]>
  >,
  specificFruitLimitId: number,
  min: number,
  max: number
) => {
  setSpecificFruitLimit((prevSpecificFruitLimits) => {
    return prevSpecificFruitLimits.map((prevSpecificFruitLimit) => {
      if (prevSpecificFruitLimit.id === specificFruitLimitId) {
        return {
          ...prevSpecificFruitLimit,
          min,
          max,
        };
      }

      return prevSpecificFruitLimit;
    });
  });
};

export const addLocalProduct = (
  setSpecificFruitLimit: React.Dispatch<
    React.SetStateAction<SpecificFruitLimitDB[]>
  >,
  id: number,
  customer_id: number,
  product_id: number,
  min: number,
  max: number
) => {
  setSpecificFruitLimit((prevSpecificFruitLimits) => {
    return [
      ...prevSpecificFruitLimits,
      { id, customer_id, product_id, min, max },
    ];
  });
};

export const removeLocalProduct = (
  setSpecificFruitLimit: React.Dispatch<
    React.SetStateAction<SpecificFruitLimitDB[]>
  >,
  specificFruitLimitId: number
) => {
  setSpecificFruitLimit((prevSpecificFruitLimits) => {
    return prevSpecificFruitLimits.filter(
      (prevSpecificFruitLimit) =>
        prevSpecificFruitLimit.id !== specificFruitLimitId
    );
  });
};
