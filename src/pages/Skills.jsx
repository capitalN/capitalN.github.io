import {
  Box,
  Center,
  Flex,
  Grid,
  Icon,
  Image,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import React from "react";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiReactrouter,
  SiRedux,
  SiTypescript,
  SiChakraui,
  SiVisualstudiocode,
  SiGithub,
} from "react-icons/si";
import GitHubCalendar from "react-github-calendar";
import { brand } from "../utils/globalCSS";

export default function Skills() {
  let skills = [
    { icon: SiHtml5, title: "Html", color: "orangered" },
    { icon: SiCss3, title: "Css", color: "#264de4" },
    { icon: SiJavascript, title: "JavaScript", color: "orange" },
    { icon: SiReact, title: "React.js", color: "#61DBFB" },
    { icon: SiNextdotjs, title: "Next.js", color: "black" },
    { icon: SiTypescript, title: "TypeScript", color: "#007ACC" },
    { icon: SiNodedotjs, title: "Node.js", color: "#68A063" },
    { icon: SiExpress, title: "Express", color: "orangered" },
    { icon: SiMongodb, title: "MongoDB", color: "green" },
    { icon: SiReactrouter, title: "ReactRouter", color: "red" },
    { icon: SiRedux, title: "Redux", color: "purple" },
    { icon: SiChakraui, title: "ChakraUI", color: "teal" },
    { icon: SiVisualstudiocode, title: "VisualStudio", color: "#0078d7" },
    { icon: SiGithub, title: "Github", color: "black" },
  ];

  const blockSize = useBreakpointValue({ base: 10, sm: 15, md: 20, lg: 25 });

  return (
    <Stack w="100%" textAlign={"center"}>
      <Grid
        gridTemplateColumns={{
          base: "repeat(auto-fit, minmax(100px, 1fr))",
          md: "repeat(auto-fit, minmax(210px, 1fr))",
        }}
        h="100%"
        gap="25px"
      >
        {skills.map(({ icon, title, color }) => (
          <Center
            key={title}
            h={{ base: "150px", md: "210px" }}
            bgColor={"white"}
            color="black"
            boxShadow="lg"
          >
            <Stack>
              <Icon as={icon} color={color} boxSize="5em" />
              <Text fontWeight={"bold"}>{title}</Text>
            </Stack>
          </Center>
        ))}
      </Grid>
      <br />
      <br />
      <Stack
        direction={"row"}
        w="100%"
        justify="space-evenly"
        gap={"20px"}
        flexWrap={"wrap"}
      >
        <Image
          src="https://github-readme-stats.vercel.app/api?username=capitalN&show_icons=true&locale=en&hide_border=true&include_all_commits=true&count_private=true"
          w="400px"
        />
        <Image
          src="https://github-readme-stats.vercel.app/api/top-langs?username=capitalN&show_icons=true&locale=en&layout=compact&hide_border=true&include_all_commits=true&count_private=true"
          w="400px"
        />
        <Image
          src="https://github-readme-streak-stats.herokuapp.com/?user=arun24hrs&hide_border=true&include_all_commits=true&count_private=true"
          w="400px"
        />
      </Stack>
      <br />
      <br />
      <Box p="10px" boxShadow={"lg"} bgColor="white">
        <GitHubCalendar username="capitalN" blockSize={blockSize} />
        <Text fontWeight={"bold"}>Github Calendar</Text>
      </Box>
    </Stack>
  );
}
