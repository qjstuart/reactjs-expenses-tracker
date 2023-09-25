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

  return (
    <Card className="expenses-list">
      <ExpensesFilter
        year={filteredYear}
        onFilterChange={filterChangeHandler}
      />
      {props.expenses.map((expense) => (
        <ExpenseItem
          title={expense.title}
          date={expense.date}
          amount={expense.amount}
        />
      ))}
    </Card>
  );
};

export default ExpensesList;
