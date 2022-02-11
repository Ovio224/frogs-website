import React, { ReactNode } from "react";
import {
  AspectRatio,
  Text,
  Image,
  Box,
  Flex,
  Heading,
  HStack,
} from "@chakra-ui/react";

export default function Header({ children }: { children: ReactNode }) {
  return (
    <Box minH="100vh" >
      <Flex
        bg="#052723"
        borderRadius={1}
        boxShadow="0px 20px 20px 20px rgb(0 0 0 / 30%)"
        px={{ base: 12, md: 24 }}
        height="120px"
        justifyContent={{ base: "space-between" }}
        alignItems="stretch"
      >
        <HStack>
          <Heading color="white">For frogs</Heading>
        </HStack>
        <AspectRatio
          // borderRadius={1}
          boxShadow="0px 20px 20px 0px rgb(0 0 0 / 30%)"
          borderRadius="40%"
          bg="#052723"
          h={250}
          w={250}
          ratio={2 / 3}
        >
          <Image zIndex={1} src="../assets/frog.png" />
        </AspectRatio>
        <HStack>
          <Heading color="white">By frogs</Heading>
        </HStack>
      </Flex>
      <Box px={{ base: 12, md: 24 }}>{children}</Box>
    </Box>
  );
}
