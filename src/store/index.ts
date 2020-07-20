import {
  createSlice,
  combineReducers,
  configureStore,
  PayloadAction,
} from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { Transaction } from "../model/Transaction";

export interface ExpenseStore {
  transactions: Transaction[];
}

interface Expense {}

const initialState: ExpenseStore = {
  transactions: [],
};

const transactionSlice = createSlice({
  name: "transaction",
  initialState,
  reducers: {
    addTransaction: (state, action: PayloadAction<Transaction>) => {
      state.transactions.push(action.payload);
    },
    deleteTransaction: (state, action: PayloadAction<string>) => {
      state.transactions = state.transactions.filter(
        (transaction) => transaction.id !== action.payload
      );
    },
  },
});

const rootReducer = combineReducers({
  expense: transactionSlice.reducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export const { addTransaction, deleteTransaction } = transactionSlice.actions;
export const tracker = transactionSlice.reducer;

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;
