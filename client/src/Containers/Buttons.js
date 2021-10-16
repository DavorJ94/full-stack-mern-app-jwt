import React from "react";
import { Button, RightWindowContainer } from "../Components";

export function ButtonContainer() {
  return (
    <RightWindowContainer>
      <Button colorTheme="green" fontWeight="700" transition="0.5s" size="0.9">
        I am green
      </Button>
      <Button>I am default</Button>
      <Button
        colorTheme="orange"
        fontWeight="700"
        uppercase
        boxShadow
        transition="0.5s"
        increaseOnHover="1.2"
        size="1.1"
        textColor="white"
      >
        I am orange
      </Button>
    </RightWindowContainer>
  );
}
