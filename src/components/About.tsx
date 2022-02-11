import { Grid, GridItem, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { useLottie } from "lottie-react";
import pepe from "../json/pepe.json";
import styled from "@emotion/styled";

const ColoredSpan = styled.span`
  color: #f67c01
`

export default function SplitScreen() {
  return (
    <Grid
      alignContent="center"
      alignItems="center"
      justifyContent="center"
      minH="100vh"
      mt="15rem"
      id="frog"
      templateColumns="3fr 2fr"
    >
      <GridItem textAlign="left">
        <Heading  w="70%" data-cursor="-opaque" fontSize="4rem">
          If you're <ColoredSpan>not</ColoredSpan> the greatest frog in the universe, that's still OK
        </Heading>
        <Text fontSize="1.5rem">If you're just amazing, that works too</Text>
      </GridItem>
      <GridItem>
        <PepeTheFrogLottie />
      </GridItem>
    </Grid>
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
