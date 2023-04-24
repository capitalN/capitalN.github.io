import {
  Badge,
  Box,
  Button,
  Center,
  Flex,
  Heading,
  HStack,
  Image,
  Stack,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import React from "react";
import { get_user } from "../redux/github/actions";
import { brand, ButtonStyle } from "../utils/globalCSS";
import {
  TiLocation,
  TiSocialGithub,
  TiSocialGithubCircular,
} from "react-icons/ti";
import { Link } from "react-router-dom";

export default function Profile() {
  let { user } = useSelector((store) => store.githubReducer);
  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(get_user());
  }, [dispatch]);

  let { name, login, avatar_url, bio, html_url, location } = user;

  return (
    <Stack
      p="20px"
      boxShadow={"xl"}
      gap="20px"
      direction={{ base: "column", md: "row" }}
      align="center"
      bgColor={"white"}
    >
      <Image
        objectFit="cover"
        boxSize="100%"
        src={avatar_url}
        bgColor="gray.100"
        w="300px"
      />
      <VStack w="300px">
        <Heading size={"lg"}>{name}</Heading>
        <Text color={"gray"}>@{login}</Text>
        <Text color={brand[400]}>{bio}</Text>
        <HStack>
          <TiLocation fontSize={"20px"} />
          <Text>{location}</Text>
        </HStack>
        <Text
          as={Link}
          to={html_url}
          color="blue"
          fontSize={"20px"}
          fontWeight="bold"
          target={"_blank"}
        >
          {"GitHub >"}
        </Text>
      </VStack>
    </Stack>
  );
}
