import React from "react";
import styled from "styled-components";

const StyledSection03 = styled.div`
  width: 1100px;
  height: 800px;
  max-width: 1000px;
  padding: 50px 48px 120px 48px;
  display: inline-flex;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 43px;
`;

const StyledFrame1 = styled.div`
  width: 435px;
  display: inline-flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 20px;
`;

const StyledFrame101 = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 5px;
`;

const StyledSubtitle = styled.div`
  align-self: stretch;
  color: black;
  font-size: 11px;
  font-family: "Poppins", sans-serif;
  font-weight: 300;
  line-height: 15.4px;
  letter-spacing: 1.1px;
  word-wrap: break-word;
`;

const StyledTitle = styled.div`
  align-self: stretch;
  color: black;
  font-size: 90px;
  font-family: "Spectral", serif;
  font-weight: 300;
  line-height: 97.2px;
  letter-spacing: 1.17px;
  word-wrap: break-word;
`;

const StyledParagraph = styled.div`
  align-self: stretch;
  color: black;
  font-size: 17px;
  font-family: "Brygada 1918", serif;
  font-style: italic;
  font-weight: 400;
  line-height: 30px;
  word-wrap: break-word;
`;

const StyledImage = styled.img`
  width: 521px;
  height: 688px;
`;

export const Section03 = () => {
  return (
    <StyledSection03>
      <StyledFrame1>
        <StyledFrame101>
          <StyledSubtitle>도착과 첫인상</StyledSubtitle>
          <StyledTitle>
            Ruben <br />
            Östlund
          </StyledTitle>
        </StyledFrame101>
        <StyledParagraph>
          둘째 날부터는 동선 중심의 일정
          <br />
          아침 9시에 기상 → 근처 빵집에서 식사 → 산책하며 박물관 혹은 미술관
          방문 → 오후 3시경 커피 타임 → 저녁 전 자전거 대여 후 운하 지역 산책.
          이 흐름을 매일 반복했다.
          <br />
          <br />
          미술관은 루이지애나 현대미술관이 가장 기억에 남는다. 전시는 절제된
          구성으로 되어 있었고, 관람객의 동선 설계가 매우 정돈되어 있었다.
          교외에 위치해 있었지만 기차 이동이 간편했다.
        </StyledParagraph>
      </StyledFrame1>
      <StyledImage src="https://placehold.co/521x688" alt="Ruben Östlund" />
    </StyledSection03>
  );
};
