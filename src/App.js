import "./App.css";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import {
  Box,
  Button,
  Center,
  Flex,
  Grid,
  Heading,
  Hide,
  Icon,
  Link,
  Tooltip,
} from "@chakra-ui/react";
import ScrollspyNav from "react-scrollspy-nav";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";
import {
  TiHome,
  TiUser,
  TiCode,
  TiImage,
  TiPhone,
  TiSocialGithub,
  TiSocialLinkedin,
  TiPhoneOutline,
  TiMail,
} from "react-icons/ti";
import { useEffect } from "react";
import ResumeButton from "./components/ResumeButton";

export default function App() {
  const activeLinkStyles = {
    color: "blue",
  };

  return (
    <Box textAlign={"justify"} bgColor="gray.100">
      <ScrollspyNav
        scrollTargetIds={["about", "skills", "projects", "contact"]}
        activeNavClass="is-active"
        scrollDuration="1000"
        headerBackground="true"
        headerHeight="50"
      >
        <Grid
          position={"fixed"}
          top={{ lg: "0" }}
          bottom={{ base: "0%", lg: "auto" }}
          gridTemplateColumns={{ base: "repeat(5,1fr)", lg: "repeat(6,1fr)" }}
          w="100%"
          textAlign={"center"}
          bgColor="gray.100"
          zIndex={1001}
          id="navbar"
          alignItems={"center"}
          justifyItems="center"
        >
          <Button
            as={Link}
            href="#"
            fontSize={"40px"}
            _hover={{ textDecoration: "none" }}
          >
            na
          </Button>
          {NavLinks.map(({ name, href, icon }) => (
            <Button
              key={name}
              as={Link}
              href={href}
              sx={{ "&.is-active": activeLinkStyles }}
              borderRadius={"0"}
              h="60px"
              gap="10px"
              _hover={{ textDecoration: "none" }}
            >
              <Icon as={icon} fontSize="30px" />
              <Hide below="md">{name}</Hide>
            </Button>
          ))}
          <Hide below="lg">
            <ResumeButton />
          </Hide>
        </Grid>
      </ScrollspyNav>

      <Flex
        direction={"column"}
        position={"fixed"}
        top="60%"
        right={"0"}
        zIndex="100"
      >
        {SocialLinks.map(({ name, href, icon, colorScheme }) => (
          <Tooltip label={name} placement="left" key={name}>
            <Button
              as={Link}
              href={href}
              boxSize="50px"
              target="_blank"
              colorScheme={colorScheme}
              variant="ghost"
            >
              <Icon as={icon} fontSize="25px" />
            </Button>
          </Tooltip>
        ))}
      </Flex>

      <Box style={{ scrollSnapType: "y mandatory", overflow: "auto" }}>
        <Center
          minH={"100vh"}
          p="40px"
          id="home"
          bgImage="https://images.pexels.com/photos/2524873/pexels-photo-2524873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          bgRepeat="no-repeat"
          bgSize={"cover"}
          bgPosition="center"
        >
          <Home />
        </Center>
        <Center p="60px 10px" id="about">
          <About />
        </Center>
        <Center id="skills" p="40px">
          <Skills />
        </Center>
        <Box p="40px 10px" id="projects">
          <Projects />
        </Box>
        <Center id="contact" p="40px 10px" minH={"100vh"}>
          <Contact />
        </Center>
      </Box>
    </Box>
  );
}

export let SocialLinks = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/nikhil-angolkar-62722a19b/",
    icon: TiSocialLinkedin,
    colorScheme: "linkedin",
  },
  {
    name: "Email",
    href: "mailto:angolkarnikhil@gmail.com",
    icon: TiMail,
    colorScheme: "red",
  },
  {
    name: "Call",
    href: "tel: 7795334086",
    icon: TiPhoneOutline,
    colorScheme: "whatsapp",
  },
  {
    name: "Github",
    href: "https://github.com/capitalN",
    icon: TiSocialGithub,
    colorScheme: "purple",
  },
];

export let NavLinks = [
  { name: "About", href: "#about", icon: TiUser },
  { name: "Skills", href: "#skills", icon: TiCode },
  { name: "Projects", href: "#projects", icon: TiImage },
  { name: "Contact", href: "#contact", icon: TiPhone },
];
