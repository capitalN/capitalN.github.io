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
import { brand, ButtonStyle } from "../utils/globalCSS";

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
      items: 2,
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

  const [play, setPlay] = useState(true);

  return (
    <Stack>
      <Carousel responsive={responsive} infinite={true} autoPlay={play}>
        {repos.map(
          ({ name, description, url, repositoryTopics, homepageUrl }, i) => (
            <Box
              key={i}
              bgImage={`url(${description.split("@")[1]})`}
              backgroundRepeat="no-repeat"
              backgroundSize="cover"
              backgroundPosition="top"
            >
              <Center>
                <Stack
                  maxW={"lg"}
                  position="absolute"
                  bottom={"20px"}
                  p="20px"
                  borderRadius={"10px"}
                  boxShadow="lg"
                  bgColor={"white"}
                  color="black"
                >
                  <Heading size={"lg"} fontStyle="inherit">
                    {name}
                  </Heading>
                  <p>{description.split("@")[0]}</p>
                  <br />
                  <Text fontWeight={"bold"}>Tech Stack</Text>
                  <Flex flexWrap={"wrap"} gap="5px">
                    {repositoryTopics.nodes.map((el, i) => (
                      <Button
                        variant={"outline"}
                        color={brand[600]}
                        border="1px solid"
                        size="sm"
                        borderRadius={"0"}
                      >
                        {el.topic.name}
                      </Button>
                    ))}
                  </Flex>

                  <br />
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
                  <Button
                    onClick={() => setPlay(!play)}
                    position="absolute"
                    bottom="20px"
                    right="20px"
                    borderRadius={"full"}
                    w="50px"
                    h="50px"
                    colorScheme={"blackAlpha"}
                  >
                    {play ? (
                      <TiMediaPause fontSize={"30px"} />
                    ) : (
                      <TiMediaPlay fontSize={"30px"} />
                    )}
                  </Button>
                </Stack>
              </Center>
            </Box>
          )
        )}
      </Carousel>
    </Stack>
  );
}
