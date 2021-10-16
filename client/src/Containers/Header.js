import React from "react";
import { Header, RightWindowContainer } from "../Components";
import imgLogo from "../images/logo.png";

export function HeaderContainer() {
  return (
    <RightWindowContainer>
      <Header>
        <Header.Logo src={imgLogo} alt="logo" />
        <Header.LinkContainer>
          <Header.Link>Home</Header.Link>
          <Header.Link>About</Header.Link>
          <Header.Link>Contact</Header.Link>
        </Header.LinkContainer>
      </Header>
      <Header>
        <Header.LinkContainer>
          <Header.Link>Home</Header.Link>
          <Header.Link>About</Header.Link>
          <Header.Link>Contact</Header.Link>
        </Header.LinkContainer>
        <Header.Logo src={imgLogo} alt="logo" />
      </Header>
      <Header uppercase backgroundColor="orange" center>
        <Header.Logo src={imgLogo} alt="logo" />
      </Header>
      <Header uppercase backgroundColor="pink" center minHeight="4em">
        <Header.LinkContainer color="blue">
          <Header.Link bkgOnHover="blue" textColorHover="orange">
            Home
          </Header.Link>
          <Header.Link bkgOnHover="green" textColorHover="red">
            About
          </Header.Link>
          <Header.Link bkgOnHover="red" textColorHover="blue">
            Contact
          </Header.Link>
        </Header.LinkContainer>
      </Header>
    </RightWindowContainer>
  );
}
