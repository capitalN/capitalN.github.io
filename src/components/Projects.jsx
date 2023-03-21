import {
  Badge,
  Divider,
  Flex,
  Heading,
  Image,
  Link,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { aosDelayedStyles, aosStyles, bgFontStyle } from "./styles";


export default function Projects() {
  const PROJECTS = [
    {
      id: 1,
      title: "NIBBI.COM",
      link: "https://nibbi.vercel.app/",
      image:
        "https://user-images.githubusercontent.com/107465553/226311114-fa0085c6-ce43-4404-bf5a-41b0925c8569.png",
      github: "https://github.com/capitalN/nibbi.com",
      desc: "An online store for women’s beauty products would typically offer a variety of cosmetics and skincare items for purchase over the internet. These could include makeup, hair care products and more.",
      about:
        "This project involves both front-end and back-end development and was completed by myself in 7 days.",
      contributions: [
        "Signup",
        "Login",
        "Products",
        "product details",
        "Filtering",
        "Sorting",
        "Searching",
        "Cart",
        "Checkout",
        "Navbar",
        "Footer",
        "Screen Responsiveness",
      ],
      techStack: [
        "HTML",
        "CSS",
        "JS",
        "React",
        "Chakra-UI",
        "Redux",
        "React Router",
        "Node.js",
        "Express.js",
        "MongoDB",
      ],
    },

    {
      id: 2,
      title: "CULT.FIT",
      link: "https://cult-fit-psi.vercel.app",
      image:
        "https://user-images.githubusercontent.com/107465553/226364961-0af7eb3f-3854-4109-b9c4-bcaccf4b9dff.png",
      github: "https://github.com/capitalN/cult.fit",
      desc: "Cult.fit is a website that offers a wide range of fitness-related products and services. These may include workout equipment, supplements, wearable fitness gadgets and more.",
      about:
        "This project includes only front-end, used render.com for data storage. It was completed by myself in 4 days.",
      contributions: [
        "Navbar",
        "Footer",
        "animations",
        "Store",
        "carausal",
        "products",
        "Sorting",
        "product details",
        "cart",
        "checkout",
        "Screen Responsiveness",
      ],
      techStack: [
        "HTML",
        "CSS",
        "JS",
        "React",
        "React Router",
        "Redux",
        "Chakra-UI",
      ],
    },

    {
      id: 3,
      title: "LATELY.AI",
      link: "https://dulcet-marigold-6dca17.netlify.app",
      image:
        "https://user-images.githubusercontent.com/107465553/218475157-290a3725-d3d8-4086-83d7-224af9b178cd.png",
      github: "https://github.com/capitalN/lately.ai",
      desc: "It is an AI-powered content generator and social media management platform that re-purposes longform text, video and podcasts",
      about:
        "This project was built collaboratively (by group of 4) during Masai Construct Week within a span of 4 days.",
      contributions: [
        "Navbar",
        "Footer",
        "pages of Resouce section",
        "pagination",
        "screen responsiveness",
      ],
      techStack: ["HTML", "CSS", "JavaScript"],
    },
  ];
  return (
    <VStack textAlign={"justify"}>
      <Flex flexWrap={"wrap"} gap="100px">
        {PROJECTS.map((project) => (
          <Flex
            key={project.id}
            direction={{
              base: "column",
              sm: "column",
              md: "column",
              lg: "row",
            }}
            gap={{ base: "10px", sm: "20px", md: "20px", lg: "40px" }}
            {...aosStyles}
          >
            <Stack gap={"10px"}>
              <Heading size={"2xl"}>{project.title}</Heading>
              <Image src={project.image} alt={project.title} />
            </Stack>
            <Stack
              justify={"space-between"}
              gap="5px"
              position={"relative"}
              {...aosDelayedStyles}
            >
              <Heading
                position={"absolute"}
                right="0"
                bottom={0}
                {...bgFontStyle}
              >
                {project.id}
              </Heading>
              <Flex justify={"space-between"} fontWeight="bold">
                <Heading
                  as={Link}
                  href={project.link}
                  target="_blank"
                  size={"lg"}
                  fontFamily="inherit"
                >
                  LIVE {">"}
                </Heading>
                <Heading
                  as={Link}
                  href={project.github}
                  target="_blank"
                  size={"lg"}
                  fontFamily="inherit"
                >
                  CODE {">"}
                </Heading>
              </Flex>

              <Text zIndex={1}>
                <Text fontWeight={"bold"}>DESCRIPTION</Text>
                {project.desc}
                <br />
                {project.about}
              </Text>

              <Text zIndex={1}>
                <Text fontWeight={"bold"}>TECH STACK</Text>
                {project.techStack.map((el) => (
                  <Badge m={"0 5px"} p="0 5px" borderRadius={0}>
                    {el}
                  </Badge>
                ))}
              </Text>

              <Text zIndex={1}>
                <Text fontWeight={"bold"}>CONTRIBUTION</Text>
                {project.contributions.map((el) => (
                  <Badge m={"0 5px"} p="0 5px" borderRadius={0}>
                    {el}
                  </Badge>
                ))}
              </Text>
              <Divider />
            </Stack>
          </Flex>
        ))}
      </Flex>
    </VStack>
  );
}
