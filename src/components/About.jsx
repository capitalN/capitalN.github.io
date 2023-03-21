import {
  Flex,
  Grid,
  Heading,
  Image,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import {
  aosDelayedStyles,
  aosStyles,
  // bgFontStyle,
  textBoxStyle,
} from "./styles";

import {
  MdOutlineDeveloperMode,
  MdLaptopWindows,
  MdDraw,
  MdCode,
} from "react-icons/md";

export default function About() {
  var prevScrollpos = window.pageYOffset;
  window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (currentScrollPos > prevScrollpos) {
      document.getElementById("navbar").style.top = "-60px";
    } else {
      document.getElementById("navbar").style.top = "0";
    }
    prevScrollpos = currentScrollPos;
  };

  return (
    <Stack gap="40px">
      <Flex
        textAlign="justify"
        direction={{ base: "column", lg: "row" }}
        align="center"
        gap="40px"
        {...aosDelayedStyles}
        bgColor={"gray.400"}
        color="gray.800"
      >
        <Image src="nikhil.jpg" w={"350px"} {...aosStyles} />

        <Heading
          fontFamily="inherit"
          p={"3%"}
          size={"lg"}
          {...aosDelayedStyles}
          // textShadow="6px 6px 4px gray"
        >
          <Heading> HELLO,</Heading>
          <br />I am Nikhil Angolkar, An ambitious and self-motivated full-stack
          web developer with considerable technical skills who possesses
          self-discipline and the ability to work with a minimum of supervision.
        </Heading>
      </Flex>

      <Grid
        gridTemplateColumns={{
          sm: "repeat(1, 1fr)",
          lg: "repeat(3, 1fr)",
        }}
        gap="40px"
      >
        <VStack {...aosDelayedStyles} {...textBoxStyle}>
          <MdLaptopWindows size={"100px"} />
          <Text>
            I learned Full-Stack Web development and DSA at Masai School. DSA
            logic helps me to write quality code for Frontend & Backend during
            web-development.
          </Text>
        </VStack>

        <VStack {...aosDelayedStyles} {...textBoxStyle}>
          <MdCode size={"100px"} />
          <Text>
            By following best practices for coding, i can write code that is
            highly readable and easy to understand. This can make it easier for
            others to work with me.
          </Text>
        </VStack>
        <VStack {...aosDelayedStyles} {...textBoxStyle}>
          <MdDraw size={"100px"} />
          <Text>
            Having a knowledge of design principles and techniques can help me
            create visually appealing and user-friendly websites.
          </Text>
        </VStack>
      </Grid>
    </Stack>
  );
}
