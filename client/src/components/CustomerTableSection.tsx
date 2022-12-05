import {
  CustomerDataItem,
  CustomerDB,
  ProductDB,
  SpecificFruitLimitDB,
} from "../types";
import React from "react";
import { ProductTableRow } from "./ProductTableRow";
import { CustomerTableRow } from "./CustomerTableRow";

export const CustomerTableSection = (props: {
  customerDataItem: CustomerDataItem;
  setCustomers: React.Dispatch<React.SetStateAction<CustomerDB[]>>;
  setSpecificFruitLimits: React.Dispatch<
    React.SetStateAction<SpecificFruitLimitDB[]>
  >;
  selectableProducts: ProductDB[];
}) => {
  return (
    <>
      <CustomerTableRow
        key={props.customerDataItem.id}
        customerDataItem={props.customerDataItem}
        setCustomers={props.setCustomers}
        setSpecificFruitLimits={props.setSpecificFruitLimits}
        selectableProducts={props.selectableProducts}
      />
      {props.customerDataItem.specificFruitLimits.map((specificFruitLimit) => {
        return (
          <ProductTableRow
            key={specificFruitLimit.id}
            specificFruitLimit={specificFruitLimit}
            setSpecificFruitLimits={props.setSpecificFruitLimits}
          />
        );
      })}
    </>
  );
};
