import {
  Box,
  Grid,
  HStack,
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
    { icon: SiVisualstudiocode, title: "VS Code", color: "#0078d7" },
    { icon: SiGithub, title: "Github", color: "black" },
  ];

  const blockSize = useBreakpointValue({ base: 10, sm: 15, md: 20, lg: 25 });

  return (
    <Stack textAlign={"center"} gap="20px">
      <Grid
        gridTemplateColumns={{
          base: "repeat(2,1fr)",
          md: "repeat(3,1fr)",
          lg: "repeat(5,1fr)",
        }}
        gap="10px"
      >
        {skills.map(({ icon, title, color }) => (
          <HStack bgColor={"white"} gap="10px" p="10px">
            <Icon as={icon} color={color} boxSize="50px" />
            <Text fontWeight={"bold"}>{title}</Text>
          </HStack>
        ))}
      </Grid>

      <Grid
        gridTemplateColumns={{
          base: "repeat(1,1fr)",
          md: "repeat(2,1fr)",
          lg: "repeat(3,1fr)",
        }}
        gap="20px"
      >
        {Stats.map((image) => (
          <Box bgColor={"white"} key={image}>
            <Image width="100%" src={image} alt="stats" height={"auto"} />
          </Box>
        ))}
      </Grid>

      <Box p="10px" bgColor={"white"}>
        <GitHubCalendar
          username="capitalN"
          blockSize={blockSize}
          colorScheme="light"
        />
        <Text fontWeight={"bold"}>Github Calendar</Text>
      </Box>
    </Stack>
  );
}

let Stats = [
  "https://github-readme-stats.vercel.app/api?username=capitalN&show_icons=true&locale=en&hide_border=true&include_all_commits=true&count_private=true",
  "https://github-readme-stats.vercel.app/api/top-langs?username=capitalN&show_icons=true&locale=en&layout=compact&hide_border=true&include_all_commits=true&count_private=true",
  "https://github-readme-streak-stats.herokuapp.com/?user=arun24hrs&hide_border=true&include_all_commits=true&count_private=true",
];
