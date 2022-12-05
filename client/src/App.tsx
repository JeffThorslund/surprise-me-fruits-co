import React, { useState } from "react";
import {
  Button,
  Grommet,
  Menu,
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
  TextInput,
} from "grommet";
import { useCustomerData } from "./_utils/useCustomerData";
import { CustomerDataItem, CustomerDB, ProductDB, SFL } from "./types";
import { Close } from "grommet-icons";
import { updateCustomerLimit } from "./requests";

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
      <VoidCell />
      <TableCell>{props.specificFruitLimit.productName}</TableCell>
      <LimitUpdateCellCluster
        max={props.specificFruitLimit.max}
        min={props.specificFruitLimit.min}
        onSave={() => Promise.resolve()}
      />
      <TableCell>
        <Close />
      </TableCell>
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
        <strong>{props.customerDataItem.name}</strong>
      </TableCell>
      <Menu
        label="Add New Product"
        items={[
          { label: "Product One", onClick: () => {} },
          { label: "Product Two", onClick: () => {} },
        ]}
      />
      <LimitUpdateCellCluster
        max={props.customerDataItem.max}
        min={props.customerDataItem.min}
        onSave={(min: number, max: number) => {
          return updateCustomerLimit(props.customerDataItem.id, min, max);
        }}
      />
    </TableRow>
  );
};

export const VoidCell = () => {
  return <TableCell scope="row" />;
};

export const LimitUpdateCellCluster = (props: {
  min: number;
  max: number;
  onSave: (min: number, max: number) => Promise<void | Response>;
}) => {
  const [min, setMin] = useState(props.min);
  const [max, setMax] = useState(props.max);

  return (
    <>
      <LimitInputCell
        limit={min}
        onChange={(e) => setMin(Number(e.target.value))}
      />
      <LimitInputCell
        limit={max}
        onChange={(e) => setMax(Number(e.target.value))}
      />
      {didValueChange(props.min, min) || didValueChange(props.max, max) ? (
        <>
          <TableCell>
            <Button
              primary
              label="Save"
              onClick={() => {
                props.onSave(min, max);
              }}
            />
          </TableCell>

          <TableCell>
            <Button
              secondary
              label="Reset"
              onClick={() => {
                setMin(props.min);
                setMax(props.max);
              }}
            />
          </TableCell>
        </>
      ) : null}
    </>
  );
};

const didValueChange = (oldLimit: number, newLimit: number) =>
  oldLimit !== newLimit;

export const LimitInputCell = (props: {
  limit: number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <TableCell scope="row">
      <TextInput
        type={"number"}
        value={props.limit}
        onChange={props.onChange}
      />
    </TableCell>
  );
};

export default App;
