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
import {
  createSpecificFruitLimit,
  deleteSpecificFruitLimit,
  updateCustomerLimit,
  updateSpecificFruitLimit,
} from "./requests";

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
        onSave={(min: number, max: number) => {
          return updateSpecificFruitLimit(
            props.specificFruitLimit.id,
            min,
            max
          );
        }}
      />
      <CloseIconCell
        onClick={() => deleteSpecificFruitLimit(props.specificFruitLimit.id)}
      />
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
      <ProductInputCell
        customerDataItem={props.customerDataItem}
        selectableProducts={props.selectableProducts}
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

export const ProductInputCell = (props: {
  customerDataItem: CustomerDataItem;
  selectableProducts: ProductDB[];
}) => {
  return (
    <TableCell scope="row">
      <Menu
        label="Add New Product"
        items={props.selectableProducts.map((p) => ({
          label: p.product_name,
          onClick: () =>
            createSpecificFruitLimit(props.customerDataItem.id, p.id),
        }))}
      />
    </TableCell>
  );
};

export const CloseIconCell = (props: { onClick: () => Promise<Response> }) => {
  return (
    <TableCell>
      <Close onClick={props.onClick} />
    </TableCell>
  );
};

export default App;
