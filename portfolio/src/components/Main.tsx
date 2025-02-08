import { Box } from "@mui/material";
import React from "react";
import { css } from "@emotion/react";
import About from "./About";

function Main() {
  return (
    <Box
      display={"grid"}
      height={"100%"}
      sx={{
        backgroundColor: "#395144",
        gridTemplateColumns: "1fr",
        gridTemplateRows: "1fr 1fr",
      }}
    >
      <About />
    </Box>
  );
}

export default Main;
