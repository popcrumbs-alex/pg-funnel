import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import styled from "styled-components";
import ProductData from "../../../product/GoldBarsProductData";

const Container = styled.header`
  display: flex;
  width: 100%;
  justify-content: center;
  padding: 4rem 0;
  background-size: cover;
  background-position: center;
  background-repeat: norepeat;
`;
const Content = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Box = styled.div`
  display: flex;
  align-items: center;
  border: 3px dashed #222;
  padding: 2rem;
`;
const Column = styled.div`
  display: flex;
  flex-direction: column;
`;
const Heading = styled.h1`
  margin: 0 0 1rem 0;
  font-size: 2rem;
  @media screen and (max-width: 760px) {
    font-size: 1.5rem;
    line-height: 1.5;
  }
`;
const SubHeading = styled.h4`
  font-weight: 300;
  color: #666;
  line-height: 1.5;
  font-size: 1.2rem;
  max-width: 700px;
  margin: 0.2rem 0;
  & span {
    color: dodgerblue;
    font-weight: 700;
    text-transform: uppercase;
  }
  @media screen and (max-width: 760px) {
    font-size: 1rem;
    font-weight: 600;
    margin-top: 1rem;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  height: 400px;
  border-radius: 5px;
  width: 100%;
  & img {
    object-fit: cover;
    width: 100%;
  }
`;

const ImgBox = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
`;

const Text = styled.p`
  color: ${(props) => props.color};
`;
const Hero = () => {
  const { title } = ProductData;

  return (
    <Container>
      <Content>
        <Box>
          <StaticImage
            src={"../../../images/gold-bars.png"}
            alt={title}
            placeholder="blurred"
            objectFit="contain"
            imgStyle={{ width: "100%", borderRadius: "5px" }}
            width={400}
          />
          <Column>
            <Heading>This Special Offer Is NOT Available In Stores</Heading>
            <SubHeading>
              Only through this online promotion can you access this limited
              golden Donald J Trump commemorative bar at this tremendous value.
            </SubHeading>
          </Column>
        </Box>

        <ImageContainer style={{ marginTop: "1rem" }}>
          <StaticImage
            src="../../../images/trumps-gold-bar-3.png"
            alt="trump"
            placeholder="blurred"
            imgStyle={{ width: "100%", height: "100%" }}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              zIndex: 0,
              width: "100%",
              objectFit: "cover",
              maxHeight: 400,
            }}
          />
          <ImgBox>
            <Text
              color="#fff"
              style={{
                fontWeight: "700",
                position: "relative",
                zIndex: 1,
                fontSize: "2rem",
                maxWidth: "70%",
                lineHeight: 1.5,
              }}
            >
              Order Your Own Commemorative Gold Trump Bars, Before They Are Gone
              Forever
            </Text>
          </ImgBox>
        </ImageContainer>
      </Content>
    </Container>
  );
};

export default Hero;
