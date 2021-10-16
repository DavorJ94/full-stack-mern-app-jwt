import styled from "styled-components";

export const Jumbotron = styled.div`
  display: flex;
  justify-content: space-around;
  column-gap: 2em;
  width: ${({ width }) => (width ? width : "90%")};
  height: ${({ height }) => (height ? height : "auto")};
  max-width: 1000px;
  align-items: center;
  background: ${({ backgroundColor }) =>
    backgroundColor ? backgroundColor : "black"};
  padding: 1em 1em;
  flex-direction: ${({ reverse, column, reverseColumn }) =>
    reverse
      ? "row-reverse"
      : column
      ? "column"
      : reverseColumn
      ? "column-reverse"
      : ""};
  row-gap: ${({ rowGap }) => (rowGap ? rowGap : "1em")};
  margin-bottom: ${({ marginBottom }) => (marginBottom ? marginBottom : "0")};
  margin-top: ${({ marginTop }) => (marginTop ? marginTop : "0")};
  @media (max-width: 600px) {
    flex-direction: column;
    row-gap: ${({ rowGap }) => (rowGap ? rowGap : "1em")};
  }
`;

export const Image = styled.img`
  height: ${({ imgHeight }) => (imgHeight ? imgHeight : "250px")};
`;

export const Title = styled.h1`
  margin-bottom: ${({ marginBtm }) => (marginBtm ? marginBtm : 0)};
  font-size: ${({ headerFontSize }) =>
    headerFontSize ? headerFontSize : "30px"};
  text-transform: ${({ uppercaseTitle }) =>
    uppercaseTitle ? "uppercase" : ""};
  @media (max-width: 600px) {
    margin-bottom: 10px;
  }
`;

export const Text = styled.p`
  font-size: ${({ fontSize }) => (fontSize ? fontSize : "14px")};
  text-transform: ${({ uppercaseText }) => (uppercaseText ? "uppercase" : "")};
  font-style: ${({ italicText }) => (italicText ? "italic" : "")};
  margin: 0;
  font-weight: ${({ boldText }) => (boldText ? "700" : "")};
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-family: ${({ fontFamily }) => (fontFamily ? fontFamily : "default")};
  color: ${({ color }) => (color ? color : "white")};
  width: ${({ textWidth }) => (textWidth ? textWidth : "100%")};
`;
