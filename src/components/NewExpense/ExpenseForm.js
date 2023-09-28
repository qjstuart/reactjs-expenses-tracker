import "./ExpenseForm.css";
import { useState } from "react";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const [isAddingNewExpense, setIsAddingNewExpense] = useState(false);

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault(); // prevent default behaviour of page reload on form submission
    const newExpenseItem = {
      title: enteredTitle,
      amount: Number(enteredAmount),
      date: new Date(enteredDate),
    };
    props.onSubmitExpenseForm(newExpenseItem);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  const addExpenseButtonHandler = () => {
    setIsAddingNewExpense(true);
  };

  const cancelButtonHandler = () => {
    setIsAddingNewExpense(false);
  };

  const expenseForm = (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            value={enteredAmount}
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            value={enteredDate}
            min="2022-01-01"
            max="2023-12-31"
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button onClick={cancelButtonHandler}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );

  const addExpenseButton = (
    <button onClick={addExpenseButtonHandler}>Add Expense</button>
  );

  return (
    <div>
      {isAddingNewExpense && expenseForm}
      {!isAddingNewExpense && addExpenseButton}
    </div>
  );
};

export default ExpenseForm;
