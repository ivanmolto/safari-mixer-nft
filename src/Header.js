import styled from "styled-components";
import TitleLink from "./TitleLink";
import { useContext } from "react";
import { HeaderContext } from "./HeaderContext";

const LHSContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  padding: 10px;
  cursor: pointer;
  @media (max-width: 992px) {
    padding: 10px;
  }
`;

const RHSContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  padding: 15px;
  cursor: pointer;
`;

const AnimixerImg = styled.img`
  width: 150px;
  @media (max-width: 992px) {
    width: 100px;
  }
`;

const OpenseaLink = TitleLink(
  "50px",
  null,
  null,
  `
  background-image: url('/static/img/logomark-blue.png');
  box-shadow: 0 2px 12px 0 rgba(0,0,0,0.5);
  @media (max-width: 992px) {
    width: 50px;
  }
  @media (max-width: 600px) {
    width: 50px;
  }
  `
);

const PolygonscanLink = TitleLink(
  "50px",
  null,
  null,
  `
  background-image: url('/static/img/polygonscan.png');
  box-shadow: 0 2px 12px 0 rgba(0,0,0,0.5);
  @media (max-width: 992px) {
    width: 50px;
  }
  @media (max-width: 600px) {
    width: 50px;
  }
  `
);

const Header = () => {
  const [header, setHeader] = useContext(HeaderContext);
  return (
    header && (
      <div>
        <RHSContainer className="row">
          <div>
            <a
              href="https://testnets.opensea.io/collection/safarimixernft-utqeajd6wk"
              target="_blank"
              rel="noopener noreferrer"
            >
              <OpenseaLink className="left valign-wrapper" />
            </a>
            <a
              href="https://mumbai.polygonscan.com/address/0x95B4f2897B96e94Ce73aAF1298EaE00Bd01defCb"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PolygonscanLink className="left valign-wrapper" />
            </a>
          </div>
        </RHSContainer>
        <LHSContainer>
          <AnimixerImg
            src="/static/img/safari_mixer_logo_shadow_low.png"
            className="right valign-wrapper"
          />
        </LHSContainer>
      </div>
    )
  );
};
export default Header;
