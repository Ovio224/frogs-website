import {
  AspectRatio,
  Box,
  Button,
  Flex,
  Heading,
  Image, Link,
  Text,
} from "@chakra-ui/react";
import React from "react";
import styled from "@emotion/styled";

const StrikeThrough = styled.span`
  text-decoration: line-through;
`;

const BiggerSpan = styled.span`
  font-size: 2rem;
  font-weight: 800;
  color: #f67c01;
`;

export default function SplitScreen() {
  return (
    <Box data-video-src="websites">
      <Box>
        <Flex
          flexDir="column"
          alignItems="center"
          justify="center"
          minH={"60vh"}
        >
          <Heading w="70%" data-cursor="-opaque" fontSize="7rem">
            are you the greatest frog in the universe?
          </Heading>
          <Text mt="2%" lineHeight={1} w="40%" fontSize="3xl">
            We have combined our forces right here to look for the{" "}
            <StrikeThrough>GOAT</StrikeThrough> <BiggerSpan>GFITU</BiggerSpan>{" "}
            (Greatest Frog In The Universe)
          </Text>
          <Text mt="1%" lineHeight={1} w="30%" fontSize="3xl">
            Please call <BiggerSpan>512-FROG-HOTLINE</BiggerSpan> if you somehow
            manage to see this message and possibly find the frog
          </Text>
        </Flex>
        <Button
          as={Link}
          href="#frog"
          bg="#f67c01"
          colorScheme="orange"
          p="2rem 3rem"
          fontSize="xx-large"
          borderRadius={20}
            mt="5%"
          _hover={{
            transform: 'scale(1.1)',
            border: 'none',
            textDecoration: 'none'
          }}
        >
          Contact the frog king
        </Button>
      </Box>
    </Box>
  );
}
