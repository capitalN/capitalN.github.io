import {
  Center,
  Input,
  Stack,
  Text,
  Textarea,
  VStack,
  Link,
  Heading,
  Box,
  Button,
  Flex,
  Tooltip,
  Icon,
} from "@chakra-ui/react";
import React from "react";
import { SocialLinks } from "../App";
import { ButtonStyle } from "../utils/globalCSS";

export default function Contact() {
  return (
    <Box>
      <Flex
        boxShadow={"xl"}
        borderRadius="10px"
        bgColor={"white"}
        direction={{ base: "column", md: "row" }}
      >
        <Stack w="350px" p="20px" bgColor={"gray.50"} justify="space-between">
          <Heading>Contact</Heading>
          <Stack fontWeight="bold" fontSize={"20px"}>
            <Text>Nikhil Angolkar</Text>
            <Text>Belgaum, Karnataka</Text>
            <Text>angolkarnikhil@gmail.com</Text>
            <Text>+91 7795334086</Text>
          </Stack>

          <Flex direction={"row"} w="100%" justify={"space-between"}>
            {SocialLinks.map(({ name, href, icon, colorScheme }) => (
              <Button as={Link} href={href} boxSize="50px" target="_blank" variant={"outline"} colorScheme={colorScheme}>
                <Icon as={icon} fontSize="30px" />
              </Button>
            ))}
          </Flex>
        </Stack>
        <form
          action="https://formsubmit.co/angolkarnikhil@gmail.com"
          method="POST"
        >
          <Stack p="20px" w="350px">
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
              <Button colorScheme={"messenger"} w="100%">
                SEND
              </Button>
            </button>
          </Stack>
        </form>
      </Flex>

      <br />
    </Box>
  );
}
