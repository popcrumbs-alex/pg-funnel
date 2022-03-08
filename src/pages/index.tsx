import * as React from "react";
import styled, { createGlobalStyle, keyframes } from "styled-components";
import Colors from "../constants/Colors";
import { useEffect } from "react";
import HelmetWrapper from "../layout/HelmetWrapper";
import FunnelSelector from "../components/landing/FunnelSelector";
import { graphql, useStaticQuery } from "gatsby";

const fadein = keyframes`
0%{
  opacity:0;
}
100% {
  opacity:1;
}`;

const Main = styled.main`
  opacity: 0;
  animation: ${fadein} 1s linear forwards;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #fefefe;
`;
const Nav = styled.nav`
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: #5c80bc;
  min-height: 4rem;
  padding: 1rem 0;
`;
const NavContent = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const NavColumn = styled.div`
  display: flex;
  flex-direction: column;
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
`;

const Heading = styled.h1`
  margin: 0.5rem 0;
  color: #fff;
`;
const Text = styled.p`
  margin: 0.5rem 0;
  color: #fff;
`;

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

declare const window: any;

const IndexPage = () => {
  const siteData = useStaticQuery(graphql`
    query test {
      allSite {
        edges {
          node {
            id
          }
        }
      }
      allSitePage {
        edges {
          node {
            path
          }
        }
      }
    }
  `);

  console.log("site data!", siteData.allSitePage.edges);

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (window.localStorage.getItem("order_id")) {
        window.localStorage.removeItem("order_id");
      }
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      //integrate this everwhere instead
      if (window.fbq) {
        console.log(window.fbq);
        window.fbq("track", "PageView");
      }
    }
  }, []);

  return (
    <ThemeContext.Provider value={Colors}>
      <Globalstyle />
      <HelmetWrapper pageTitle="Presidential Greats" efScript="" />
      <Main>
        <Nav>
          <NavContent>
            <NavColumn>
              <Heading>Welcome to Presidential Greats</Heading>
              <Text>Select a page to get started</Text>
            </NavColumn>
          </NavContent>
        </Nav>
        <Content>
          <FunnelSelector pages={siteData.allSitePage.edges} />
        </Content>
      </Main>
    </ThemeContext.Provider>
  );
};

export default IndexPage;
