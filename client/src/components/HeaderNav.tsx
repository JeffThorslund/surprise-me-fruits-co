import { Box, Header } from "grommet";
import { Gremlin } from "grommet-icons";
import React from "react";

export const HeaderNav = () => {
  return (
    <Header pad="small" background={"brand"}>
      <Box direction="row" align="center" gap="small">
        <Gremlin />
        Surprise Me Fruits Company
      </Box>

      <Box direction="row" align="center" gap="small">
        Random Produce is Our Business!
      </Box>
    </Header>
  );
};
