import React from "react";
import { render, screen } from "../../test-utils";
import ExpenseTracker from "../../components/ExpenseTrackerForm";
// For react-hook-form
import "mutationobserver-shim";

describe("<ExpenseTrackerForm />", () => {
  beforeEach(() => {
    render(<ExpenseTracker />);
  });

  it("should render label Name", () => {
    expect(screen.getByText("Name")).toBeInTheDocument();
  });

  it("should render label Transaction Type", () => {
    expect(screen.getByText("Transaction Type")).toBeInTheDocument();
  });

  screen.debug();
});
