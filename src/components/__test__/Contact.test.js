import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact us page test cases", () => {
  test("should load contact us component", () => {
    render(<Contact />);

    const heading = screen.getByRole("heading");
    // Assertion
    expect(heading).toBeInTheDocument();
  });

  test("should load button inside contact us component", () => {
    render(<Contact />);

    const button = screen.getByRole("button");
    // Assertion
    expect(button).toBeInTheDocument();
  });
  it("should load input name in contact us component", () => {
    render(<Contact />);

    const inputName = screen.getByPlaceholderText("name");
    // Assertion
    expect(inputName).toBeInTheDocument();
  });
  test("should load 2 input boxes in contact us component", () => {
    render(<Contact />);

    const inputBoxes = screen.getAllByRole("textbox"); // when there are multiple items we use the getAll
    // Assertion
    expect(inputBoxes.length).toBe(2);
  });
  // it and test both are same 
});
