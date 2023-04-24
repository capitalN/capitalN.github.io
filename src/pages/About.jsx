import {
  Box,
  Flex,
  Grid,
  Heading,
  Icon,
  Image,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { Profiler, useEffect } from "react";
import {
  TiDeviceDesktop,
  TiCodeOutline,
  TiBrush,
  TiDeviceLaptop,
} from "react-icons/ti";

import Profile from "../components/Profile";

import { brand, TestimonialStyle } from "../utils/globalCSS";

export default function About() {
  return (
    <VStack textAlign={"justify"} gap="40px">
      <Profile />
      <Stack direction={"row"} flexWrap={"wrap"} justify="center" gap="40px">
        <VStack boxShadow={"lg"} {...TestimonialStyle}>
          <Icon as={TiDeviceLaptop} color={brand[600]} fontSize="50px" />
          <Text>
            An ambitious and self-motivated full-stack web developer with
            considerable technical skills who possesses self-discipline and the
            ability to work with a minimum of supervision.
          </Text>
        </VStack>

        <VStack {...TestimonialStyle}>
          <Icon as={TiCodeOutline} color={brand[600]} fontSize="50px" />
          <Text>
            By following best practices for coding, i can write code that is
            highly readable and easy to understand. This can make it easier for
            others to work with me.
          </Text>
        </VStack>
        <VStack {...TestimonialStyle}>
          <Icon as={TiBrush} color={brand[600]} fontSize="50px" />
          <Text>
            Having a knowledge of design principles and techniques can help me
            create visually appealing and user-friendly websites.
          </Text>
        </VStack>
      </Stack>
    </VStack>
  );
}
