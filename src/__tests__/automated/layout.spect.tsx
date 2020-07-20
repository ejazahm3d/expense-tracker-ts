import React from "react";
import { render, screen } from "@testing-library/react";
import Layout from "../../components/Layout";

describe("<Layout />", () => {
  render(<Layout />);
  it("Has app name", () => {
    expect(screen.getByText("Expense Tracker")).toBeInTheDocument();
  });
});
