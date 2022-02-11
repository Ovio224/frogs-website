import { Grid, GridItem, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { useLottie } from "lottie-react";
import pepe from "../json/pepe-retarded.json";

export default function SplitScreen() {
  return (
    <Grid
      alignContent="center"
      alignItems="center"
      justifyContent="center"
      minH="60vh"
      mt="15rem"
      templateColumns="2fr 3fr"
    >
      <GridItem textAlign="right">
        <PepeTheFrogLottie />
      </GridItem>
      <GridItem textAlign="right">
        <Heading marginLeft="auto" id="frog" w="70%" data-cursor="-opaque" fontSize="4rem">
          Personally, I think if you're "special", that works best
        </Heading>
        <Text fontSize="1.5rem">Or straight up retarded, but that's okay too, we all are</Text>
      </GridItem>
    </Grid>
  );
}

const PepeTheFrogLottie = () => {
  const options = {
    animationData: pepe,
    loop: true,
    autoplay: true,
    style: { height: 500 }
  };
  const { View } = useLottie(options);
  return View;
};
