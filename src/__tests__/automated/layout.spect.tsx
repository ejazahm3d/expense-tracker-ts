import React from "react";
import { render, screen } from "@testing-library/react";
import Layout from "../../components/Layout";

describe("<Layout />", () => {
  it("Has app name", () => {
    render(<Layout />);
    expect(screen.getByText("Expense Tracker")).toBeInTheDocument();
  });
});
