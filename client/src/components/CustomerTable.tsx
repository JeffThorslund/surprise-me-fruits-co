import {
  CustomerDataItem,
  CustomerDB,
  ProductDB,
  SpecificFruitLimitDB,
} from "../types";
import React from "react";
import { Table } from "grommet";
import { CustomerTableHeader } from "./CustomerTableHeader";
import { CustomerTableBody } from "./CustomerTableBody";

export const CustomerTable = (props: {
  customerDataTree: CustomerDataItem[];
  setCustomers: React.Dispatch<React.SetStateAction<CustomerDB[]>>;
  setSpecificFruitLimits: React.Dispatch<
    React.SetStateAction<SpecificFruitLimitDB[]>
  >;
  products: ProductDB[];
}) => {
  return (
    <Table>
      <CustomerTableHeader />
      <CustomerTableBody
        customerDataTree={props.customerDataTree}
        setCustomers={props.setCustomers}
        setSpecificFruitLimits={props.setSpecificFruitLimits}
        products={props.products}
      />
    </Table>
  );
};
