export enum TransactionType {
  Expense = "exp",
  Income = "inc",
}

export interface Transaction {
  id: string;
  name: string;
  amount: number;
  transactionType: TransactionType;
}
