import { Heading, VStack } from "@chakra-ui/react";
import React from "react";
import ResumeButton from "../components/ResumeButton";
import { Brand } from "../utils/Theme";

export default function Home() {
  return (
    <VStack align={"center"} justify="center" w="350px" h="350px">
      <Heading fontFamily={"inherit"} fontSize="8rem">
        na
      </Heading>
      <VStack>
        <Heading fontFamily={"inherit"} fontSize="35px">
          NIKHIL ANGOLKAR
        </Heading>
        <Heading fontFamily={"inherit"} fontSize="20px">
          full stack web developer
        </Heading>
        <br />
        <ResumeButton bgColor={Brand.primary[0]} color={"white"} />
        <br />
      </VStack>
    </VStack>
  );
}
