import React from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  //here props are a method
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData, //fetch all params of this object
      id: Math.random().toString(), //add id param
    };
    // console.log(expenseData);
    props.onAddExpense(expenseData);
  };
  return (
    //here we try to fetch data from child component
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
