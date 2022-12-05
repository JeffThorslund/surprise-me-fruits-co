import React from "react";
import {
  CustomerDataItem,
  CustomerDB,
  ProductDB,
  SpecificFruitLimitDB,
} from "../types";
import { TableBody } from "grommet";
import { CustomerTableSection } from "./CustomerTableSection";

export const CustomerTableBody = (props: {
  setCustomers: React.Dispatch<React.SetStateAction<CustomerDB[]>>;
  setSpecificFruitLimits: React.Dispatch<
    React.SetStateAction<SpecificFruitLimitDB[]>
  >;
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
            setSpecificFruitLimits={props.setSpecificFruitLimits}
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
