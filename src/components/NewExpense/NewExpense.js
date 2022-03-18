import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };
  //   const showNewExpenseForm = () => {
  //     return <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />;
  //   };

  //here props are a method
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData, //fetch all params of this object
      id: Math.random().toString(), //add id param
    };
    // console.log(expenseData);
    props.onAddExpense(expenseData);
    setIsEditing(false);
  };
  return (
    //here we try to fetch data from child component
    <div className="new-expense">
      {/* when button clicked form should be shown. when cancel btn of the form clicked again button should be shown. So we have to maintain a state here */}
      {!isEditing && (
        <button onClick={startEditingHandler}>Add New Expense</button>
      )}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={stopEditingHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
