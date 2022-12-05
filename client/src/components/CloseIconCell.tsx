import { Box, Spinner, TableCell } from "grommet";
import { Close } from "grommet-icons";
import React from "react";

export const CloseIconCell = (props: {
  onClick: () => Promise<Response>;
  isLoading: boolean;
}) => {
  return (
    <TableCell>
      <Box>
        {props.isLoading ? (
          <Spinner />
        ) : (
          <Close style={{ cursor: "pointer" }} onClick={props.onClick} />
        )}
      </Box>
    </TableCell>
  );
};
