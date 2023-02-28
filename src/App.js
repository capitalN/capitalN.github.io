import {
  Box,
  Button,
  Flex,
  Heading,
  Link,
  useDisclosure,
  Show,
  Hide,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  Text,
  DrawerFooter,
  Input,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  Stack,
  HStack,
  VStack,
  Divider,
} from "@chakra-ui/react";
import AOS from "aos";
import "aos/dist/aos.css";

import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import Projects from "./Pages/Projects";
import Skills from "./Pages/Skills";
import "./App.css";
import React, { useEffect } from "react";
import { HamburgerIcon } from "@chakra-ui/icons";

const LINKS = [
  { to: "#home", title: "HOME" },
  { to: "#about", title: "ABOUT" },
  { to: "#skills", title: "SKILLS" },
  { to: "#projects", title: "PROJECTS" },
  { to: "#contact", title: "CONTACT" },
];

function App() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 600,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);

  return (
    <Box>
      <Show above="md">
        <Flex
          as={"header"}
          justify={"space-evenly"}
          position="fixed"
          w="100vw"
          h={"60px"}
          align={"center"}
          bg={"black"}
          color="white"
          zIndex={10}
          id="navbar"
          transition={"top 0.3s"}
        >
          <Link href="#home" _hover={{ textDecoration: "none" }}>
            <Heading fontFamily={"mono"}>NIKHIL</Heading>
          </Link>
          <Flex justify={"space-evenly"} w="50%">
            {LINKS.map((link) => (
              <Link
                _hover={{ color: "orange" }}
                fontWeight={"bold"}
                href={link.to}
                key={link.to}
              >
                {link.title}
              </Link>
            ))}
          </Flex>

          <Button
            borderRadius={"full"}
            bg={"orange"}
            color="white"
            _hover={{ bg: "white", color: "black" }}
            fontWeight="bold"
            w="120px"
            as={Link}
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
        </Flex>
      </Show>

      <Show below="md">
        <HStack
          justify={"space-between"}
          position={"fixed"}
          zIndex={"100"}
          w="100%"
          bgColor={"black"}
          p="10px"
        >
          <Heading as={Link} href="#home" fontFamily={"mono"} color="white">
            NIKHIL
          </Heading>
          <Button
            // right="4"
            // top="4"
            ref={btnRef}
            onClick={onOpen}
            borderRadius={"full"}
            bg={"orange"}
            color="white"
            w="50px"
            h="50px"
          >
            <HamburgerIcon fontSize={"20px"} fontWeight="bold" />
          </Button>
          <Drawer
            isOpen={isOpen}
            placement="top"
            onClose={onClose}
            finalFocusRef={btnRef}
          >
            <DrawerOverlay />
            <DrawerContent bg={"black"} color="white">
              <DrawerCloseButton />
              <Heading fontFamily={"mono"}>NIKHIL</Heading>
              <Divider />
              <DrawerBody>
                <Stack>
                  {LINKS.map((link) => (
                    <Link
                      _hover={{ color: "orange" }}
                      fontWeight={"bold"}
                      href={link.to}
                      key={link.to}
                      textAlign="left"
                    >
                      {link.title}
                    </Link>
                  ))}
                </Stack>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </HStack>
      </Show>

      <Box color="black">
        <Box id="home" bg="black" color={"white"}>
          <Home />
        </Box>
        <Box id="about">
          <About />
        </Box>
        <Box id="skills">
          <Skills />
        </Box>
        <Box id="projects">
          <Projects />
        </Box>
        <Box id="contact">
          <Contact />
        </Box>
      </Box>

      <Box
        w="100vw"
        justify="space-evenly"
        bg={"black"}
        color="white"
        padding={"20px"}
      >
        <Heading>nikhil angolkar</Heading>
        <Link href="mailto:angolkarnikhil@gmail.com">
          angolkarnikhil@gmail.com
        </Link>
      </Box>
    </Box>
  );
}

export default App;
