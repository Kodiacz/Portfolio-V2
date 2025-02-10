import React from "react";
import "../component-styles/Footer.css";
import { Box, IconButton, Tooltip } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function Footer() {
  return (
    <Box
      display={"flex"}
      justifyContent={"end"}
      sx={{ backgroundColor: "#E1EACD", position: "sticky", bottom: 0 }}
    >
      <Tooltip title="Github">
        <IconButton
          color="primary"
          href="https://github.com/Kodiacz"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHubIcon fontSize="large" />
        </IconButton>
      </Tooltip>
      <Tooltip title="LinkedIn">
        <IconButton
          color="primary"
          href="https://github.com/Kodiacz"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedInIcon fontSize="large" />
        </IconButton>
      </Tooltip>
    </Box>
  );
}

export default Footer;
