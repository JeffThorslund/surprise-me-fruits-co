import {
  CustomerDataItem,
  CustomerDB,
  ProductDB,
  SpecificFruitLimitDB,
} from "../types";
import React from "react";
import { Box, Table } from "grommet";
import { CustomerTableHeader } from "./CustomerTableHeader";
import { CustomerTableBody } from "./CustomerTableBody";
import { TableTitle } from "./TableTitle";

export const CustomerTable = (props: {
  customerDataTree: CustomerDataItem[];
  setCustomers: React.Dispatch<React.SetStateAction<CustomerDB[]>>;
  setSpecificFruitLimits: React.Dispatch<
    React.SetStateAction<SpecificFruitLimitDB[]>
  >;
  products: ProductDB[];
}) => {
  return (
    <Box background={"background-front"}>
      <TableTitle />
      <Box pad={{ horizontal: "large" }} align={"start"}>
        <Table>
          <CustomerTableHeader />
          <CustomerTableBody
            customerDataTree={props.customerDataTree}
            setCustomers={props.setCustomers}
            setSpecificFruitLimits={props.setSpecificFruitLimits}
            products={props.products}
          />
        </Table>
      </Box>
    </Box>
  );
};
