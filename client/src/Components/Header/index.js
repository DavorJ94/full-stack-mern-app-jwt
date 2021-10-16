import React from "react";
import { Background, Logo, Link, LinkContainer } from "./styles/header";

export default function Header({ children, ...restProps }) {
  return <Background {...restProps}>{children}</Background>;
}

Header.Logo = function HeaderLogo({ ...restProps }) {
  return <Logo {...restProps} />;
};

Header.LinkContainer = function HeaderLinkContainer({
  children,
  ...restProps
}) {
  return <LinkContainer {...restProps}>{children}</LinkContainer>;
};

Header.Link = function HeaderLink({ children, ...restProps }) {
  return <Link {...restProps}>{children}</Link>;
};
