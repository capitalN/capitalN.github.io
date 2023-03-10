import React from "react";
import {
  Box,
  Heading,
  Container,
  Button,
  Flex,
  Image,
  Stack,
  Text,
  Link,
  HStack,
  VStack,
  Divider,
  Badge,
} from "@chakra-ui/react";

import { SiGithub, SiNetlify } from "react-icons/si";
import { useEffect } from "react";
import { GetStaticProps } from "./Api";

const PROJECTS = [
  {
    title: "lately.ai",
    link: "https://dulcet-marigold-6dca17.netlify.app/",
    image: "lately.png",
    github: "https://github.com/capitalN/lately.ai",
    desc: "this is an ai based content creating website buitd by me and my team of 4 during our construct week within a time span of 4-days",
    direction: "row",
    contributions: ["navbar", "footer", "resource pages", "UI"],
    techStack: [
      { color: "red", title: "HTML" },
      { color: "blue", title: "CSS" },
      { color: "yellow", title: "JavaScript" },
    ],
  },
  {
    title: "freshly.com",
    link: "https://freshlyfw200091.netlify.app/index.html",
    image: "freshly.png",
    github: "https://github.com/capitalN/freshly",
    desc: "prepared meal order & delivery website build by myself i have created navbar, login, signup form, UI",
    direction: "row-reverse",
    contributions: ["navbar", "footer", "cart", "signup", "login", "UI"],
    techStack: [
      { color: "red", title: "HTML" },
      { color: "blue", title: "CSS" },
      { color: "yellow", title: "JavaScript" },
    ],
  },
  {
    title: "cult.fit",
    link: "https://wakehealthy.vercel.app/",
    image: "cult.png",
    desc: "A Platform for virtual training programs available for your special workouts starting from beginner level to Pro. Also different offline Gym centers available with great pricing to join . Don't just wait there start your journey with wake healthy now.",
    direction: "row",
    github: "https://github.com/capitalN/cult.fit",
    contributions: ["store", "cart", "admin", "UI"],
    techStack: [
      { color: "red", title: "HTML" },
      { color: "blue", title: "CSS" },
      { color: "yellow", title: "JavaScript" },
      { color: "blue", title: "React" },
    ],
  },
  {
    title: "home interior",
    link: "https://home-interior-capitaln.vercel.app/",
    image: "home_interior.png",
    github: "https://github.com/capitalN/scrawny-meat-2282",
    desc: "Home Interior website is the clone of pepperfry.com which is an e-commerce website, famous for selling home interior goods, furniture & decorative products across India.",
    direction: "row-reverse",
    contributions: ["home", "admin page", "UI"],
    techStack: [
      { color: "red", title: "HTML" },
      { color: "blue", title: "CSS" },
      { color: "yellow", title: "JavaScript" },
      { color: "gray", title: "next.js" },
    ],
  },
];

export default function Projects() {
  return (
    <Box pb="30px">
      <Container maxW={"7xl"}>
        <Flex direction={"column"} align="center" justify={"center"}>
          <Flex gap="60px" direction="column">
            <Heading mt={"9vh"}>PROJECTS</Heading>
            {PROJECTS.map((project) => (
              <Flex
                key={project.title}
                direction={{ base: "column", lg: project.direction }}
                gap="20px"
                borderRadius={"40px"}
              >
                <Image
                  w={{ base: "100%", lg: "60%" }}
                  src={project.image}
                  alt="fdf"
                  borderRadius={"20px"}
                  boxShadow="2xl"
                  data-aos="fade-down"
                />

                <VStack
                  w={{ base: "100%", lg: "30%" }}
                  justify="space-around"
                  p="20px"
                >
                  <Stack>
                    <Heading size={"lg"}>{project.title}</Heading>
                    <Text textAlign={"justify"}>{project.desc}</Text>
                  </Stack>
                  <Stack>
                    <Text fontWeight={"bold"}>Contributions</Text>
                    <HStack justify={"center"} flexWrap={"wrap"} gap="5px">
                      {project.contributions.map((el) => (
                        <Badge key={el}>{el}</Badge>
                      ))}
                    </HStack>
                  </Stack>
                  <Stack>
                    <Text fontWeight={"bold"}>Tech-Stack</Text>
                    <HStack justify={"center"}>
                      {project.techStack.map((el) => (
                        <Badge key={el.title} colorScheme={el.color}>
                          {el.title}
                        </Badge>
                      ))}
                    </HStack>
                  </Stack>
                  <Divider />
                  <HStack color={"black"}>
                    <Link
                      href={project.github}
                      target="_blank"
                      _hover={{
                        textDecoration: "none",
                      }}
                    >
                      <Button
                        borderRadius={"full"}
                        fontWeight="bold"
                        w="120px"
                        gap="1"
                      >
                        GITHUB
                        <SiGithub />
                      </Button>
                    </Link>
                    <Link
                      href={project.link}
                      target="_blank"
                      _hover={{
                        textDecoration: "none",
                      }}
                    >
                      <Button
                        borderRadius={"full"}
                        fontWeight="bold"
                        w="120px"
                        bg={"black"}
                        color="white"
                        _hover={{ color: "black", bg: "gray.200" }}
                        gap="1"
                      >
                        LIVE
                        <SiNetlify />
                      </Button>
                    </Link>
                  </HStack>
                </VStack>
              </Flex>
            ))}
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
}
