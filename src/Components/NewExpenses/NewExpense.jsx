import React, { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import "../Styles/NewExpenses.css";

const NewExpense = (props) => {
  const [addNewExpense, setAddNewExpense] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setAddNewExpense(false);
  };

  const startAddingHandler = () => {
    setAddNewExpense(true);
  };

  const stopAddingHandler = () => {
    setAddNewExpense(false);
  };

  return (
    <div className="new-expense">
      {!addNewExpense && (
        <button onClick={startAddingHandler}>Add new expense</button>
      )}
      {addNewExpense && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={stopAddingHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
