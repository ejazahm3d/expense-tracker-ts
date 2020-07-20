import React from "react";
import { render, screen } from "../../test-utils";
import Balance from "../../components/Balance";

describe("<Balance />", () => {
  beforeEach(() => {
    render(<Balance />);
  });

  it("should render income", () => {
    expect(screen.getByTestId("income")).toBeInTheDocument();
  });

  it("should render expense", () => {
    expect(screen.getByTestId("expense")).toBeInTheDocument();
  });

  it("should render total", () => {
    expect(screen.getByTestId("total")).toBeInTheDocument();
  });

  screen.debug();
});
