import { FC } from "react";
import PropTypes, { InferProps } from "prop-types";
import { m } from "framer-motion"; // Import 'm' instead of 'motion' from Framer Motion

import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";

import { bgBlur } from "src/theme/css";

import Logo from "../logo";

interface SplashScreenProps {
  sx?: object;
}

const SplashScreen: FC<SplashScreenProps> = ({ sx, ...other }: InferProps<SplashScreenProps>) => {
  const theme = useTheme();

  return (
    <>
      <Box
        sx={{
          ...bgBlur({
            blur: 2,
            opacity: 0.24,
            color: theme.palette.background.default,
          }),
          top: 0,
          left: 0,
          width: 1,
          height: 1,
          zIndex: 9999,
          display: "flex",
          position: "absolute",
          alignItems: "center",
          justifyContent: "center",
          ...sx,
        }}
        {...other}
      >
        <m.div
          animate={{
            scale: [1, 0.96, 1, 0.96, 1],
            opacity: [1, 0.48, 1, 0.48, 1],
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            repeatDelay: 1,
            repeat: Infinity,
          }}
        >
          <Logo single sx={{ width: 128, height: 128 }} />
        </m.div>
      </Box>

      <Box sx={{ width: 1, height: "100vh" }} />
    </>
  );
}

SplashScreen.propTypes = {
  sx: PropTypes.object,
};

export default SplashScreen;
