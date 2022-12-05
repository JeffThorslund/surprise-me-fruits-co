import { TableCell, TableHeader, TableRow } from "grommet";
import React from "react";

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
