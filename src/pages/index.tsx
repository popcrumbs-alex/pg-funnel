import * as React from "react";
import styled, { createGlobalStyle } from "styled-components";
import Colors from "../constants/Colors";
import { useEffect } from "react";
import Lander from "../components/landing-one/Lander";
import Footer from "../components/footer.tsx/Footer";
import HelmetWrapper from "./layout/HelmetWrapper";
import BodyTags from "./layout/BodyTags";

const Main = styled.main``;

export const ThemeContext = React.createContext(Colors);

const Globalstyle = createGlobalStyle`
    @import url("https://use.typekit.net/wzi3sml.css");
    html, body {
    font-family: new-order,sans-serif;
    font-weight: 400;
    font-style: normal; 
    font-size:16px;
    margin:0;
    padding:0;
    box-sizing:border-box;
}`;

const IndexPage = () => {
  useEffect(() => {
    if (window.localStorage.getItem("order_id")) {
      window.localStorage.removeItem("order_id");
    }
  }, []);

  return (
    <ThemeContext.Provider value={Colors}>
      <Globalstyle />
      <HelmetWrapper pageTitle="Gold 2CT Studs" efScript="" />
      <Main>
        <Lander />
      </Main>
      <Footer />
      <BodyTags />
    </ThemeContext.Provider>
  );
};

export default IndexPage;
