import { Spinner, TableCell } from "grommet";
import { Close } from "grommet-icons";
import React from "react";

export const CloseIconCell = (props: {
  onClick: () => Promise<Response>;
  isLoading: boolean;
}) => {
  return (
    <TableCell>
      {props.isLoading ? <Spinner /> : <Close onClick={props.onClick} />}
    </TableCell>
  );
};
