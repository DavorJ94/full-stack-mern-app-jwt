import React from "react";
import { JumbotronContainer } from "../Containers/Jumbotron";
import { LeftWindowContainer, WholeWindowContainer } from "../Components";

export default function Buttons() {
  return (
    <>
      <WholeWindowContainer>
        <LeftWindowContainer>
          {`
<Jumbotron marginTop="2em">
  <Jumbotron.Image src={imgJumbotron} imgHeight="200px" alt="" />
  <Jumbotron.TextContainer>
    <Jumbotron.Title>This is title</Jumbotron.Title>
    <Jumbotron.Text boldText>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
      ad minim veniam, quis nostrud
    </Jumbotron.Text>
  </Jumbotron.TextContainer>
</Jumbotron>
<Jumbotron reverse backgroundColor="grey">
  <Jumbotron.Image src={imgJumbotron} imgHeight="150px" alt="" />
  <Jumbotron.TextContainer color="black" textWidth="70%">
    <Jumbotron.Title marginBtm="10px" uppercaseTitle>
      This is title
    </Jumbotron.Title>
    <Jumbotron.Text fontSize="12px" italicText>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
      ad minim veniam, quis nostrud
    </Jumbotron.Text>
  </Jumbotron.TextContainer>
</Jumbotron>
<Jumbotron column backgroundColor="orange" rowGap="0">
  <Jumbotron.Image src={imgJumbotron} imgHeight="150px" alt="" />
  <Jumbotron.TextContainer textWidth="80%">
    <Jumbotron.Title marginBtm="10px">This is title</Jumbotron.Title>
    <Jumbotron.Text fontSize="16px" uppercaseText>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
      ad minim veniam, quis nostrud
    </Jumbotron.Text>
  </Jumbotron.TextContainer>
</Jumbotron>
<Jumbotron
  reverseColumn
  backgroundColor="green"
  rowGap="2em"
  width="60%"
  marginBottom="2em"
>
  <Jumbotron.Image src={imgJumbotron} imgHeight="150px" alt="" />
  <Jumbotron.TextContainer textWidth="80%" fontFamily="Monospace, sans-serif">
    <Jumbotron.Title marginBtm="10px">This is title</Jumbotron.Title>
    <Jumbotron.Text fontSize="16px">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
      ad minim veniam, quis nostrud
    </Jumbotron.Text>
  </Jumbotron.TextContainer>
</Jumbotron>
        `}
        </LeftWindowContainer>
        <JumbotronContainer />
      </WholeWindowContainer>
    </>
  );
}
