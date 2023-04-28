import {
  Box,
  Stack,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  useDisclosure,
  Button,
  Link,
  Hide,
  Show,
  VStack,
  Divider,
  Heading,
  Grid,
  Icon,
  Text,
} from "@chakra-ui/react";
import React from "react";
import {
  TiCode,
  TiHome,
  TiImage,
  TiPhone,
  TiThMenu,
  TiUser,
} from "react-icons/ti";
import { Brand } from "../utils/Theme";
import ResumeButton from "./ResumeButton";
import ScrollspyNav from "react-scrollspy-nav";

export default function Navbar() {
  return (
    <Box
      p="10px 20px"
      position={"fixed"}
      top="0"
      bgColor={Brand.primary[500]}
      color={"white"}
      zIndex="1000"
      w="100%"
    >
      <Stack justify={"space-between"} direction="row" alignItems={"center"}>
        <Box w="150px">
          <Heading
            fontFamily={"inherit"}
            as={Link}
            href="#"
            _hover={{ textDecoration: "none" }}
          >
            na
          </Heading>
        </Box>
        <Box
          w="100%"
          bgColor={Brand.primary[500]}
          position={{ base: "fixed", md: "relative" }}
          bottom={{ base: "0px", md: "auto" }}
          left={{ base: "-2%", md: "auto" }}
        >
          <NavLinks />
        </Box>
        <Box w="150px">
          <ResumeButton />
        </Box>
      </Stack>
    </Box>
  );
}

function NavLinks() {
  const activeLinkStyles = {
    background: "rgba(0, 0, 0, 0.2)",
    fontSize:"22px",
  };
  return (
    <ScrollspyNav
      scrollTargetIds={["Home", "About", "Skills", "Projects", "Contact"]}
      activeNavClass="is-active"
      scrollDuration="1000"
      headerBackground="true"
      headerHeight="50"
    >
      <Grid gridTemplateColumns={"repeat(5, 1fr)"} fontWeight="bold">
        {Links.map(({ name, icon }) => (
          <Button
            as={Link}
            href={`#${name}`}
            key={name}
            sx={{ "&.is-active": activeLinkStyles }}
            bgColor={Brand.primary[500]}
            borderRadius="0"
            h="50px"
            colorScheme={""}
          >
            <Show below="sm">
              <Icon as={icon} boxSize="30px" />
            </Show>
            <Show above="md">{name}</Show>
          </Button>
        ))}
      </Grid>
    </ScrollspyNav>
  );
}

export let links = ["Home", "About", "Skills", "Projects", "Contact"];

export let Links = [
  { name: "Home", icon: TiHome },
  { name: "About", icon: TiUser },
  { name: "Skills", icon: TiCode },
  { name: "Projects", icon: TiImage },
  { name: "Contact", icon: TiPhone },
];
