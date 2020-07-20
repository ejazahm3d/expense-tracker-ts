import React from "react";
import { render, screen } from "../../test-utils";
import TransactionList from "../../components/TransactionList";
import { Transaction, TransactionType } from "../../model/Transaction";

describe("<TransactionList />", () => {
  beforeEach(() => {
    const transactions: Transaction[] = [
      {
        id: "uuid1",
        amount: 12,
        name: "Paycheck",
        transactionType: TransactionType.Income,
      },
      {
        id: "uuid2",
        amount: 5,
        name: "Burger",
        transactionType: TransactionType.Expense,
      },
    ];
    render(<TransactionList transactions={transactions} />);
  });

  it("should render expense item", () => {
    expect(screen.getByText("Burger")).toBeInTheDocument();
  });

  it("should render income item", () => {
    expect(screen.getByText("Paycheck")).toBeInTheDocument();
  });

  it("should render income amount", () => {
    expect(screen.getByText("12$")).toBeInTheDocument();
  });

  it("should render expense amount", () => {
    expect(screen.getByText("5$")).toBeInTheDocument();
  });
});
