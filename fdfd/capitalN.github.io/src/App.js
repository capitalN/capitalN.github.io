// ChakraUI
import {
  Box,
  Heading,
  HStack,
  Stack,
  Text,
  VStack,
  Flex,
  Show,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Link,
  Image,
} from "@chakra-ui/react";

// Components
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import About from "./components/About";
import Home from "./components/Home";
import Skills from "./components/Skills";

// AOS
import AOS from "aos";
import "aos/dist/aos.css";

// React
import { useEffect, useRef } from "react";

// Icons
import { TiThMenu } from "react-icons/ti";

// Styles
import { bgFontStyle } from "./components/styles";


// Code
export default function App({ data, repo }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  const LINKS = [
    { to: "#", title: "Home" },
    { to: "#about", title: "About" },
    { to: "#skills", title: "Skills" },
    { to: "#projects", title: "Projects" },
    { to: "#contact", title: "Contact" },
  ];

  useEffect(() => {
    AOS.init({
      disable: "mobile",
    });
  }, []);

  return (
    <VStack
      color={"gray.300"}
      bgColor={"black"}
      // gap={{ base: "30px", sm: "40px", md: "50px", lg: "60px" }}
      gap="50px"
      textAlign="center"
      p={{ base: "0 15px", sm: "0 20px", md: "0 30px", lg: "0 40px" }}
      overflowX={"hidden"}
      transform="0.2s ease"
    >
      <Box
        fontWeight={"bold"}
        position={"fixed"}
        top="0"
        w={"100%"}
        p="10px 20px"
        zIndex={100}
        background="linear-gradient(180deg, black 10%, rgba(0,0,0,0) 100%)"
        // id="navbar"
      >
        <Show above="md">
          <HStack justify="space-between" align="center">
            <a href="#">
              <Image src="/nik.png" alt="LOGO" width={"100px"} opacity="0.7" />
            </a>
            <Flex w={"50%"} justify="space-between">
              {LINKS.map((link) => (
                <a href={link.to} key={link.to}>
                  {link.title}
                </a>
              ))}
            </Flex>
            <Heading
              as={Link}
              href="https://drive.google.com/u/0/uc?id=1GtZiQIVtAi8ap6WSe38hKNHeB_c4T4eg&export=download"
              fontWeight="bold"
              size={"lg"}
              fontFamily="inherit"
              onClick={() =>
                window.open(
                  "https://drive.google.com/file/d/1GtZiQIVtAi8ap6WSe38hKNHeB_c4T4eg/view",
                  "_blank"
                )
              }
            >
              RESUME {">"}
            </Heading>
          </HStack>
        </Show>

        <Show below="md">
          <Flex justify={"space-between"}>
            <a href="#" fontWeight="bold">
              <Image src="/nik.png" alt="LOGO" width={"75px"} opacity="0.7" />
            </a>
            <TiThMenu
              ref={btnRef}
              onClick={onOpen}
              size="30px"
              style={{ margin: "4px" }}
            />
            <Drawer
              isOpen={isOpen}
              placement="top"
              onClose={onClose}
              finalFocusRef={btnRef}
            >
              <DrawerOverlay />
              <DrawerContent bgColor={"gray.900"}>
                <Stack w="100%" h="100%" bgColor={" rgba(23,25,35, 0.6)"}>
                  <DrawerCloseButton color={"white"} />
                  <Flex justify={"center"} p="10px">
                    <a href="#" fontWeight="bold" onClick={onClose}>
                      <Image
                        src="/nik.png"
                        alt="LOGO"
                        width={"100px"}
                        opacity="0.7"
                      />
                    </a>
                  </Flex>

                  <DrawerBody>
                    <Stack gap="10px">
                      {LINKS.map((link) => (
                        <Link href={link.to} key={link.to} onClick={onClose}>
                          <Text fontWeight={"bold"} color="gray.300">
                            {link.title}
                          </Text>
                        </Link>
                      ))}
                    </Stack>
                  </DrawerBody>
                </Stack>
              </DrawerContent>
            </Drawer>
          </Flex>
        </Show>
      </Box>

      <Box
        position={"relative"}
        bgImage={{ base: "spaceShip.jpg" }}
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
        bgPosition={"center"}
        w="100vw"
        h="100vh"
        id="#"
      >
        <Home />
      </Box>

      {/* <p id="about"></p> */}
      <VStack position={"relative"} id="about">
        <Heading {...bgFontStyle}>ABOUT</Heading>
        <About />
      </VStack>

      {/* <p id="skills"></p> */}
      <VStack position={"relative"} id="skills">
        <Heading {...bgFontStyle}>SKILLS</Heading>
        <Skills />
      </VStack>

      {/* <p id="projects"></p> */}
      <VStack position={"relative"} id="projects">
        <Heading {...bgFontStyle}>PROJECTS</Heading>
        <Projects />
      </VStack>
      <Box id="contact" zIndex={101}>
        <Contact />
      </Box>
    </VStack>
  );
}
