import { SFL, SpecificFruitLimitDB } from "../types";
import React, { useState } from "react";
import { TableCell, TableRow } from "grommet";
import {
  deleteSpecificFruitLimit,
  updateSpecificFruitLimit,
} from "../requests";
import { removeLocalProduct, updateLocalProductLimit } from "../mutations";
import { VoidCell } from "./VoidCell";
import { LimitUpdateCellCluster } from "./LimitUpdateCellCluster";
import { CloseIconCell } from "./CloseIconCell";

export const ProductTableRow = (props: {
  specificFruitLimit: SFL;
  setSpecificFruitLimits: React.Dispatch<
    React.SetStateAction<SpecificFruitLimitDB[]>
  >;
}) => {
  const [isRowLoading, setIsRowLoading] = useState(false);

  return (
    <TableRow>
      <VoidCell />
      <TableCell>{props.specificFruitLimit.productName}</TableCell>
      <LimitUpdateCellCluster
        isLoading={isRowLoading}
        max={props.specificFruitLimit.max}
        min={props.specificFruitLimit.min}
        onSave={(min: number, max: number) => {
          return updateSpecificFruitLimit(
            props.specificFruitLimit.id,
            min,
            max
          ).then((data) => {
            updateLocalProductLimit(
              props.setSpecificFruitLimits,
              props.specificFruitLimit.id,
              min,
              max
            );

            return data;
          });
        }}
      />
      <CloseIconCell
        isLoading={isRowLoading}
        onClick={() => {
          setIsRowLoading(true);
          return deleteSpecificFruitLimit(props.specificFruitLimit.id)
            .then((data) => {
              removeLocalProduct(
                props.setSpecificFruitLimits,
                props.specificFruitLimit.id
              );
              return data;
            })
            .finally(() => setIsRowLoading(false));
        }}
      />
    </TableRow>
  );
};
