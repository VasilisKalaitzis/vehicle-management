import React from "react";
import { render, screen } from "@testing-library/react";
import Header from "../Header";
import store from "../../../store/store";
import { Provider } from "react-redux";

describe("Header", () => {
  test("should render the header", () => {
    render(
      <Provider store={store}>
        <Header />
      </Provider>,
    );
    const header = screen.queryByTestId("header");
    expect(header).not.toBeNull();
  });
});
