import { Heading, Stack } from "@chakra-ui/react";
import React from "react";
import { bgFontStyle } from "./styles";

export default function Home() {
  return (
    <Stack
      w="100%"
      h="100%"
      justify={"end"}
      align={"center"}
      background="linear-gradient(0deg, black 10%, rgba(0,0,0,0) 100%)"
    >
      <Heading {...bgFontStyle} color={{ base: "gray.400" }}>
        NIKHIL ANGOLKAR
      </Heading>
    </Stack>
  );
}
