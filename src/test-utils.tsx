// test-utils.js
import React from "react";
import { render, RenderOptions } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "./store";

const AllTheProviders: React.FC = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

const customRender = (ui: React.ReactElement, options?: RenderOptions) =>
  render(ui, { wrapper: AllTheProviders, ...options });

// re-export everything
export * from "@testing-library/react";

// override render method
export { customRender as render };
