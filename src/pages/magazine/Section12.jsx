import React from "react";
import styled from "styled-components";

const StyledImage = styled.img`
  flex: 1 1 0;
  height: 607px;
`;

const StyledImage01 = styled.img`
  flex: 1 1 0;
  height: 607px;
`;

const StyledFrame1 = styled.div`
  width: 823px;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 40px;
  display: inline-flex;
`;

const StyledSection12 = styled.div`
  align-self: stretch;
  height: 800px;
  max-width: 1000px;
  padding-left: 48px;
  padding-right: 48px;
  padding-top: 93px;
  padding-bottom: 93px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 88px;
  display: inline-flex;
`;

export const Section12 = () => {
  return (
    <StyledSection12>
      <StyledFrame1>
        <StyledImage src="https://placehold.co/391x607" alt="Image 1" />
        <StyledImage01 src="https://placehold.co/391x607" alt="Image 2" />
      </StyledFrame1>
    </StyledSection12>
  );
};
