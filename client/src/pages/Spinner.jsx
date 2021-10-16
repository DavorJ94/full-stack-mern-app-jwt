import React from "react";
import { SpinnerContainer } from "../Containers/Spinners";
import { LeftWindowContainer, WholeWindowContainer } from "../Components";

export default function Headers() {
  return (
    <>
      <WholeWindowContainer>
        <LeftWindowContainer fontSize="18px">
          {`
<Spinner src={spinner1} height="40px" speed="1s" />


<Spinner src={spinner2} height="60px" speed="1.5s" />


<Spinner src={spinner3} height="80px" />


<Spinner src={spinner4} speed="2500ms" />


<Spinner src={spinner5} height="200px" speed="3s" />
        `}
        </LeftWindowContainer>
        <SpinnerContainer />
      </WholeWindowContainer>
    </>
  );
}
