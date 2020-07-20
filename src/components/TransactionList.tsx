import React from "react";
import { Transaction } from "../model/Transaction";
import { deleteTransaction, useAppDispatch } from "../store";

interface Props {
  transactions: Transaction[];
}

const TransactionList: React.FC<Props> = ({ transactions }) => {
  const dispatch = useAppDispatch();
  return (
    <div>
      {transactions.map((transaction) => (
        <div
          className={`box ${
            transaction.transactionType === "exp"
              ? "has-background-danger-light"
              : "has-background-success-light"
          }`}
          key={transaction.id}
        >
          <div className="columns">
            <div className="column is-one-third-mobile is-one-third-tablet">
              {transaction.name}
            </div>
            <div className="column is-one-third-mobile is-one-third-tablet">
              {Math.abs(transaction.amount)}$
            </div>
            <div className="column is-one-third-mobile is-one-third-tablet">
              <button
                className="button is-danger"
                onClick={() => dispatch(deleteTransaction(transaction.id))}
              >
                DELETE
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TransactionList;
