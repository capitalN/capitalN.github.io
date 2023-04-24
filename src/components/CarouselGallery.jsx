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

export default function CarouselGallery({ repos }) {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 2.5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2.2,
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
        {data.map(
          (
            { name, description, url, techStack, homepageUrl, image, features },
            i
          ) => (
            <VStack
              key={i}
              boxShadow={"xl"}
              p="20px"
              m="20px"
              h="100%"
              bgColor={"white"}
            >
              <Image src={image} />
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

                <Text>{description}</Text>
                <br />
                <Text fontWeight={"bold"}>Tech Stack</Text>
                <Flex flexWrap={"wrap"} gap="5px">
                  {techStack.map((el, i) => (
                    <Button size="sm" borderRadius={"full"}>
                      {el}
                    </Button>
                  ))}
                </Flex>
                <br />
                <Text fontWeight={"bold"}>Features</Text>
                <Flex flexWrap={"wrap"} gap="5px">
                  {features.map((el, i) => (
                    <Button size="sm" borderRadius={"full"}>
                      {el}
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

let data = [
  {
    name: "Dermstore.com",
    description:
      "DermStore, an online platform that offers various beauty products and personal care items for women. I built this project in 5 days as an individual assignment for the Masai School construct week.",
    image:
      "https://user-images.githubusercontent.com/107465553/233631000-0487b844-126d-460c-a84d-3f5f3295319c.png",
    url: "https://github.com/capitalN/dermstore",
    homepageUrl: "https://dermstore-capitaln.vercel.app",
    techStack: [
      "HTML",
      "CSS",
      "JS",
      "React",
      "Chakra-UI",
      "Redux",
      "RouterDom",
      "Node.js",
      "Express.js",
      "MongoDB",
    ],
    features: [
      "Signup",
      "Login",
      "Products",
      "Cart",
      "Filter",
      "Sort",
      "Navbar",
      "Footer",
      "Screen Responsive",
    ],
  },
  {
    name: "Cult.fit",
    description:
      "This project is a clone of Cult.fit, a website that offers various fitness services and products. It was created in 5 days as part of the Masai School construct week. This is an Individual Project.",
    image:
      "https://user-images.githubusercontent.com/107465553/226364961-0af7eb3f-3854-4109-b9c4-bcaccf4b9dff.png",
    url: "https://github.com/capitalN/cult.fit",
    homepageUrl: "https://cult-fit-capitaln.vercel.app/",
    techStack: [
      "HTML",
      "CSS",
      "JS",
      "React",
      "Chakra-UI",
      "Redux",
      "RouterDom",
      "animations",
    ],
    features: [
      "Products",
      "Cart",
      "Sort",
      "animations",
      "Navbar",
      "Footer",
      "Screen Responsive",
    ],
  },
  {
    name: "Rick and Morty",
    description:
      "In this mini project, I used an API to implement some features mentioned below. It's an individual project built in 2 days at Masai School.",
    image:
      "https://user-images.githubusercontent.com/107465553/232030483-190340b0-fb6c-483a-be80-fa509edee952.jpeg",
    url: "https://github.com/capitalN/rick_and_morty",
    homepageUrl: "https://rickandmorty-capitaln.vercel.app/",
    techStack: [
      "HTML",
      "CSS",
      "JS",
      "React",
      "Chakra-UI",
      "Redux",
      "RouterDom",
      "API",
    ],
    features: [
      "Characters",
      "Filter",
      "Pagination",
      "Navbar",
      "Footer",
      "Screen Responsive",
    ],
  },
];
