import { tracker, addTransaction, deleteTransaction } from "../../store";
import { Transaction, TransactionType } from "../../model/Transaction";

describe("transaction redux", () => {
  it("should handle initial state", () => {
    expect(tracker(undefined, { type: "" })).toEqual({ transactions: [] });
  });

  it("should handle addTransaction", () => {
    expect(
      tracker(
        { transactions: [] },
        {
          type: addTransaction.type,
          payload: {
            id: "1",
            amount: 12,
            name: "Paycheck",
            transactionType: TransactionType.Income,
          } as Transaction,
        }
      )
    ).toEqual({
      transactions: [
        {
          id: "1",
          amount: 12,
          name: "Paycheck",
          transactionType: TransactionType.Income,
        },
      ],
    });
  });
  it("should handle deleteTransaction", () => {
    expect(
      tracker(
        {
          transactions: [
            {
              id: "1",
              amount: 12,
              name: "Paycheck",
              transactionType: TransactionType.Income,
            },
          ],
        },
        {
          type: deleteTransaction.type,
          payload: "1",
        }
      )
    ).toEqual({
      transactions: [],
    });
  });
});
