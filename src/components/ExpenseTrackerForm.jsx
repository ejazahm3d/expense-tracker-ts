import React, { useContext } from "react";
import { AppCtx } from "../context/GlobalState";
import { useForm } from "react-hook-form";
import { v4 } from "uuid";

const ExpenseTracker = (props) => {
  const { register, errors, handleSubmit, reset } = useForm();
  const { addTransaction } = useContext(AppCtx);
  const handleSubmitForm = (data) => {
    const amount = data.transactionType === "exp" ? -data.amount : +data.amount;
    const transaction = {
      id: v4(),
      name: data.name,
      amount,
      transactionType: data.transactionType,
    };
    addTransaction(transaction);
    reset();
  };

  return (
    <div className="box">
      <form onSubmit={handleSubmit(handleSubmitForm)}>
        <div className="field">
          <label className="label">Name</label>

          <div className="control">
            <input
              className={`input ${errors.name ? "is-danger" : ""}`}
              name="name"
              placeholder="Name"
              ref={register({ required: true })}
              type="text"
            />
            <span className="icon is-small is-left">
              <i className="fas fa-envelope"></i>
            </span>
            <span className="icon is-small is-right">
              <i className="fas fa-exclamation-triangle"></i>
            </span>
          </div>
          {errors.name && <p className="help is-danger">Name is required</p>}
        </div>
        <div className="field">
          <label className="label">Transaction Type</label>
          <div className="control">
            <div className="select">
              <select name="transactionType" ref={register}>
                <option value="inc">Income</option>
                <option value="exp">Expense</option>
              </select>
            </div>
          </div>
        </div>
        <div className="field">
          <label className="label">Amount</label>

          <div className="control">
            <input
              className={`input ${errors.amount ? "is-danger" : ""}`}
              name="amount"
              placeholder="Amount"
              ref={register({ required: true, min: 1 })}
              type="number"
            />
            <span className="icon is-small is-left">
              <i className="fas fa-envelope"></i>
            </span>
            <span className="icon is-small is-right">
              <i className="fas fa-exclamation-triangle"></i>
            </span>
          </div>
          {errors.amount && (
            <p className="help is-danger">
              Amount is required and should be greater than 0
            </p>
          )}
        </div>
        <input className="button is-primary" type="submit" />
      </form>
    </div>
  );
};

export default ExpenseTracker;
