import { TableCell } from "grommet";
import { Close } from "grommet-icons";
import React from "react";

export const CloseIconCell = (props: { onClick: () => Promise<Response> }) => {
  return (
    <TableCell>
      <Close onClick={props.onClick} />
    </TableCell>
  );
};
