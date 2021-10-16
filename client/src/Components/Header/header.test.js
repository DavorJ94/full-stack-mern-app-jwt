import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import Header from ".";
import imgLogo from "../../images/logo.png";

describe("<Header />", () => {
  it("Renders without crashing", () => {
    render(<Header />);
  });

  it("Accepts Header links", () => {
    const { getByText } = render(
      <Header>
        <Header.Link>Home</Header.Link>
        <Header.Link>About</Header.Link>
        <Header.Link>Contact</Header.Link>
      </Header>
    );
    expect(getByText(/Home/));
    expect(getByText(/About/));
    expect(getByText(/Contact/));
  });

  it("Accepts background color, font size and height", () => {
    const { getByTestId } = render(
      <Header
        data-testid="header-testing"
        backgroundColor="orange"
        minHeight="4em"
        fontSize="12px"
      />
    );
    expect(getByTestId(/header-testing/)).toHaveStyle(
      `background-color: orange;`
    );
    expect(getByTestId(/header-testing/)).toHaveStyle(`min-height: 4em`);
    expect(getByTestId(/header-testing/)).toHaveStyle(`font-size: 12px`);
  });

  it("Does not have text content if none specified", () => {
    const { getByTestId } = render(<Header data-testid="one-test" />);
    expect(getByTestId("one-test")).not.toHaveTextContent();
  });

  it("Has text content", () => {
    const { getByText } = render(<Header>I am a Header</Header>);
    expect(getByText(/I am a Header/)).toHaveTextContent(/I am a Header/);
  });

  it("It is visible", () => {
    const { getByText } = render(<Header>I am a Header</Header>);
    expect(getByText(/I am a Header/)).toBeVisible();
  });

  it("It is valid", () => {
    const { getByTestId } = render(<Header data-testid="one-test" />);
    expect(getByTestId("one-test")).toBeValid();
  });

  it("It is visible", () => {
    const { getByTestId } = render(
      <Header>
        <Header.Logo data-testid="img-test" src={imgLogo} alt="logo" />
      </Header>
    );
    expect(getByTestId(/img-test/)).toBeVisible();
  });

  it("Accepts uppercase prop", () => {
    const { getByTestId } = render(
      <Header uppercase data-testid="uppercase-test">
        <Header.Link>Home</Header.Link>
        <Header.Link>About</Header.Link>
        <Header.Link>Contact</Header.Link>
      </Header>
    );
    expect(getByTestId(/uppercase-test/)).toHaveStyle(
      "text-transform: uppercase;"
    );
  });

  it("Accepts link text color prop", () => {
    const { getByTestId, getByText } = render(
      <Header uppercase>
        <Header.LinkContainer color="blue" data-testid="textColor-test">
          <Header.Link>Home</Header.Link>
          <Header.Link>About</Header.Link>
          <Header.Link>Contact</Header.Link>
        </Header.LinkContainer>
      </Header>
    );
    expect(getByTestId(/textColor-test/)).toHaveStyle("color: blue;");
    expect(getByText(/Home/));
    expect(getByText(/About/));
    expect(getByText(/Contact/));
  });
});
