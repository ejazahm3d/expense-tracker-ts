import { v4 } from "uuid/interfaces";

export enum TransactionType {
  Expense = "exp",
  Income = "inc",
}

export interface Transaction {
  id: v4;
  name: string;
  amount: number;
  transactionType: TransactionType;
}
