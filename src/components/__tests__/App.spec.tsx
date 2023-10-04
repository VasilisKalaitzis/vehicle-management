/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/no-container */
import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../App";
import store from "../../store";
import { Provider } from "react-redux";

test("should render the header and the main-body", () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>,
  );
  const header = screen.queryByTestId("header");
  expect(header).toBeInTheDocument();
  const mainBody = screen.queryByTestId("main-body");
  expect(mainBody).toBeInTheDocument();
});
