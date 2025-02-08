import { Box, Typography } from "@mui/material";
import React from "react";
import Image from "mui-image";
import dexterImage from "../assets/images/dexter.jpg";

function About() {
  return (
    <Box
      sx={{
        gridTemplateRows: "100%",
        gridTemplateColumns: "1fr 1fr",
        // columnGap: 50,
      }}
      height="100%"
      display={"grid"}
      rowGap={10}
      paddingTop={"70px"}
    >
      <Box
        display={"grid"}
        sx={{ gridTemplate: "1fr 1fr / 1fr" }}
        paddingLeft={"50px"}
      >
        <Typography color="#EEEEEE" variant="h3" alignSelf={"center"}>
          Hi there, My Name is Simeon
        </Typography>
        <Typography color="#EEEEEE" variant="h5" alignSelf={"start"}>
          I'm a software developer with a focus on C# and web development, and
          I'm exploring React to expand my skills. I'm passionate about building
          reliable solutions and continuously learning to improve my craft.
        </Typography>
      </Box>
      <Box
        sx={{
          width: 300,
          height: 300,
          borderRadius: "50%",
          overflow: "hidden",
          justifySelf: "center",
          alignSelf: "center",
        }}
      >
        <Image
          src={dexterImage}
          alt="Dexter"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "0px -85px",
          }}
        />
      </Box>
    </Box>
  );
}

export default About;
