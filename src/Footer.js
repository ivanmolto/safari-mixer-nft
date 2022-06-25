import styled from "styled-components";

const FooterContainer = styled.div`
  position: relative;

  @media (max-width: 600px) {
    height: 66px;
    background: white;
  }
`;

const RHSContainer = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  padding: 24px;
  color: rgba(0, 0, 0, 1);

  @media (max-width: 600px) {
    width: 100%;
  }
`;

const LHSContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: , 0;
  padding: 20px;
  color: rgba(0, 0, 0, 1);
  @media (max-with: 600px) {
    display: none;
  }
`;

const linkCss = `
  font-family: Nanum Gothic;
  &,
  &:hover,
  &:active,
  &:visited {
    color: rgba(0, 0, 0, 1);
    text-decoration: none;
  }
  &:hover {
    text-decoration: underline;
  }
`;

const HackathonLink = styled.a`
  ${linkCss} font-size: 10px;
  position: relative;
  bottom: -30px;
  right: 120px;

  @media (max-width: 600px) {
    left: 0px;
    text-align: left;
  }
`;

const IvanMoltoLink = styled.a`
  ${linkCss} display: block;
  font-size: 9px;
  text-align: right;
`;

const PolygonLink = styled.a`
  ${linkCss} display: block;
`;

const PolygonImg = styled.img`
  width: 200px;
  display: block;
  margin-left: auto;
`;
const IvanMoltoImg = styled.img`
  width: 80px;
  display: block;
  margin-left: auto;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <LHSContainer>
        <PolygonLink
          href="https://polygon.technology"
          target="_blank"
          rel="noopener noreferrer"
        >
          <PolygonImg
            src="/static/img/colored-black.png"
            alt="Powered by Polygon"
          />
        </PolygonLink>
      </LHSContainer>
      <RHSContainer>
        <HackathonLink
          href="https://www.encode.club/polygon-hackathon"
          target="_blank"
          rel="noopener noreferrer"
        >
          POLYGON HACKATHON BY ENCODE
        </HackathonLink>
        <IvanMoltoLink
          href="https://twitter.com/ivanmolto"
          target="_blank"
          rel="noopener noreferrer"
        >
          MADE BY
          <IvanMoltoImg src="/static/img/ivanmolto.png" alt="Ivan Molto" />
        </IvanMoltoLink>
      </RHSContainer>
    </FooterContainer>
  );
};
export default Footer;
