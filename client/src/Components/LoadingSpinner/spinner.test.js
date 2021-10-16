import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import Spinner from ".";
import spinner1 from "../../images/spinner1.png";

describe("<Spinner />", () => {
  it("Renders without crashing", () => {
    render(<Spinner />);
  });

  it("Accepts spinner image", () => {
    const { getByTestId } = render(
      <Spinner data-testid="spinner-test" src={spinner1} alt="spinner" />
    );
    expect(getByTestId(/spinner-test/)).toBeVisible();
    expect(getByTestId(/spinner-test/)).toHaveAttribute("src", spinner1);
    expect(getByTestId(/spinner-test/)).toHaveAttribute("alt", "spinner");
  });

  it("Accepts rotation speed and height", () => {
    const { getByTestId } = render(
      <Spinner
        data-testid="spinner-test"
        src={spinner1}
        alt="spinner"
        speed="1s"
        height="40px"
      />
    );
    expect(getByTestId(/spinner-test/)).toBeVisible();
    expect(getByTestId(/spinner-test/)).toHaveStyle(
      "animation: spin 1s linear infinite;"
    );
    expect(getByTestId(/spinner-test/)).toHaveStyle("height: 40px;");
  });

  it("Accepts different rotation speed and height", () => {
    const { getByTestId } = render(
      <Spinner
        data-testid="spinner-test"
        src={spinner1}
        alt="spinner"
        speed="2s"
        height="60px"
      />
    );
    expect(getByTestId(/spinner-test/)).toBeVisible();
    expect(getByTestId(/spinner-test/)).toHaveStyle(
      "animation: spin 2s linear infinite;"
    );
    expect(getByTestId(/spinner-test/)).toHaveStyle("height: 60px;");
  });

  it("Does not have text content", () => {
    const { getByTestId } = render(
      <Spinner
        data-testid="spinner-test"
        src={spinner1}
        alt="spinner"
        speed="2s"
        height="60px"
      />
    );
    expect(getByTestId("spinner-test")).not.toHaveTextContent();
  });

  it("It is valid", () => {
    const { getByTestId } = render(
      <Spinner
        data-testid="spinner-test"
        src={spinner1}
        alt="spinner"
        speed="2s"
        height="60px"
      />
    );
    expect(getByTestId("spinner-test")).toBeValid();
  });
});
