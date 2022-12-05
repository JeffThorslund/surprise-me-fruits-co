import { useEffect, useState } from "react";
import { getCustomers, getProducts, getSpecificFruitLimits } from "../requests";
import {
  CustomerDataItem,
  CustomerDB,
  IDictionary,
  ProductDB,
  SFL,
  SpecificFruitLimitDB,
} from "../types";

// Database Types

export const useCustomerData = () => {
  const [customers, setCustomers] = useState<CustomerDB[]>([]);
  const [products, setProducts] = useState<ProductDB[]>([]);
  const [specificFruitLimits, setSpecificFruitLimits] = useState<
    SpecificFruitLimitDB[]
  >([]);

  useEffect(() => {
    // This will be a performance hit, but required until we can safely create data structure without data dependency issues.
    Promise.all([getCustomers(), getProducts(), getSpecificFruitLimits()]).then(
      ([customers, products, specificFruitLimits]) => {
        setCustomers(customers);
        setProducts(products);
        setSpecificFruitLimits(specificFruitLimits);
      }
    );
  }, []);

  return {
    customerDataTree: createCustomerDataTree(
      customers,
      products,
      specificFruitLimits
    ),
    setCustomers,
    setSpecificFruitLimits,
    products,
  };
};

// To decouple the database from the client, explicitly map data into exactly what the client wants.
// Use this as a chance to sort data tree
const createCustomerDataTree = (
  customers: CustomerDB[],
  products: ProductDB[],
  specificFruitLimits: SpecificFruitLimitDB[]
) => {
  const productDictionary = products.reduce<IDictionary<ProductDB>>(
    (prev, curr) => {
      return { ...prev, [curr.id]: curr };
    },
    {}
  );

  return customers
    .sort((a, b) => a.name.localeCompare(b.name))
    .map((customer): CustomerDataItem => {
      return {
        id: customer.id,
        name: customer.name,
        min: customer.min,
        max: customer.max,
        specificFruitLimits: specificFruitLimits
          .filter((specificFruitLimit) => {
            return customer.id === specificFruitLimit.customer_id;
          })
          .map((specificFruitLimit): SFL => {
            return {
              id: specificFruitLimit.id,
              min: specificFruitLimit.min,
              max: specificFruitLimit.max,
              productId: specificFruitLimit.product_id,
              productName:
                productDictionary[specificFruitLimit.product_id].product_name,
            };
          })
          .sort((a, b) => a.productName.localeCompare(b.productName)),
      };
    });
};
