import React from "react";
import styled from "styled-components";

const SectionWrapper = styled.div`
  align-self: stretch;
  height: 800px;
  max-width: 1000px;
  position: relative;
`;

const Heading = styled.div`
  position: absolute;
  left: 53px;
  top: 136px;
  width: 948px;
  color: black;
  font-size: 50px;
  font-family: "Brygada 1918", serif;
  font-style: italic;
  font-weight: 400;
  line-height: 30px;
`;

const Subheading = styled.div`
  position: absolute;
  left: 53px;
  top: 188px;
  width: 948px;
  color: black;
  font-size: 17px;
  font-family: "Brygada 1918", serif;
  font-style: italic;
  font-weight: 400;
  line-height: 30px;
`;

const BodyText = styled.div`
  position: absolute;
  left: 20px;
  top: 548px;
  width: 1014px;
  text-align: right;
  color: black;
  font-size: 17px;
  font-family: "Brygada 1918", serif;
  font-style: italic;
  font-weight: 400;
  line-height: 30px;
`;

export const Section13 = () => {
  return (
    <SectionWrapper>
      <Heading>Tak for nu, København.</Heading>
      <Subheading>
        No dramatic moments. Just quiet impressions that stay.
      </Subheading>
      <BodyText>
        마지막 날은 특별한 계획 없이 시내를 계속 걸었다.
        <br />
        오후에는 인어공주 동상 쪽으로 이동해 공원 벤치에서 책을 읽었다. <br />
        바람은 차가웠고, 햇빛은 오후 4시부터 빠르게 기울기 시작했다.
        <br />
        코펜하겐은 ‘정리된 일상’에 가까운 도시였다.
        <br />
        관광지의 강한 자극보다, 질서 있는 삶의 흐름이 더 기억에 남는다.
        <br />그 자체로도 충분히 여행의 의미를 만들었다.
      </BodyText>
    </SectionWrapper>
  );
};
