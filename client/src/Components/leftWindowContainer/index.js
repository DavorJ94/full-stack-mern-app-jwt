import React from "react";
import { Container } from "./styles/leftWindowContainer";

export default function leftWindowContainerFunction({
  children,
  ...restProps
}) {
  return <Container {...restProps}>{children}</Container>;
}
