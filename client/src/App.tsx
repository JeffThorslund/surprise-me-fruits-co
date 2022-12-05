import React from "react";
import {
  Grommet,
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "grommet";
import { useCustomerData } from "./_utils/useCustomerData";

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
  const { customerDataTree, setCustomers, products } = useCustomerData();

  return (
    <Grommet theme={theme}>
      <Table>
        <TableHeader>
          <TableRow>
            <TableCell scope="col" border="bottom">
              Name
            </TableCell>
            <TableCell scope="col" border="bottom">
              Flavor
            </TableCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell scope="row">
              <strong>Eric</strong>
            </TableCell>
            <TableCell>Coconut</TableCell>
          </TableRow>
          <TableRow>
            <TableCell scope="row">
              <strong>Chris</strong>
            </TableCell>
            <TableCell>Watermelon</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Grommet>
  );
}

export default App;
