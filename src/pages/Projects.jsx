import { Box, Heading } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Carousel from "../components/Carousel";
import CarouselGallery from "../components/CarouselGallery";
import { get_repos } from "../redux/github/actions";
import { ContainerStyle } from "../utils/globalCSS";

export default function Projects() {
  const { repos } = useSelector((store) => store.githubReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(get_repos());
  }, [dispatch]);

  return <CarouselGallery repos={repos} />;
}
