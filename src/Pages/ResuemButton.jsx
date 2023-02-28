import React from "react";
import { Button, Link } from "@chakra-ui/react";

export default function ResuemButton() {
  return (
    <Button
      as={Link}
      href="https://drive.google.com/u/0/uc?id=1GtZiQIVtAi8ap6WSe38hKNHeB_c4T4eg&export=download"
      onClick={() =>
        window.open(
          "https://drive.google.com/file/d/1GtZiQIVtAi8ap6WSe38hKNHeB_c4T4eg/view",
          "_blank"
        )
      }
      fontWeight="bold"
      size={"lg"}
      fontFamily="inherit"
    >
      RESUME
    </Button>
  );
}
