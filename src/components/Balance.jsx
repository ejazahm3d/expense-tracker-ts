import React, { useContext } from "react";
import { AppCtx } from "../context/GlobalState";
import TransactionList from "./TransactionList";

const Balance = () => {
  const { transactions } = useContext(AppCtx);

  const totalBalance = () => {
    return transactions.reduce((acc, curr) => {
      return acc + curr.amount;
    }, 0);
  };

  const totalIncome = () => {
    return transactions.reduce((acc, curr) => {
      if (curr.transactionType === "inc") {
        return acc + curr.amount;
      }
      return acc;
    }, 0);
  };
  const totalExpenses = () =>
    transactions.reduce(
      (acc, curr) => (curr.transactionType === "exp" ? acc + curr.amount : acc),
      0
    );

  return (
    <>
      <div className="box">
        <div className="columns is-vcentered has-text-white">
          <div className="column has-background-success">
            Income: {totalIncome()}
          </div>
          <div className="column has-background-danger">
            Expenses: {Math.abs(totalExpenses())}
          </div>
          <div className="column has-background-primary">
            Total: {totalBalance()}
          </div>
        </div>
        <h3 className="title">History</h3>
        <TransactionList transactions={transactions} />
      </div>
    </>
  );
};

export default Balance;
