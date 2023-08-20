import React from "react";
import { BrowserRouter } from "react-router-dom";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "./src/redux/store";

const Providers = ({ children }) => (
  <Provider store={store}>
    <BrowserRouter>{children}</BrowserRouter>
  </Provider>
);

const customRender = (ui, options) =>
  render(ui, { wrapper: Providers, ...options });
// re-export everything
export * from "@testing-library/react";
// override render method
export { customRender as render };
