import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { fireEvent, render } from "@testing-library/react";
import Button from ".";

describe("<Button />", () => {
  it("Renders without crashing", () => {
    render(<Button />);
  });

  it("Accepts button theme", () => {
    const { getByText } = render(
      <Button colorTheme="purple">I am a button</Button>
    );
    expect(getByText(/I am a button/)).toHaveStyle(`border: 2px solid purple;`);
  });

  it("Accepts theme, text color, and font weight props", () => {
    const { getByText } = render(
      <Button colorTheme="purple" textColor="white" fontWeight="700">
        I am a button
      </Button>
    );
    expect(getByText(/I am a button/)).toHaveStyle(`border: 2px solid purple;`);
    expect(getByText(/I am a button/)).toHaveStyle(`font-weight: 700`);
    expect(getByText(/I am a button/)).toHaveStyle(`color: white`);
  });

  it("Has text content", () => {
    const { getByText } = render(<Button>I am a button</Button>);
    expect(getByText(/I am a button/)).toHaveTextContent(/I am a button/);
  });

  it("Does not have text content if none specified", () => {
    const { getByTestId } = render(<Button data-testid="one-test" />);
    expect(getByTestId("one-test")).not.toHaveTextContent();
  });

  it("It is visible", () => {
    const { getByText } = render(<Button>I am a button</Button>);
    expect(getByText(/I am a button/)).toBeVisible();
  });

  it("It is valid", () => {
    const { getByTestId } = render(<Button data-testid="one-test" />);
    expect(getByTestId("one-test")).toBeValid();
  });
});
