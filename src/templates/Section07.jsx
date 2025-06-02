import React from "react";
import styled from "styled-components";

const StyledImage = styled.img`
  align-self: stretch;
  height: 514px;
`;

const StyledNilssonText = styled.span`
  color: black;
  font-size: 16px;
  font-family: Poppins;
  font-weight: 400;
  line-height: 22.4px;
  letter-spacing: 0.32px;
  word-wrap: break-word;
`;

const StyledQuote = styled.span`
  color: black;
  font-size: 26px;
  font-family: Spectral;
  font-weight: 400;
  line-height: 28.5px;
  word-wrap: break-word;
`;

const StyledQuoteBody = styled.span`
  color: black;
  font-size: 16px;
  font-family: Spectral;
  font-weight: 400;
  line-height: 24px;
  word-wrap: break-word;
`;

const StyledImage01 = styled.img`
  align-self: stretch;
  height: 198px;
`;

const StyledImage02 = styled.img`
  align-self: stretch;
  height: 197px;
`;

const StyledImage03 = styled.img`
  align-self: stretch;
  height: 198px;
`;

const StyledFrame201 = styled.div`
  width: 386px;
  height: 773px;
  max-width: 1000px;
  position: absolute;
  left: 0px;
  top: 0px;
  display: inline-flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 10px;
`;

const StyledFrame202 = styled.div`
  width: 160px;
  position: absolute;
  left: 802px;
  top: 0px;
  display: inline-flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 20px;
`;

const StyledFrame2 = styled.div`
  width: 1004px;
  height: 696px;
  position: absolute;
  left: 48px;
  top: 77px;
`;

const StyledSection07 = styled.div`
  align-self: stretch;
  height: 800px;
  position: relative;
`;

export const Section07 = () => {
  return (
    <StyledSection07>
      <StyledFrame2>
        <StyledFrame201>
          <StyledImage src="https://placehold.co/386x514" />
          <StyledNilssonText>
            Nilsson wears a coat by WE11DONE, shoes by MAISON MARTIN MARGIELA,
            rings by J. HANNAH, an ear cuff by FARIS, vintage socks, her own
            earrings and the stylist’s own necklace.
          </StyledNilssonText>
        </StyledFrame201>
        <div
          style={{
            width: 306,
            height: 696,
            position: "absolute",
            left: 417,
            top: 0,
          }}
        >
          <StyledQuote>
            “If I’m in a dark place now, I don’t use partying to cope. I try to
            stay in the feelings and work it out.”
            <br />
          </StyledQuote>
          <StyledQuoteBody>
            <br />
            Nilsson, her friends and her husband all still party, and she
            doesn’t see that changing anytime soon, but now, she explains, it
            feels more intentional and respectful—both when it comes to others
            and herself. “If I’m in a dark place now, I don’t use partying to
            cope,” she says. “I try to stay in the feelings and work it out. And
            so now partying and doing wild things are things I do when I’m
            feeling good and I want to enhance the feeling and have a good
            time.”
          </StyledQuoteBody>
        </div>
        <StyledFrame202>
          <StyledImage01 src="https://placehold.co/160x198" />
          <StyledImage02 src="https://placehold.co/160x197" />
          <StyledImage03 src="https://placehold.co/160x198" />
        </StyledFrame202>
      </StyledFrame2>
    </StyledSection07>
  );
};
