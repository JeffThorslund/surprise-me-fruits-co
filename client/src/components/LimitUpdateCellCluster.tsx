import React, { useState } from "react";
import { Button, TableCell } from "grommet";
import { LimitInputCell } from "./LimitInputCell";
import { didValueChange } from "./_utils";

export const LimitUpdateCellCluster = (props: {
  min: number;
  max: number;
  onSave: (min: number, max: number) => Promise<void | Response>;
}) => {
  const [min, setMin] = useState(props.min);
  const [max, setMax] = useState(props.max);

  return (
    <>
      <LimitInputCell
        limit={min}
        onChange={(e) => setMin(Number(e.target.value))}
      />
      <LimitInputCell
        limit={max}
        onChange={(e) => setMax(Number(e.target.value))}
      />
      {didValueChange(props.min, min) || didValueChange(props.max, max) ? (
        <>
          <TableCell>
            <Button
              primary
              label="Save"
              onClick={() => {
                props.onSave(min, max);
              }}
            />
          </TableCell>

          <TableCell>
            <Button
              secondary
              label="Reset"
              onClick={() => {
                setMin(props.min);
                setMax(props.max);
              }}
            />
          </TableCell>
        </>
      ) : null}
    </>
  );
};
