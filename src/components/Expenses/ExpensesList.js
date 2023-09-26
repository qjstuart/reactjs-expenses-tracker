import { useState } from "react";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./ExpenseItem.css";
import "./ExpensesList.css";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";

const ExpensesList = (props) => {
  const [filteredYear, setFilteredYear] = useState("2023");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  let expensesList = <p>No expenses for {filteredYear}</p>;

  if (filteredExpenses.length > 0) {
    expensesList = filteredExpenses.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        date={expense.date}
        amount={expense.amount}
      />
    ));
  }

  return (
    <Card className="expenses-list">
      <ExpensesFilter
        year={filteredYear}
        onFilterChange={filterChangeHandler}
      />
      {expensesList}
    </Card>
  );
};

export default ExpensesList;
