import React from "react";
import { render } from "@testing-library/react";
import Button from "./Button";

test("renders label inside button", () => {
  const { getByText } = render(<Button label="Test label" />);
  const linkElement = getByText(/Test label/i);
  expect(linkElement).toBeInTheDocument();
});
