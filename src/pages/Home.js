import React, { useEffect } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import RightContainer from "./RightContainer";
import LeftContainer from "./LeftContainer";
import localStorageHelper from "../helpers/localstorage";

function Home() {
  let history = useHistory();

  useEffect(() => {
    if (localStorageHelper.getData("auth") == true) {
      history.push("/");
    }
  }, []);

  return (
    <div className="d-flex main_container">
      <CurveWrap>
        <div className="home_sticky_text">
          VIRADVISWAKARMA EDUCATIONAL & INDUSTRIAL DEVELOPMENT CHARITABLE
          FOUNDATION
        </div>
        <LWrap>
          <Wrap>
            <LeftContainer />
          </Wrap>
          <ImageDiv>
            <a href="/Images/Niyamavali.pdf" download="niyamavali">
              <Image src="/Images/pdfdownload.gif" alt="<3" />
            </a>
          </ImageDiv>
        </LWrap>
      </CurveWrap>
      <WrapR>
        <RightContainer />
      </WrapR>
    </div>
  );
}

export default Home;

const CurveWrap = styled.div`
  border-right: 32px solid white;
  border-radius: 0px 32px 1040px 0px;

  min-width: 70%;
  @media (max-width: 850px) {
    display: none;
  }
`;
const LWrap = styled.div`
  min-width: 50%;
  margin-top: 70px;
  display: flex;
`;
const ImageDiv = styled.div`
  padding: 20px;
  bottom: 101px;
  position: absolute;
  left: 54%;
  border: 10px solid #b9baba;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;
`;
const Image = styled.img`
  width: 50px;
  height: 50px;
`;
const Wrap = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const WrapR = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const SigninButton = styled.button`
  color: white;
  background: blue;
  border: 0;
  width: 120px;
  border-radius: 10px;
`;
const SignupButton = styled.button`
  color: white;
  background: orange;
  border: 0;
  width: 120px;
  border-radius: 10px;
`;
