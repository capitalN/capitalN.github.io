import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import React, { useState } from "react";
import {
  TiMediaPlay,
  TiMediaPause,
  TiChevronLeft,
  TiChevronRight,
} from "react-icons/ti";

import {
  Box,
  Flex,
  Heading,
  HStack,
  Stack,
  Text,
  VStack,
  Image,
  Link,
  Badge,
  Center,
  Button,
} from "@chakra-ui/react";
import { brand, ButtonStyle, ContainerStyle } from "../utils/globalCSS";

const CustomRightArrow = ({ onClick }) => {
  return (
    <Button onClick={() => onClick()} right="10px">
      <TiChevronRight />
    </Button>
  );
};

const CustomLeftArrow = ({ onClick }) => {
  return (
    <Button onClick={() => onClick()} right="110px">
      <TiChevronLeft />
    </Button>
  );
};
export default function CarouselGallery({ repos }) {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 2.5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2.5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 520 },
      items: 1.5,
    },
    mobile: {
      breakpoint: { max: 519, min: 0 },
      items: 1,
    },
  };

  return (
    <Stack justify="center">
      <Carousel responsive={responsive} infinite={false} autoPlay={false}>
        {repos.map(
          ({ name, description, url, repositoryTopics, homepageUrl }, i) => (
            <VStack
              key={i}
              boxShadow={"xl"}
              p="20px"
              m="20px"
              h="100%"
              bgColor={"white"}
            >
              <Image src={`${description.split("@")[1]}`} />
              <HStack
                justify={"center"}
                gap="20px"
                color={"blue"}
                fontSize="20px"
                fontWeight={"bold"}
              >
                <Link href={homepageUrl} target="_blank">
                  {"Live >"}
                </Link>
                <Link href={url} target="_blank">
                  {"Code >"}
                </Link>
              </HStack>
              <Stack>
                <Heading size={"lg"} fontStyle="inherit">
                  {name}
                </Heading>

                <Text>{description.split("@")[0]}</Text>
                <br />
                <Text fontWeight={"bold"}>Tech Stack</Text>
                <Flex flexWrap={"wrap"} gap="5px">
                  {repositoryTopics.nodes.map((el, i) => (
                    <Button size="sm" borderRadius={"full"}>
                      {el.topic.name}
                    </Button>
                  ))}
                </Flex>
              </Stack>
            </VStack>
          )
        )}
      </Carousel>
    </Stack>
  );
}
