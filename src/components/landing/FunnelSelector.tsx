import { Link, navigate } from "gatsby";
import React from "react";
import styled from "styled-components";

const IframeGrid = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin: 2rem 0;
`;
const PageContainer = styled.div`
  display: flex;
  height: 250px;
  border-radius: 5px;
  box-shadow: 0 0 0 1px #eee;
  align-items: center;
  padding: 10px;
  transition: all 0.3s ease-in-out;
  &:hover {
    cursor: pointer;
    box-shadow: 0 1px 60px #eee;
  }
`;
const Text = styled.p`
  font-weight: 700;
  color: #999;
`;
const LinkContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const FunnelSelector = ({ pages }: { pages: Array<any> }) => {
  const handleNavToPage = (path: string) => navigate(path);

  return (
    <IframeGrid>
      {pages.map((item, i) => {
        console.log("item", item);
        return (
          <PageContainer
            key={i}
            onClick={() => handleNavToPage(item.node.path)}
          >
            <LinkContainer>
              <Text> Path To Page:</Text>
              <Link
                to={item.node.path}
                style={{
                  fontWeight: "700",
                  fontSize: "2.4rem",
                  color: "dodgerblue",
                }}
              >
                {item.node.path}
              </Link>
            </LinkContainer>
          </PageContainer>
        );
      })}
    </IframeGrid>
  );
};

export default FunnelSelector;
