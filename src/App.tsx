import * as React from "react";
import { useEffect } from "react";
import { Box, ChakraProvider, extendTheme } from "@chakra-ui/react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import "./theme/fonts/fonts.css";
import styled from "@emotion/styled";
import "./css/cursor.scss";
import { Cursor } from "./components/Cursor";
import CursorObject from "./js/cursor";
import About from "./components/About";
import Retarded from "./components/Retarded";
import Toilet from "./components/Toilet";

const theme = extendTheme({
  fonts: {
    heading: "Frog",
    body: "Momcake",
  },
});

const BackgroundBox = styled(Box)`
  -webkit-backdrop-filter: saturate(180%) blur(5px);
  backdrop-filter: saturate(180%) blur(5px);
  background: rgba(254, 248, 240, 0.8);
  z-index: 30;
`;

export const App = () => {
  useEffect(() => {
    window.onload = () => {
      new CursorObject(document.querySelector(".cursor"));
    };
  }, []);
  return (
    <ChakraProvider theme={theme}>
      <UnderBackgroundBox data-video-src="websites">
        <BackgroundBox textAlign="center" fontSize="xl">
          <Header>
            <Cursor />
            <Hero />
            <About />
            <Retarded />
          </Header>
            <Toilet />
        </BackgroundBox>
      </UnderBackgroundBox>
    </ChakraProvider>
  );
};

const UnderBackgroundBox = ({ children }) => (
  <Box
    data-cursor="-visible"
    bgImage="https://cdn.dribbble.com/users/1338391/screenshots/15339530/media/cb11372488dc560088b3e7df16546b65.jpg"
  >
    {children}
  </Box>
);
