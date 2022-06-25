import { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  overflow-y: auto;
  overflow-x: hidden;
  height: 100vh;
  position: relative;
`;

const ScrollMint = styled.div`
  overflow-y: scroll;
  height: 100%;

  @media (max-width: 992px) {
    height: calc(100% - 100px);
  }

  @media (max-width: 600px) {
    height: calc(100% - 40px);
  }
`;

const MintBoxContainer = styled.div`
  height: 75%;
  position: relative;
  top: 70px;

  @media (max-width: 992px) {
    margin-bottom: 0px;
    height: 85%;
  }

  @media (max-height: 600px) {
    margin-bottom: 0px;
    height: 80%;
  }
`;

const updateScroll = () => {
  if (this.scrollDiv) {
    this.scrollDiv.scrollTop = this.scrollDiv.scrollHeight;
  }
};

const MintBox = ({ mint }) => {
  const [heightCss, setHeightCss] = useState("100vh");

  // if () {
  //  setHeightCss = window.innerHeight + 'px';
  // }
  return (
    <Container
      innerRef={(ele) => (this.chatDiv = ele)}
      style={{ height: heightCss }}
      className={mint ? "container fadein" : "container fadeout"}
    >
      <MintBoxContainer className="row">
        <ScrollMint
          className="col s12"
          innerRef={(ele) => (this.scrollDiv = ele)}
        ></ScrollMint>
      </MintBoxContainer>
    </Container>
  );
};
export default MintBox;
