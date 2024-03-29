import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../App";
import store from "../../store/store";
import { Provider } from "react-redux";

describe("App", () => {
  it("should render the header and the main-body", () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>,
    );
    const header = screen.queryByTestId("header");
    expect(header).not.toBeNull();
    const mainBody = screen.queryByTestId("main-body");
    expect(mainBody).not.toBeNull();
  });
});
