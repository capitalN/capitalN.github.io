import {
  Box,
  Button,
  ButtonGroup,
  Grid,
  Heading,
  HStack,
  Icon,
  Input,
  Link,
  Stack,
  Text,
  Textarea,
} from "@chakra-ui/react";
import React from "react";
import {
  TiSocialLinkedin,
  TiSocialGithub,
  TiPhoneOutline,
  TiMail,
} from "react-icons/ti";
import { links } from "../components/Navbar";
import { Brand } from "../utils/Theme";

export default function Contact() {
  return (
    <Box bgColor={Brand.primary[500]} color="white" p="40px">
      <Grid
        gridTemplateColumns={{
          base: "repeat(1, 1fr)",
          sm: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
        }}
        gap="40px"
      >
        <Stack gap="20px" justify={"space-around"}>
          <Stack>
            <Heading fontFamily={"inherit"}>nikhil angolkar</Heading>
            <Text>angolkarnikhil@gmail.com</Text>
            <Text>+91 7795334086</Text>
            <Text>Nikhil Angolkar | LinkedIN</Text>
            <Text>Belgaum, Karnataka</Text>
          </Stack>

          <ButtonGroup colorScheme={""}>
            {SocialLinks.map(({ icon, name, href }, i) => (
              <Button
                boxSize="50px"
                key={i}
                as={Link}
                href={href}
                bgColor={Brand.secondary[0]}
                color={Brand.primary[0]}
              >
                <Icon as={icon} boxSize={"30px"} />
              </Button>
            ))}
          </ButtonGroup>

          <HStack gap="10px">
            {links.map((link) => (
              <Link href={`#${link}`} key={link}>
                {link}
              </Link>
            ))}
          </HStack>
        </Stack>

        <form
          action="https://formsubmit.co/angolkarnikhil@gmail.com"
          method="POST"
        >
          <Stack p="20px">
            <Text>Name</Text>
            <Input required name="name" class="form-control" type={"text"} />
            <br />
            <Text>Email</Text>
            <Input required name="email" class="form-control" type={"email"} />
            <br />
            <Text>Message</Text>
            <Textarea class="form-control" required name="message"></Textarea>
            <br />
            <button type="submit" class="btn btn-lg btn-dark btn-block">
              <Button
                colorScheme={""}
                w="100%"
                height={"50px"}
                bgColor={Brand.secondary[0]}
                color={Brand.primary[0]}
              >
                SEND
              </Button>
            </button>
          </Stack>
        </form>
      </Grid>
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
