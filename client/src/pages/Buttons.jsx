import React from "react";
import { ButtonContainer } from "../Containers/Buttons";
import { LeftWindowContainer, WholeWindowContainer } from "../Components";

export default function Buttons() {
  return (
    <>
      <WholeWindowContainer>
        <LeftWindowContainer>
          {`
<Button colorTheme="green" fontWeight="700" transition="0.5s" size="0.9">I am green</Button>



<Button>I am default</Button>



<Button colorTheme="orange" fontWeight="700" uppercase boxShadow transition="0.5s" increaseOnHover="1.2" size="1.1" textColor="white">I am orange</Button>
        `}
        </LeftWindowContainer>
        <ButtonContainer />
      </WholeWindowContainer>
    </>
  );
}
