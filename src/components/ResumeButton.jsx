import { Button, Link } from "@chakra-ui/react";
import React from "react";
import { Brand } from "../utils/Theme";

export default function ResumeButton({
  bgColor = Brand.secondary[0],
  color = Brand.primary[0],
}) {
  return (
    <>
      <Button
        colorScheme={""}
        bgColor={bgColor}
        color={color}
        h="50px"
        w="100%"
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
    </>
  );
}
