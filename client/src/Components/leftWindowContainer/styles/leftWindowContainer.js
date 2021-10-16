import styled from "styled-components";

const FONT_FAMILY = `source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace`;

export const Container = styled.pre`
  display: flex;
  justify-content: center;
  align-content: center;
  width: 100%;
  color: #00FF41;
  font-family: ${FONT_FAMILY};
  background-color: rgba(255, 255, 255, 0.1);
  border: 2px solid #00FF41;
  padding: 2em 2em;
  font-size: ${({ fontSize }) => (fontSize ? fontSize : "16px")};
  font-weight: bold;
  text-shadow: 0px 1.5px 3px black, -1px 0px 2px black;
  white-space: pre-wrap;       /* Since CSS 2.1 */
    white-space: -moz-pre-wrap;  /* Mozilla, since 1999 */
    white-space: -pre-wrap;      /* Opera 4-6 */
    white-space: -o-pre-wrap;    /* Opera 7 */
    word-wrap: break-word;       /* Internet Explorer 5.5+ */
  max-width: 80%;
  text-align: left;
  }
`;
