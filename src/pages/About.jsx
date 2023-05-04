import {
  Center,
  Grid,
  Heading,
  HStack,
  Icon,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";

import { TiCodeOutline, TiBrush, TiDeviceLaptop } from "react-icons/ti";
import { Brand } from "../utils/Theme";

export default function About() {
  return (
    <Grid
      gridTemplateColumns={{ base: "repeat(1, 1fr)", lg: "repeat(2, 1fr)" }}
      gap="40px"
      bgColor={"white"}
      textAlign="left"
      p="20px 0"
    >
      <Center p="10px">
        <Image
          // width={"100%"}
          m="40px 0"
          height="auto"
          src={"https://avatars.githubusercontent.com/u/107465553?v=4"}
          alt="nikhil angolkar"
          bgColor={Brand.primary[0]}
          borderRadius="full"
        />
      </Center>

      <Center>
        <Stack gap={"10px"} minW="350px">
          <Heading
            textAlign={"center"}
            fontFamily="inherit"
            color={Brand.primary[0]}
          >
            About
          </Heading>
          {about.map(({ icon, description, color }) => (
            <HStack gap="10px" p="20px">
              <Icon
                as={icon}
                boxSize={"70px"}
                borderRadius="full"
                p="10px"
                color={Brand.primary[500]}
                bgColor={Brand.secondary[500]}
              />
              <Text maxW={"400px"} textAlign="justify">
                {description}
              </Text>
            </HStack>
          ))}
        </Stack>
      </Center>
    </Grid>
  );
}

let about = [
  {
    icon: TiDeviceLaptop,
    description:
      "An ambitious and self-motivated full-stack web developer with considerable technical skills who possesses self-discipline and the ability to work with a minimum of supervision.",
    color: Brand.primary[500],
  },
  {
    icon: TiCodeOutline,
    description:
      "By following best practices for coding, i can write code that is highly readable and easy to understand. This can make it easier for others to work with me.",
    color: Brand.primary[500],
  },
  {
    icon: TiBrush,
    description:
      "Having a knowledge of design principles and techniques can help me create visually appealing and user-friendly websites.",
    color: Brand.primary[500],
  },
];
