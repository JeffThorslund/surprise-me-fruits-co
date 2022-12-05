import { useEffect, useState } from "react";
import { getCustomers, getProducts, getSpecificFruitLimits } from "../requests";

export const useCustomerData = () => {
  const [customers, setCustomers] = useState([]);
  const [products, setProducts] = useState([]);
  const [specificFruitLimits, setSpecificFruitLimits] = useState([]);

  useEffect(() => {
    // This will be a performance hit, but required until we can safely create data structure without data dependency issues.
    Promise.all([getCustomers, getProducts, getSpecificFruitLimits]).then(
      ([customers, products, specificFruitLimits]) => {
        setCustomers(customers);
        setProducts(products);
        setSpecificFruitLimits(specificFruitLimits);
      }
    );
  }, []);

  return { customers, products, specificFruitLimits };
};
