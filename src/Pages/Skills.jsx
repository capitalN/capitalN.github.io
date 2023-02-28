import React from "react";
import {
  Box,
  Heading,
  Container,
  Button,
  Flex,
  Image,
  Stack,
  Grid,
  background,
  Text,
  Divider,
  VStack,
} from "@chakra-ui/react";

import GitHubCalendar from "react-github-calendar";

import {
  SiHtml5,
  SiCss3,
  SiGithub,
  SiReact,
  SiChakraui,
  SiReactrouter,
  SiRedux,
  SiJavascript,
  SiNextdotjs,
  SiTypescript,
  SiMongodb,
  SiNodedotjs,
  SiExpress,
  SiVisualstudio,
} from "react-icons/si";

export default function Skills() {
  let skillsBadge = {
    displlay: "flex",
    background: "black",
    color: "white",
    padding: "10px",
    borderRadius: "10px",
    width: "120px",
    height: "120px",
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "bold",
  };

  return (
    <Box pb={"30px"}>
      <Container maxW={"7xl"}>
        <Flex direction={"column"} align="center" gap="50px" justify={"center"}>
          <Heading mt={"9vh"}>SKILLS</Heading>
          <Grid
            gridTemplateColumns={{
              base: "repeat(2,1fr)",
              sm: "repeat(3,1fr)",
              md: "repeat(4,1fr)",
              lg: "repeat(5,1fr)",
            }}
            gap={"50px 80px"}
          >
            <Stack style={skillsBadge}>
              <SiHtml5 size={"60px"} color="red" />
              <Text>HTML</Text>
            </Stack>

            <Stack style={skillsBadge}>
              <SiCss3 size={"60px"} color="blue" />
              <Text>CSS</Text>
            </Stack>

            <Stack style={skillsBadge}>
              <SiJavascript size={"60px"} color="orange" />
              <Text>JavaScript</Text>
            </Stack>

            <Stack style={skillsBadge}>
              <SiReact size={"60px"} color="#61dafd" />
              <Text fontWeight={"bold"} mt="3">
                React
              </Text>
            </Stack>

            <Stack style={skillsBadge}>
              <SiChakraui size={"60px"} color="#81e6d9" />
              <Text>ChakraUI</Text>
            </Stack>

            <Stack style={skillsBadge}>
              <SiReactrouter size={"60px"} color="red" />
              <Text>ReactRouter</Text>
            </Stack>

            <Stack style={skillsBadge}>
              <SiRedux size={"60px"} color="#764abc" />
              <Text>Redux</Text>
            </Stack>

            <Stack style={skillsBadge}>
              <SiNextdotjs size={"60px"} color="white" />
              <Text>Next.JS</Text>
            </Stack>

            <Stack style={skillsBadge}>
              <SiTypescript size={"60px"} color="#007acc" />
              <Text>Typescript</Text>
            </Stack>

            <Stack style={skillsBadge}>
              <SiNodedotjs size={"60px"} color="white" />
              <Text>Node.js</Text>
            </Stack>

            <Stack style={skillsBadge}>
              <SiMongodb size={"60px"} color="green" />
              <Text>MongoDB</Text>
            </Stack>

            <Stack style={skillsBadge}>
              <SiExpress size={"60px"} color="red" />
              <Text>Express</Text>
            </Stack>

            <Stack style={skillsBadge}>
              <SiGithub size={"60px"} color="white" />
              <Text>GitHub</Text>
            </Stack>

            <Stack style={skillsBadge}>
              <SiVisualstudio size={"60px"} color="lightblue" />
              <Text>Visualstudio</Text>
            </Stack>
          </Grid>
          {/* <Heading>github calender</Heading> */}
          <VStack
            style={{
              padding: "20px",
              borderRadius: "10px",
            }}
            boxShadow="2xl"
            gap={"10px"}
          >
            <Flex gap={"10px"}>
              <Image
                src="https://github-readme-stats.vercel.app/api/top-langs?username=capitalN&show_icons=true&locale=en&layout=compact"
                w={"50%"}
              />
              <Image
                src="https://github-readme-stats.vercel.app/api?username=capitalN&show_icons=true&locale=en"
                w={"50%"}
              />
            </Flex>
            <GitHubCalendar username="capitalN" />
          </VStack>
        </Flex>
      </Container>
    </Box>
  );
}
