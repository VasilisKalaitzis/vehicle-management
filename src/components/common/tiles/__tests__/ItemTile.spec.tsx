import React from "react";
import { render, screen } from "@testing-library/react";
import ItemTile from "../ItemTile";

describe("ItemTile", () => {
  let actionButtonClickMock: jest.Mock;
  beforeEach(() => {
    actionButtonClickMock = jest.fn();
  });
  afterEach(() => {
    jest.clearAllMocks();
  });
  it("should render the component correctly", () => {
    const id = "myButton";
    const label = "buttonLabel";
    render(<ItemTile id={id} label={label} onClick={actionButtonClickMock} />);
    const button = screen.getByTestId("item-tile");
    expect(button).not.toBeNull();
    button.click();
    expect(actionButtonClickMock).toHaveBeenCalledTimes(1);
    expect(actionButtonClickMock).toHaveBeenCalledWith(id);
  });
});
