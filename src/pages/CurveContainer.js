import React from "react";
import styled from "styled-components";

const CurveContainer = () => {
  return (
    <div>
      <img src="/Images/shape.png" alt="" />

      <ImageDiv>
        <Image src="/Images/pdfdownload.png" alt="<3" />
      </ImageDiv>
    </div>
  );
};

export default CurveContainer;

const ImageDiv = styled.div`
  padding: 20px;
  bottom: 101px;
  position: absolute;
  left: 59%;
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
