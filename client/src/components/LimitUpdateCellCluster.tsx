import React, { useState } from "react";
import { Button, TableCell } from "grommet";
import { LimitInputCell } from "./LimitInputCell";
import { didValueChange } from "./_utils";

export const LimitUpdateCellCluster = (props: {
  min: number;
  max: number;
  onSave: (min: number, max: number) => Promise<void | Response>;
  isLoading?: boolean;
}) => {
  const [min, setMin] = useState(props.min);
  const [max, setMax] = useState(props.max);
  const [isLoading, setIsLoading] = useState(false);

  const globalLoadIndicator = props.isLoading || isLoading;

  return (
    <>
      <LimitInputCell
        isLoading={globalLoadIndicator}
        limit={min}
        onChange={(e) => setMin(Number(e.target.value))}
      />
      <LimitInputCell
        isLoading={globalLoadIndicator}
        limit={max}
        onChange={(e) => setMax(Number(e.target.value))}
      />
      {didValueChange(props.min, min) || didValueChange(props.max, max) ? (
        <>
          <TableCell>
            <Button
              disabled={globalLoadIndicator}
              primary
              label="Save"
              onClick={() => {
                setIsLoading(true);
                props.onSave(min, max).finally(() => {
                  setIsLoading(false);
                });
              }}
            />
          </TableCell>

          <TableCell>
            <Button
              disabled={globalLoadIndicator}
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
