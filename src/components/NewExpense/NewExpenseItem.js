import "./NewExpenseItem.css";
import ExpenseForm from "./ExpenseForm";

const NewExpenseItem = (props) => {
  const submitExpenseFormHandler = (expenseItemData) => {
    const expenseItemDataWithID = {
      ...expenseItemData,
      id: Math.random().toString(),
    };

    props.onAddNewExpenseItem(expenseItemDataWithID);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSubmitExpenseForm={submitExpenseFormHandler} />
    </div>
  );
};

export default NewExpenseItem;
