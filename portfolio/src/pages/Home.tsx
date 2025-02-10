import { Box, makeStyles, Typography } from "@mui/material";
import Image from "mui-image";
import React, { ReactNode, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Lottie from "react-lottie";

function Home() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: require("../assets/lottie/ProgrammingGif.json"),
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const boxRef = useRef(null);
  const boxRef2 = useRef(null);

  useGSAP(() => {
    gsap.to(boxRef.current, {
      rotation: 360,
      duration: 1,
      yoyo: true,
    });

    gsap.to(boxRef2.current, {
      rotation: 360,
      duration: 1,
      yoyo: true,
    });
  }, []);

  return (
    <Box
      display={"grid"}
      sx={{ gridTemplate: "1fr / 1fr 1fr" }}
      justifyItems={"center"}
    >
      <Box
        className="textContainer"
        display={"grid"}
        sx={{ gridTemplate: "1fr 1fr / 1fr" }}
        // ref={boxRef}
      >
        <Typography
          ref={boxRef2}
          color="#003140"
          className="softwareText"
          variant="h4"
          sx={{
            justifySelf: "center",
            alignSelf: "end",
            fontSize: "100px",
            fontFamily: "Silkscreen, serif",
            fontWeight: "bold",
          }}
        >
          SOFTWARE
        </Typography>
        <Typography
          ref={boxRef}
          color="#003140"
          variant="h4"
          sx={{
            justifySelf: "center",
            alignSelf: "start",
            fontSize: "100px",
            fontFamily: "Silkscreen, serif",
            fontWeight: "bold",
          }}
        >
          DEVELOPER
        </Typography>
      </Box>
      <Box className="gifContainer" zIndex={0}>
        <Lottie options={defaultOptions} height={600} width={600} />
      </Box>
    </Box>
  );
}

export default Home;
