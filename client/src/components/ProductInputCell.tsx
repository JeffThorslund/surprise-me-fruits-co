import { CustomerDataItem, ProductDB, SpecificFruitLimitDB } from "../types";
import React from "react";
import { Menu, TableCell } from "grommet";
import { createSpecificFruitLimit } from "../requests";
import { addLocalProduct } from "../mutations";
import { getRandomInt } from "./_utils";

export const ProductInputCell = (props: {
  customerDataItem: CustomerDataItem;
  selectableProducts: ProductDB[];
  setSpecificFruitLimits: React.Dispatch<
    React.SetStateAction<SpecificFruitLimitDB[]>
  >;
}) => {
  return (
    <TableCell scope="row">
      <Menu
        label="Add New Product"
        items={props.selectableProducts.map((p) => ({
          label: p.product_name,
          onClick: () =>
            createSpecificFruitLimit(props.customerDataItem.id, p.id).then(
              async (data) => {
                addLocalProduct(
                  props.setSpecificFruitLimits,
                  getRandomInt(),
                  props.customerDataItem.id,
                  p.id,
                  0,
                  100
                );

                return data;
              }
            ),
        }))}
      />
    </TableCell>
  );
};
