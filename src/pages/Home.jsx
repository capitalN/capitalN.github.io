import {
  Button,
  Center,
  Flex,
  Heading,
  HStack,
  Stack,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import ResumeButton from "../components/ResumeButton";

export default function Home() {
  return (
    <VStack
      align={"center"}
      bgColor="rgba(255, 255, 255, 1)"
      // borderRadius={"10px"}
      boxShadow="2xl"
    >
      <Heading fontFamily={"inherit"} fontSize="10rem">
        na
      </Heading>
      <VStack w="370px">
        <Heading fontFamily={"inherit"} fontSize="40px">
          NIKHIL ANGOLKAR
        </Heading>
        <Heading fontFamily={"inherit"} fontSize="20px">
          full stack web developer
        </Heading>
        <br />
        <ResumeButton />
        <br />
      </VStack>
    </VStack>
  );
}
