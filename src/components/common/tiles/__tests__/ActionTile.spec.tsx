import React from "react";
import { render, screen } from "@testing-library/react";
import ActionTile from "../ActionTile";

describe("ActionTile", () => {
  let actionButtonClickMock: jest.Mock;
  beforeEach(() => {
    actionButtonClickMock = jest.fn();
  });
  afterEach(() => {
    jest.clearAllMocks();
  });
  it("should render the component correctly", () => {
    const label = "buttonLabel";
    render(
      <ActionTile
        id="myButton"
        label={label}
        onClick={actionButtonClickMock}
      />,
    );
    const button = screen.getByTestId("action-tile");
    expect(button).not.toBeNull();
    button.click();
    expect(actionButtonClickMock).toHaveBeenCalledTimes(1);
  });
});
