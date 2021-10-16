import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import Jumbotron from ".";
import imgJumbotron from "../../images/jumbotron-img.png";

describe("<Jumbotron />", () => {
  it("Renders without crashing", () => {
    render(<Jumbotron />);
  });

  it("Accepts image, text and title", () => {
    const { getByText, getByTestId } = render(
      <Jumbotron>
        <Jumbotron.Image
          src={imgJumbotron}
          data-testid="img-test"
          imgHeight="200px"
          alt=""
        />
        <Jumbotron.TextContainer>
          <Jumbotron.Title>This is title</Jumbotron.Title>
          <Jumbotron.Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud
          </Jumbotron.Text>
        </Jumbotron.TextContainer>
      </Jumbotron>
    );
    expect(getByText(/This is title/));
    expect(getByText(/Lorem ipsum dolor sit amet/));
    expect(getByTestId(/img-test/)).toBeVisible();
    expect(getByTestId(/img-test/)).toHaveStyle("height: 200px");
  });

  it("Accepts background color, uppercase and font size", () => {
    const { getByTestId, getByText } = render(
      <Jumbotron data-testid="jumbotron-test" backgroundColor="grey">
        <Jumbotron.Image
          src={imgJumbotron}
          data-testid="img-test"
          imgHeight="200px"
          alt=""
        />
        <Jumbotron.TextContainer>
          <Jumbotron.Title uppercaseTitle>This is title</Jumbotron.Title>
          <Jumbotron.Text data-testid="text-test" fontSize="12px">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud
          </Jumbotron.Text>
        </Jumbotron.TextContainer>
      </Jumbotron>
    );
    expect(getByTestId(/jumbotron-test/)).toHaveStyle(
      `background-color: grey;`
    );
    expect(getByTestId(/text-test/)).toHaveStyle(`font-size: 12px`);
    expect(getByText(/This is title/)).toHaveStyle(`text-transform: uppercase`);
  });

  it("Does not have text content if none specified", () => {
    const { getByTestId } = render(<Jumbotron data-testid="one-test" />);
    expect(getByTestId("one-test")).not.toHaveTextContent();
  });

  it("Has text content", () => {
    const { getByText } = render(<Jumbotron>I am a Jumbotron</Jumbotron>);
    expect(getByText(/I am a Jumbotron/)).toHaveTextContent(/I am a Jumbotron/);
  });

  it("It is visible", () => {
    const { getByText } = render(<Jumbotron>I am a Jumbotron</Jumbotron>);
    expect(getByText(/I am a Jumbotron/)).toBeVisible();
  });

  it("It is valid", () => {
    const { getByTestId } = render(<Jumbotron data-testid="one-test" />);
    expect(getByTestId("one-test")).toBeValid();
  });

  it("Image is visible", () => {
    const { getByTestId } = render(
      <Jumbotron>
        <Jumbotron.Image
          src={imgJumbotron}
          data-testid="img-test"
          imgHeight="200px"
          alt=""
        />
      </Jumbotron>
    );
    expect(getByTestId(/img-test/)).toBeVisible();
  });

  it("Accepts font family prop", () => {
    const { getByTestId } = render(
      <Jumbotron.TextContainer width="60%">
        <Jumbotron.TextContainer
          textWidth="80%"
          fontFamily="Monospace, sans-serif"
          data-testid="text-container-test"
        >
          <Jumbotron.Title marginBtm="10px" data-testid="title-test">
            This is title
          </Jumbotron.Title>
          <Jumbotron.Text fontSize="16px" data-testid="text-test">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud
          </Jumbotron.Text>
        </Jumbotron.TextContainer>
      </Jumbotron.TextContainer>
    );
    expect(getByTestId(/text-container-test/)).toHaveStyle(
      "font-family: Monospace,sans-serif"
    );
    expect(getByTestId(/title-test/));
    expect(getByTestId(/text-test/));
  });
});
