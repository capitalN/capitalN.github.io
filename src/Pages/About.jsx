import React from "react";
import {
  Box,
  Heading,
  Container,
  Button,
  Flex,
  HStack,
  VStack,
  Textarea,
  Text,
  Input,
  Image,
  Stack,
  Divider,
  color,
  Link,
  LinkBox,
} from "@chakra-ui/react";

export default function About() {
  return (
    <Box>
      <Container maxW={"7xl"}>
        <Flex
          direction={"column"}
          align="center"
          justify={"center"}
          textAlign="center"
        >
          <Flex
            m={"10px"}
            p="30px"
            gap={"20px"}
            align="top"
            borderRadius={"10px"}
            direction={{ base: "column", md: "column", lg: "row" }}
            boxShadow={"2xl"}
          >
            <VStack
              p={"30px"}
              borderRadius={"10px"}
              justify={"space-evenly"}
              bg="black"
              color={"white"}
            >
              <Image
                src="https://avatars.githubusercontent.com/u/107465553?v=4"
                alt="nikhil angolkar"
                borderRadius={"full"}
                mb="20px"
              />
              <Divider />
              <Box fontFamily={"mono"}>
                <Text fontSize={"26px"}>NIKHIL ANGOLKAR</Text>
                <Text>full-stack web-developer</Text>
              </Box>
            </VStack>
            <VStack justifyContent={"center"} gap="15px">
              <Heading>ABOUT</Heading>

              <Heading size={"md"} w={{ lg: "80%" }} textAlign="justify">
                " An ambitious and self-motivated full-stack web developer with
                considerable technical skills who possesses self-discipline and
                the ability to work with a minimum of supervision. "
              </Heading>
              <Link
                href="https://drive.google.com/u/0/uc?id=1GtZiQIVtAi8ap6WSe38hKNHeB_c4T4eg&export=download"
                _hover={{
                  textDecoration: "none",
                }}
              >
                <Button
                  as={Link}
                  borderRadius={"full"}
                  bg={"orange"}
                  color="white"
                  _hover={{ bg: "black" }}
                  fontWeight="bold"
                  w="120px"
                  href="https://drive.google.com/u/0/uc?id=1GtZiQIVtAi8ap6WSe38hKNHeB_c4T4eg&export=download"
                  onClick={() =>
                    window.open(
                      "https://drive.google.com/file/d/1GtZiQIVtAi8ap6WSe38hKNHeB_c4T4eg/view",
                      "_blank"
                    )
                  }
                >
                  RESUME
                </Button>
              </Link>
            </VStack>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
}
