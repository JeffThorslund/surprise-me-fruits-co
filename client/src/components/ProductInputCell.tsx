import { ProductDB, SpecificFruitLimitDB } from "../types";
import React, { useState } from "react";
import { Menu, TableCell } from "grommet";
import { createSpecificFruitLimit } from "../requests";
import { addLocalProduct } from "../mutations";
import { getRandomInt } from "./_utils";

export const ProductInputCell = (props: {
  customerId: number;
  selectableProducts: ProductDB[];
  setSpecificFruitLimits: React.Dispatch<
    React.SetStateAction<SpecificFruitLimitDB[]>
  >;
}) => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <TableCell scope="row">
      <Menu
        disabled={isLoading}
        label="Add New Product"
        items={props.selectableProducts.map((p) => ({
          label: p.product_name,
          onClick: () => {
            setIsLoading(true);
            createSpecificFruitLimit(props.customerId, p.id)
              .then((data) => {
                addLocalProduct(
                  props.setSpecificFruitLimits,
                  getRandomInt(),
                  props.customerId,
                  p.id,
                  1,
                  10
                );

                return data;
              })
              .finally(() => setIsLoading(false));
          },
        }))}
      />
    </TableCell>
  );
};
