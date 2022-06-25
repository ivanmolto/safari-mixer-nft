import { useState } from "react";
import { HeaderContext } from "./HeaderContext";
import styled from "styled-components";
import { ThemeProvider } from "@mui/material/styles";

import theme from "./theme";
import Header from "./Header";
import Footer from "./Footer";
import Background from "./Background";
import Home from "./Home";

const Container = styled.div`
  height: 100 vh;
  overflow-y: hidden;
`;

const App = () => {
  const [header, setHeader] = useState();
  return (
    <ThemeProvider theme={theme}>
      <HeaderContext.Provider value={[header, setHeader]}>
        <Background />
        <Container>
          <Home />
        </Container>
        <Header />
        <Footer />
      </HeaderContext.Provider>
    </ThemeProvider>
  );
};

export default App;
