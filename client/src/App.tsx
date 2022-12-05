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
import { CustomerDataItem, CustomerDB, ProductDB, SFL } from "./types";

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
      <CustomerTable
        customerDataTree={customerDataTree}
        setCustomers={setCustomers}
        products={products}
      />
    </Grommet>
  );
}

const CustomerTable = (props: {
  customerDataTree: CustomerDataItem[];
  setCustomers: React.Dispatch<React.SetStateAction<CustomerDB[]>>;
  products: ProductDB[];
}) => {
  return (
    <Table>
      <CustomerTableHeader />
      <CustomerTableBody
        customerDataTree={props.customerDataTree}
        setCustomers={props.setCustomers}
        products={props.products}
      />
    </Table>
  );
};

export const CustomerTableHeader = () => {
  return (
    <TableHeader>
      <TableRow>
        <TableCell scope="col" border="bottom">
          Name
        </TableCell>
        <TableCell scope="col" border="bottom">
          Product
        </TableCell>
        <TableCell scope="col" border="bottom">
          Min
        </TableCell>
        <TableCell scope="col" border="bottom">
          Max
        </TableCell>
        <TableCell scope="col" border="bottom" />
      </TableRow>
    </TableHeader>
  );
};

export const CustomerTableBody = (props: {
  setCustomers: React.Dispatch<React.SetStateAction<CustomerDB[]>>;
  customerDataTree: CustomerDataItem[];
  products: ProductDB[];
}) => {
  return (
    <TableBody>
      {props.customerDataTree.map((customerDataItem) => {
        return (
          <CustomerTableSection
            key={customerDataItem.id}
            setCustomers={props.setCustomers}
            customerDataItem={customerDataItem}
            selectableProducts={props.products.filter(
              (product) =>
                !customerDataItem.specificFruitLimits
                  .map((sfl) => sfl.productId)
                  .includes(product.id)
            )}
          />
        );
      })}
    </TableBody>
  );
};

export const CustomerTableSection = (props: {
  customerDataItem: CustomerDataItem;
  setCustomers: React.Dispatch<React.SetStateAction<CustomerDB[]>>;
  selectableProducts: ProductDB[];
}) => {
  return (
    <>
      <CustomerTableRow
        key={props.customerDataItem.id}
        customerDataItem={props.customerDataItem}
        setCustomers={props.setCustomers}
        selectableProducts={props.selectableProducts}
      />
      {props.customerDataItem.specificFruitLimits.map((specificFruitLimit) => {
        return (
          <ProductTableRow
            key={specificFruitLimit.id}
            specificFruitLimit={specificFruitLimit}
          />
        );
      })}
    </>
  );
};

export const ProductTableRow = (props: { specificFruitLimit: SFL }) => {
  return (
    <TableRow>
      <TableCell scope="row">
        <strong>Chris</strong>
      </TableCell>
      <TableCell>Watermelon</TableCell>
    </TableRow>
  );
};

export const CustomerTableRow = (props: {
  customerDataItem: CustomerDataItem;
  setCustomers: React.Dispatch<React.SetStateAction<CustomerDB[]>>;
  selectableProducts: ProductDB[];
}) => {
  return (
    <TableRow>
      <TableCell scope="row">
        <strong>ProductRowJeff</strong>
      </TableCell>
      <TableCell>Watermelon</TableCell>
    </TableRow>
  );
};

export default App;
