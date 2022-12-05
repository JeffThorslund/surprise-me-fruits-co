import React from "react";
import { Grommet } from "grommet";
import { useCustomerData } from "../_utils/useCustomerData";
import { CustomerTable } from "./CustomerTable";

const theme = {
  global: {
    font: {
      family: "Roboto",
      size: "18px",
      height: "20px",
    },
  },
};

function App() {
  const { customerDataTree, setCustomers, setSpecificFruitLimits, products } =
    useCustomerData();

  return (
    <Grommet theme={theme}>
      <CustomerTable
        customerDataTree={customerDataTree}
        setCustomers={setCustomers}
        setSpecificFruitLimits={setSpecificFruitLimits}
        products={products}
      />
    </Grommet>
  );
}

export default App;
