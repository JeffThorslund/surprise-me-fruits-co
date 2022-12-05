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
  const minSumOfProducts =
    props.customerDataItem.specificFruitLimits.reduce<number>((prev, curr) => {
      return prev + curr.min;
    }, 0);

  const maxSumOfProducts =
    props.customerDataItem.specificFruitLimits.reduce<number>((prev, curr) => {
      return prev + curr.max;
    }, 0);

  const doesMinExceedTotal = minSumOfProducts > props.customerDataItem.min;
  const doesMaxExceedTotal = maxSumOfProducts > props.customerDataItem.max;

  return (
    <TableRow>
      <TableCell scope="row">
        <strong>{props.customerDataItem.name}</strong>
      </TableCell>
      <ProductInputCell
        setSpecificFruitLimits={props.setSpecificFruitLimits}
        customerId={props.customerDataItem.id}
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
      {doesMinExceedTotal ? (
        <TableCell>Minimum product limits exceed customer limit</TableCell>
      ) : null}
      {doesMaxExceedTotal ? (
        <TableCell>Maximum product limits exceed customer limit</TableCell>
      ) : null}
    </TableRow>
  );
};
