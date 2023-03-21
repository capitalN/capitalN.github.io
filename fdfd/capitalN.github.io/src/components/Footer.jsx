import { Flex, Link } from "@chakra-ui/react";
import React from "react";
// import { aosDelayedStyles } from "./styles";

export default function Footer() {
  return (
    <Flex
      flexWrap={"wrap-reverse"}
      justify={"space-evenly"}
      w="100vw"
      m="20px"
      gap="10px"
      color={"white"}
      // {...aosDelayedStyles}
    >
      
      <Link
        href="https://www.linkedin.com/in/nikhil-angolkar-62722a19b/"
        target={"_blank"}
      >
        LinkedIn
      </Link>

      <Link href="https://github.com/capitalN" target={"_blank"}>
        GitHub
      </Link>

      <Link
        href="https://drive.google.com/u/0/uc?id=1GtZiQIVtAi8ap6WSe38hKNHeB_c4T4eg&export=download"
        onClick={() =>
          window.open(
            "https://drive.google.com/file/d/1GtZiQIVtAi8ap6WSe38hKNHeB_c4T4eg/view",
            "_blank"
          )
        }
      >
        Resume
      </Link>

      <Link href="mailto:angolkarnikhil@gmail.com" target={"_blank"}>
        angolkarnikhil@gmail.com
      </Link>

      <Link href="tel: 7795334086" target={"_blank"}>
        +91 7795 3340 86
      </Link>
      
    </Flex>
  );
}
