import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Background from "../images/background.jpg";

function Logo() {
  const [visible, setVisible] = useState(true);

  setTimeout(() => {
    setVisible(false);
  }, 6000);
  setTimeout(() => {
    setVisible(true);
  }, 13000);
  setTimeout(() => {
    if (document.getElementById("cent_globe"))
      document.getElementById("cent_globe").src = "/Images/uu.png";
  }, 11000);
  setTimeout(() => {
    if (document.getElementById("logo_text"))
      document.getElementById("logo_text").style.visibility = "visible";
  }, 15000);
  return (
    <Container style={{ backgroundImage: `url(${Background})` }}>
      <ImgContainer>
        <img
          id="globe1"
          className="globes"
          style={{ visibility: visible ? "hidden" : "visible" }}
          src={"/Images/redglobe.png"}
        />
        <img
          id="globe2"
          className="globes"
          style={{ visibility: visible ? "hidden" : "visible" }}
          src={"/Images/1.png"}
        />
        <img
          id="globe3"
          className="globes"
          style={{ visibility: visible ? "hidden" : "visible" }}
          src={"/Images/2.png"}
        />
        <img
          id="globe4"
          className="globes"
          style={{ visibility: visible ? "hidden" : "visible" }}
          src={"/Images/3.png"}
        />
        <img
          id="globe5"
          className="globes"
          style={{ visibility: visible ? "hidden" : "visible" }}
          src={"/Images/5.png"}
        />
        <img
          id="cent_globe"
          className="img_logo"
          style={{ width: "300px" }}
          src={"/Images/globe.gif"}
        />
        <img
          id="logo_text"
          style={{ width: "700px", visibility: "hidden", marginBottom: "40px" }}
          src={"/Images/logoText.png"}
        />
      </ImgContainer>
    </Container>
  );
}

export default Logo;

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
`;
const ImgContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
`;
