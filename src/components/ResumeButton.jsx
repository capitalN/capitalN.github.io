import { Button } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

export default function ResumeButton() {
  return (
    <>
      <Button
        zIndex="0"
        colorScheme="messenger"
        w={"90%"}
        as={Link}
        to="https://drive.google.com/u/0/uc?id=1GtZiQIVtAi8ap6WSe38hKNHeB_c4T4eg&export=download"
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
