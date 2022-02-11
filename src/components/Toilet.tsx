import { Grid, GridItem, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { useLottie } from "lottie-react";
import pepe from "../json/pepe-toilet.json";
import styled from "@emotion/styled";

const ColoredSpan = styled.span`
  color: #f67c01;
`;

const CustomGrid = styled(Grid)`
    /* backdrop-filter: saturate(0%) blur(5px); */
    background: #000000a1;
    z-index: 30;
    color: #dff9cd;
    width: 100%;
    border-top-right-radius: 30%;
    border-top-left-radius: 65%;
    padding: 10rem;
    padding-bottom: 0;
    box-shadow: 0px 17px 20px 20px rgb(0 0 0 / 30%);
`;

export default function SplitScreen() {
  return (
    <CustomGrid
      alignContent="center"
      alignItems="center"
      justifyContent="center"
      minH="70vh"
      mt="15rem"
      id="footer"
      templateColumns="3fr 2fr"
    >
      <GridItem textAlign="center">
        <Heading w="70%" data-cursor="-opaque" fontSize="4rem">
          I bet we can all be <ColoredSpan>GFITU</ColoredSpan> together, how 'bout that
        </Heading>
      </GridItem>
      <GridItem>
        <PepeTheFrogLottie />
      </GridItem>
    </CustomGrid>
  );
}

const PepeTheFrogLottie = () => {
  const options = {
    animationData: pepe,
    loop: true,
    autoplay: true,
  };
  const { View } = useLottie(options);
  return View;
};
