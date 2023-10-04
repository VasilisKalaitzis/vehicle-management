import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import store from "./store/store";
import App from "./components/App";
import "./index.css";
import { theme } from "./theme/theme";
import { ThemeProvider } from "@mui/material";

const rootElement = document.getElementById("root");

if (rootElement) {
  createRoot(rootElement).render(
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeProvider>,
  );
} else {
  console.error("Element with ID 'root' not found in the document.");
}
