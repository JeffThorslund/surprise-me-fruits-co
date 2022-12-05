import {
  CustomerDataItem,
  CustomerDB,
  ProductDB,
  SpecificFruitLimitDB,
} from "../types";
import React from "react";
import { Box, Table, Text } from "grommet";
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
    <Box background={"background-front"}>
      <Box align={"center"} pad={"medium"}>
        <Text size={"large"}>Customer Product Limit Database</Text>
        <Text size={"medium"}>
          Create, Update and Delete Produce Product Limits
        </Text>
      </Box>
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
