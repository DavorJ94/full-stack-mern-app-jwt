import React from "react";
import { RightWindowContainer, Spinner } from "../Components";
import spinner1 from "../images/spinner1.png";
import spinner2 from "../images/spinner2.png";
import spinner3 from "../images/spinner3.png";
import spinner4 from "../images/spinner4.png";
import spinner5 from "../images/spinner5.png";
export function SpinnerContainer() {
  return (
    <RightWindowContainer>
      <Spinner src={spinner1} height="40px" speed="1s" />
      <Spinner src={spinner2} height="60px" speed="1.5s" />
      <Spinner src={spinner3} height="80px" />
      <Spinner src={spinner4} speed="2500ms" />
      <Spinner src={spinner5} height="200px" speed="3s" />
    </RightWindowContainer>
  );
}
