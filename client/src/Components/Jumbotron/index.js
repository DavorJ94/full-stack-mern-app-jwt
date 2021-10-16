import React from "react";
import {
  Jumbotron,
  Image,
  Title,
  Text,
  TextContainer,
} from "./styles/jumbotron";

export default function JumbotronComponent({ children, ...restProps }) {
  return <Jumbotron {...restProps}>{children}</Jumbotron>;
}

JumbotronComponent.Image = function JumbotronImage({ ...restProps }) {
  return <Image {...restProps}></Image>;
};

JumbotronComponent.TextContainer = function JumbotronTextContainer({
  children,
  ...restProps
}) {
  return <TextContainer {...restProps}>{children}</TextContainer>;
};

JumbotronComponent.Title = function JumbotronTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

JumbotronComponent.Text = function JumbotronText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};
