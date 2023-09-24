import ExpensesList from "./components/Expenses/ExpensesList";
import NewExpenseItem from "./components/NewExpense/NewExpenseItem";

const App = () => {
  const expenses = [
    {
      id: "e1",
      title: "Akai S2800i MIDI Sampler",
      amount: 200.00,
      date: new Date(2023, 9, 21),
    },
    {
      id: "e2",
      title: "Ableton Live 11",
      amount: 649.00,
      date: new Date(2023, 2, 12),
    },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 500.00,
      date: new Date(2023, 5, 30),
    },
    {
      id: "e4",
      title: "Samsung T7 Shield SSD",
      amount: 99.00,
      date: new Date(2023, 1, 28),
    },
  ];

  return (
    <div>
      <ExpensesList expenses={expenses} />
      <NewExpenseItem />
    </div>
  );
}

export default App;
