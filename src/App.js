import React from "react";
import { ThemeProvider } from "styled-components";
import ArtistCard from "./components/ArtistCard";
import { Container } from "./components/styles/Container.styled";
import Header from "./components/Header";
import GlobalStyles from "./components/styles/Global.styled";

const theme = {
  colors: {
    header: "#0F0F0F",
    text: "#ffffff",
    body: "#000000",
  },
};

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Container>
          <Header />
          <ArtistCard />
        </Container>
      </>
    </ThemeProvider>
  );
};

export default App;
