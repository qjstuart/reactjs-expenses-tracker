import ExpensesList from "./components/Expenses/ExpensesList";
import NewExpenseItem from "./components/NewExpense/NewExpenseItem";
import { useState } from "react";

const startingExpenses = [
  {
    id: "e1",
    title: "Akai S2800i MIDI Sampler",
    amount: 200.0,
    date: new Date(2023, 9, 21),
  },
  {
    id: "e2",
    title: "Ableton Live 11",
    amount: 649.0,
    date: new Date(2023, 2, 12),
  },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 500.0,
    date: new Date(2023, 5, 30),
  },
  {
    id: "e4",
    title: "Samsung T7 Shield SSD",
    amount: 99.0,
    date: new Date(2022, 1, 28),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(startingExpenses);

  const addExpenseItemHandler = (expenseItem) => {
    setExpenses((prevExpenseItems) => {
      return [expenseItem, ...prevExpenseItems];
    });
  };

  return (
    <div>
      <ExpensesList expenses={expenses} />
      <NewExpenseItem onAddNewExpenseItem={addExpenseItemHandler} />
    </div>
  );
};

export default App;
