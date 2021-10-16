import React from "react";
import { Container } from "./styles/wholeWindowContainer";

export default function wholeWindowContainerFunction({
  children,
  ...restProps
}) {
  return <Container {...restProps}>{children}</Container>;
}
