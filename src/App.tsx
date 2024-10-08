import React, {useState} from "react";
import "./App.css";
import "./components/expenses/ExpenseItem";
import Expense from "./components/expenses/Expense";
import NewExpense from "./components/newExpense/NewExpense";

const INITIAL_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

export default function App() {
  const [expenses, setExpenses] = useState(INITIAL_EXPENSES);

  const addExpenseHandler = (expenseData: {
    title: string;
    amount: number;
    date: Date;
    id: string;
  }) => {
    console.log(expenseData);
    setExpenses(prevState => {
      return [expenseData, ...prevState];
    });
  };

  return (
    <div className="App">
      <h1>Expense Tracker</h1>
      <NewExpense onAddNewExpense={addExpenseHandler} />
      <Expense expenses={expenses} />
    </div>
  );
}
