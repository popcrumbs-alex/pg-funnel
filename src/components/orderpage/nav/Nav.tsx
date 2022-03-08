import React from "react";
import styled from "styled-components";
import { useContext } from "react";
import { ThemeContext } from "../../../pages/gold-bars/order/OrderPage";
import { StaticImage } from "gatsby-plugin-image";
import { FC } from "react";
import { Theme } from "../../../constants/Colors";

const NavContainer = styled.nav`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 1rem 0;
  min-height: 4rem;
  background: ${(props) => props.color};
`;

const Content = styled.div`
  width: 70%;
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 760px) {
    width: 90%;
    flex-direction: column;
    align-items: center;
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 760px) {
    margin-top: 1rem;
  }
`;

const Heading = styled.h4`
  color: ${(props) => props.color};
  font-weight: 700;
  font-size: 1.3rem;
  margin: 0.2rem 0;
  @media screen and (max-width: 760px) {
    text-align: center;
    font-size: 0.9rem;
  }
`;

const Text = styled.p`
  color: ${(props) => props.color};
  font-size: 1rem;
  margin: 0.2rem 0;
  @media screen and (max-width: 760px) {
    text-align: center;
    font-size: 0.7rem;
  }
`;

const ImageContainer = styled.div`
  max-width: 150px;
  display: flex;
  justify-content: center;
`;

const Nav: FC = () => {
  const context = useContext<Theme>(ThemeContext);

  return (
    <NavContainer color={context.main}>
      <Content>
        <Column>
          <Heading
            color="#fff"
            style={{
              fontWeight: "300",
              fontSize: "1.5rem",
              textAlign: "center",
              fontStyle: "italic",
            }}
          >
            As of TODAY we still have golden commemorative Donald J Trump bars
            in stock. Upon placing your order below your item will ship within
            24 hours
          </Heading>
        </Column>
      </Content>
    </NavContainer>
  );
};

export default Nav;
