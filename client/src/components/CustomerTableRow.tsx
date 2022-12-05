import {
  CustomerDataItem,
  CustomerDB,
  ProductDB,
  SpecificFruitLimitDB,
} from "../types";
import React from "react";
import { TableCell, TableRow } from "grommet";
import { updateCustomerLimit } from "../requests";
import { updateLocalCustomerLimit } from "../mutations";
import { LimitUpdateCellCluster } from "./LimitUpdateCellCluster";
import { ProductInputCell } from "./ProductInputCell";

export const CustomerTableRow = (props: {
  customerDataItem: CustomerDataItem;
  setCustomers: React.Dispatch<React.SetStateAction<CustomerDB[]>>;
  setSpecificFruitLimits: React.Dispatch<
    React.SetStateAction<SpecificFruitLimitDB[]>
  >;
  selectableProducts: ProductDB[];
}) => {
  return (
    <TableRow>
      <TableCell scope="row">
        <strong>{props.customerDataItem.name}</strong>
      </TableCell>
      <ProductInputCell
        setSpecificFruitLimits={props.setSpecificFruitLimits}
        customerDataItem={props.customerDataItem}
        selectableProducts={props.selectableProducts}
      />
      <LimitUpdateCellCluster
        max={props.customerDataItem.max}
        min={props.customerDataItem.min}
        onSave={(min: number, max: number) => {
          return updateCustomerLimit(props.customerDataItem.id, min, max).then(
            (data) => {
              updateLocalCustomerLimit(
                props.setCustomers,
                props.customerDataItem.id,
                min,
                max
              );

              return data;
            }
          );
        }}
      />
    </TableRow>
  );
};
