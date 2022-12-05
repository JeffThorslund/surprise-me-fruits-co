import React from "react";
import { TableCell, TextInput } from "grommet";

export const LimitInputCell = (props: {
  limit: number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <TableCell scope="row">
      <TextInput
        type={"number"}
        value={props.limit}
        onChange={props.onChange}
      />
    </TableCell>
  );
};
