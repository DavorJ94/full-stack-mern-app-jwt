import styled from "styled-components";

const FONT_FAMILY = `source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace`;

export const Button = styled.div`
  display: inline-block;
  cursor: pointer;
  background-color: transparent;
  transition: all ${({ transition }) => (transition ? transition : "200ms")}
    ease;
  padding: ${({ size }) =>
    size ? size * 1 + "em " + size * 3 + "em" : "1em 3em"};
  border: 2px solid ${({ colorTheme }) => (colorTheme ? colorTheme : "white")};
  color: ${({ textColor }) => (textColor ? textColor : "white")};
  font-family: ${FONT_FAMILY};
  font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : "bold")};
  font-size: ${({ size }) => (size ? size + "rem" : "16px")};
  text-transform: ${({ uppercase }) => (uppercase ? "uppercase" : "")};
  box-shadow: ${({ boxShadow, colorTheme }) =>
    boxShadow && "2px 2px 40px " + (colorTheme ? colorTheme : "white")};

  &:hover {
    background-color: ${({ colorTheme }) =>
      colorTheme ? colorTheme : "white"};
    transform: scale(
      ${({ increaseOnHover }) => increaseOnHover && increaseOnHover}
    );
    color: ${({ textColor }) => (textColor ? textColor : "black")};
  }
`;
