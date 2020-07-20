import { createSlice, combineReducers, configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { Transaction } from "../model/Transaction";

export interface ExpenseStore {
  transactions: Transaction[];
}

interface Expense {}

const initialState: ExpenseStore = {
  transactions: [],
};

const expenseSlice = createSlice({
  name: "Expense",
  initialState,
  reducers: {
    addTransaction: (state, action) => {},
    deleteTransaction: (state, action) => {},
  },
});

const rootReducer = combineReducers({
  expense: expenseSlice.reducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;
