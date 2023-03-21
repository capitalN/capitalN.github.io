import { Flex, Image, Link, Stack, Text, VStack } from "@chakra-ui/react";
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
import { aosDelayedStyles, IconStyles } from "./styles";

export default function Skills() {
  return (
    <VStack gap="40px">
      <Flex flexWrap={"wrap"} justify="center">
        <VStack {...aosDelayedStyles}>
          <SiHtml5 {...IconStyles} color="orangered" />
          <Text>HTML</Text>
        </VStack>

        <VStack {...aosDelayedStyles}>
          <SiCss3 {...IconStyles} color="#264de4" />
          <Text>CSS</Text>
        </VStack>

        <VStack {...aosDelayedStyles}>
          <SiJavascript {...IconStyles} color="orange" />
          <Text>JavaScript</Text>
        </VStack>

        <VStack {...aosDelayedStyles}>
          <SiReact {...IconStyles} color="#61DBFB" />
          <Text>React</Text>
        </VStack>

        <VStack {...aosDelayedStyles}>
          <SiNextdotjs {...IconStyles} color="white" />
          <Text>Next.js</Text>
        </VStack>

        <VStack {...aosDelayedStyles}>
          <SiTypescript {...IconStyles} color="#007ACC" />
          <Text>TypeScript</Text>
        </VStack>

        <VStack {...aosDelayedStyles}>
          <SiNodedotjs {...IconStyles} color="#68A063" />
          <Text>Node.js</Text>
        </VStack>

        <VStack {...aosDelayedStyles}>
          <SiExpress {...IconStyles} color="orangered" />
          <Text>Express</Text>
        </VStack>

        <VStack {...aosDelayedStyles}>
          <SiMongodb {...IconStyles} color="green" />
          <Text>MongoDB</Text>
        </VStack>

        <VStack {...aosDelayedStyles}>
          <SiReactrouter {...IconStyles} color="red" />
          <Text>ReactRouter</Text>
        </VStack>

        <VStack {...aosDelayedStyles}>
          <SiRedux {...IconStyles} color="purple" />
          <Text>Redux</Text>
        </VStack>

        <VStack {...aosDelayedStyles}>
          <SiChakraui {...IconStyles} color="teal" />
          <Text>ChakraUI</Text>
        </VStack>

        <VStack {...aosDelayedStyles}>
          <SiVisualstudiocode {...IconStyles} color="#0078d7"/>
          <Text>VS Code</Text>
        </VStack>

        <VStack {...aosDelayedStyles}>
          <SiGithub {...IconStyles} />
          <Text>GitHub</Text>
        </VStack>
      </Flex>

      <Stack
        direction={"row"}
        w="100%"
        justify="space-evenly"
        gap={"20px"}
        flexWrap={"wrap"}
      >
        <Image
          src="https://github-readme-stats.vercel.app/api/top-langs?username=capitalN&show_icons=true&locale=en&layout=compact&theme=dark&hide_border=true&include_all_commits=true&count_private=true"
          {...aosDelayedStyles}
          w="400px"
        />
        <Image
          src="https://github-readme-stats.vercel.app/api?username=capitalN&show_icons=true&locale=en&theme=dark&hide_border=true&include_all_commits=true&count_private=true"
          {...aosDelayedStyles}
          w="400px"
        />
        <Image
          src="https://github-readme-streak-stats.herokuapp.com/?user=arun24hrs&theme=dark&hide_border=true&include_all_commits=true&count_private=true"
          {...aosDelayedStyles}
          w="400px"
        />
      </Stack>
      <Link
        href="https://github.com/capitalN"
        target={"_blank"}
        bgColor="gray.800"
        p={"2%"}
        {...aosDelayedStyles}
      >
        <GitHubCalendar
          username="capitalN"
          blockSize={25}
          // color="#a0aec0"
        />
      </Link>
    </VStack>
  );
}
