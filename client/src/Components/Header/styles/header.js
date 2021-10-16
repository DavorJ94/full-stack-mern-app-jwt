import styled from "styled-components";

const FONT_FAMILY = `source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace`;

export const Background = styled.div`
  display: flex;
  color: ${({ color }) => (color ? color : "black")};
  background-color: ${({ backgroundColor }) =>
    backgroundColor ? backgroundColor : "grey"};
  width: 100%;
  justify-content: ${({ center }) => (center ? "center" : "space-between")};
  align-items: center;
  font-family: ${FONT_FAMILY};
  text-transform: ${({ uppercase }) => (uppercase ? "uppercase" : "")};
  min-height: ${({ minHeight }) => (minHeight ? minHeight : "3em")};
  font-size: ${({ fontSize }) => (fontSize ? fontSize : "")};
  margin-left: 2em;

  & > div {
    align-items: stretch;
  }

  @media (max-width: 800px) {
    margin-left: 0;
    font-size: 0.7em;
  }
`;

export const Logo = styled.img`
  width: 120px;
  cursor: pointer;
  padding: 0 1em;

  @media (max-width: 800px) {
    width: 80px;
  }
`;

export const LinkContainer = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  color: ${({ color }) => (color ? color : "white")};
  min-height: ${({ minHeight }) => (minHeight ? minHeight : "inherit")};
`;

export const Link = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 0 1em;
  font-weight: bold;
  letter-spacing: 1px;

  &:hover {
    background-color: ${({ bkgOnHover }) =>
      bkgOnHover ? bkgOnHover : "yellow"};
    color: ${({ textColorHover }) =>
      textColorHover ? textColorHover : "black"};
  }
`;
