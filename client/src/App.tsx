import React from "react";
import { Grommet } from "grommet";
import { useCustomerData } from "./_utils/useCustomerData";
import { CustomerTable } from "./components/CustomerTable";
import { HeaderNav } from "./components/HeaderNav";
import { ThemeType } from "grommet";

const theme: ThemeType = {
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
      <HeaderNav />
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
