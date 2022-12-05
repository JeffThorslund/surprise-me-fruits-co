import React, { useEffect, useState } from "react";
import {
  Grommet,
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "grommet";
import { getCustomers, getProducts, getSpecificFruitLimits } from "./requests";

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
  const [customers, setCustomers] = useState([]);
  const [products, setProducts] = useState([]);
  const [specificFruitLimits, setSpecificFruitLimits] = useState([]);

  useEffect(() => {
    getCustomers.then((data) => setCustomers(data));
    getProducts.then((data) => setProducts(data));
    getSpecificFruitLimits.then((data) => setSpecificFruitLimits(data));
  }, []);

  console.log(customers, products, specificFruitLimits);

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
