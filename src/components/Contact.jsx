import {
  Center,
  Input,
  Stack,
  Text,
  Textarea,
  VStack,
  Link,
  Heading,
} from "@chakra-ui/react";
import React from "react";
import Footer from "./Footer";
import { aosStyles } from "./styles";

export default function Contact() {
  const borderStyle = {
    borderColor: "transparent",
    borderBottomColor: "white",
  };
  return (
    <VStack
      w="100vw"
      h="100vh"
      color="white"
      bgImage={"arrival2.jpg"}
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      bgPosition={"center"}
      textAlign="left"
    >
      <Center
        w="100vw"
        h="90vh"
        background="linear-gradient(180deg, black 10%, rgba(0,0,0,0) 100%)"
      >
        <Center {...aosStyles}>
          <form
            action="https://formsubmit.co/angolkarnikhil@gmail.com"
            method="POST"
          >
            <Stack w={"300px"}>
              <Text>Name</Text>
              <Input
                {...borderStyle}
                required
                name="name"
                class="form-control"
                type={"text"}
              />
              <br />
              <Text>Email</Text>
              <Input
                {...borderStyle}
                required
                name="email"
                class="form-control"
                type={"email"}
              />
              <br />
              <Text>Message</Text>
              <Textarea
                {...borderStyle}
                class="form-control"
                required
                name="message"
              ></Textarea>
              <br />
              <button
                type="submit"
                class="btn btn-lg btn-dark btn-block"
                style={{ textAlign: "right" }}
              >
                <Heading as={Link} fontFamily="inherit" size={"lg"}>
                  SEND {">"}
                </Heading>
              </button>
            </Stack>
          </form>
        </Center>
      </Center>
      <Footer />
    </VStack>
  );
}
