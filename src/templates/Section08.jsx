import React from "react";
import styled from "styled-components";

const StyledSection08 = styled.div`
  align-self: stretch;
  height: 800px;
  max-width: 1000px;
  padding: 50px 48px 95px 48px;
  display: inline-flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 48px;
`;

const StyledTitle = styled.div`
  align-self: stretch;
  text-align: center;
  color: black;
  font-size: 18px;
  font-family: "Spectral", serif;
  font-weight: 400;
  line-height: 28px;
`;

const StyledGrid = styled.div`
  align-self: stretch;
  display: inline-flex;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 20px;
`;

const StoryCard = styled.div`
  flex: 1 1 0;
  display: inline-flex;
  flex-direction: column;
  gap: 12px;
`;

const StoryImage = styled.img`
  align-self: stretch;
  height: ${({ height }) => height || "301px"};
`;

const StoryMeta = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-self: stretch;
`;

const MetaCategory = styled.div`
  color: black;
  font-size: 11px;
  font-family: "Poppins", sans-serif;
  font-weight: 300;
  line-height: 15.4px;
  letter-spacing: 1.1px;
`;

const MetaTextGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-self: stretch;
`;

const MetaTitle = styled.div`
  color: black;
  font-size: 21px;
  font-family: "Spectral", serif;
  font-weight: 400;
  line-height: 27px;
`;

const MetaDescription = styled.div`
  color: #4d4d4d;
  font-size: 16px;
  font-family: "Spectral", serif;
  font-weight: 400;
  line-height: 24px;
`;

export const Section08 = () => {
  return (
    <StyledSection08>
      <StyledTitle>RELATED STORIES</StyledTitle>
      <StyledGrid>
        <StoryCard>
          <StoryImage src="https://placehold.co/151x301" />
          <StoryMeta>
            <MetaCategory>ARTS & CULTURE, ISSUE 49</MetaCategory>
            <MetaTextGroup>
              <MetaTitle>Karin Mamma Andersson</MetaTitle>
              <MetaDescription>
                Inside the moody, mysterious world of Sweden’s preeminent
                painter.
              </MetaDescription>
            </MetaTextGroup>
          </StoryMeta>
        </StoryCard>
        <StoryCard>
          <StoryImage src="https://placehold.co/151x301" />
          <StoryMeta>
            <MetaCategory>FILMS, ISSUE 49</MetaCategory>
            <MetaTextGroup>
              <MetaTitle>Ruben Östlund</MetaTitle>
              <MetaDescription>
                Crude, contrary—and killing it: Meet the auteur of awkwardness.
              </MetaDescription>
            </MetaTextGroup>
          </StoryMeta>
        </StoryCard>
        <StoryCard>
          <StoryImage height="220px" src="https://placehold.co/151x220" />
          <StoryMeta>
            <MetaCategory>MUSIC, ISSUE 49</MetaCategory>
            <MetaTextGroup>
              <MetaTitle>Tove Lo</MetaTitle>
              <MetaDescription>
                The pop star reflects on the big feelings behind her biggest
                hits.
              </MetaDescription>
            </MetaTextGroup>
          </StoryMeta>
        </StoryCard>
        <StoryCard>
          <StoryImage src="https://placehold.co/151x301" />
          <StoryMeta>
            <MetaCategory>FASHION, ISSUE 22</MetaCategory>
            <MetaTextGroup>
              <MetaTitle>Day in the Life: Stine Goya</MetaTitle>
              <MetaDescription>
                Stine Goya has been a quiet presence in the fashion world for
                more than a decade—first as a model, then as an editor, now as a
                designer.
              </MetaDescription>
            </MetaTextGroup>
          </StoryMeta>
        </StoryCard>
        <StoryCard>
          <StoryImage src="https://placehold.co/151x301" />
          <StoryMeta>
            <MetaCategory>ARTS & CULTURE, ISSUE 49</MetaCategory>
            <MetaTextGroup>
              <MetaTitle>Amalie Smith</MetaTitle>
              <MetaDescription>
                The Danish arts writer finding clarity between the lines.
              </MetaDescription>
            </MetaTextGroup>
          </StoryMeta>
        </StoryCard>
        <StoryCard>
          <StoryImage height="151px" src="https://placehold.co/151x151" />
          <StoryMeta>
            <MetaCategory>FILMS, ISSUE 49</MetaCategory>
            <MetaTextGroup>
              <MetaTitle>Fares Fares</MetaTitle>
              <MetaDescription>
                After almost 25 years, the master actor steps behind the camera.
              </MetaDescription>
            </MetaTextGroup>
          </StoryMeta>
        </StoryCard>
      </StyledGrid>
    </StyledSection08>
  );
};
