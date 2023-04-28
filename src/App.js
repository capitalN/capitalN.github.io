import "./App.css";
import Home from "./pages/Home";
import { Box, Center, Container } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

function App() {
  return (
    <Box bgColor={"purple.50"}>
      <Navbar />
      <Center
        minH={"100vh"}
        id="Home"
        style={{
          background:
            "linear-gradient(to bottom, rgba(92,42,229,1) 14%, rgba(92,42,229,0.51) 56%, rgba(246,41,14,0) 100%)",
        }}
        color="white"
      >
        <Home />
      </Center>
      <Container maxW={"1400px"}>
        <Box p="40px 0" id="About">
          <About />
        </Box>

        <Box p="40px 0" id="Skills">
          <Skills />
        </Box>

        <Box p="40px 0" id="Projects">
          <Projects />
        </Box>
      </Container>
      <Box id="Contact">
        <Contact />
      </Box>
    </Box>
  );
}

export default App;
