import React from "react";
import { render, screen } from "@testing-library/react";
import Searchbar from "../Searchbar";

describe("Searchbar", () => {
  it("should render the Searchbar correctly", () => {
    render(<Searchbar onChange={() => {}} />);
    expect(screen.getByTestId("searchbar")).not.toBeNull();
    expect(screen.getByTestId("searchbar-input")).not.toBeNull();
    expect(screen.getByTestId("searchbar-icon")).not.toBeNull();
  });
});
