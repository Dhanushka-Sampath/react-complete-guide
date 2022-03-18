import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = (props) => {
  //below variable is rendarable inside JSX
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expenses.</h2>;
  }

  return (
    <ul className="expenses-list">
      {props.items.map(
        (
          expense //map has been used instead of calling the same component again and again to render the list
        ) => (
          <ExpenseItem //always add a key when mapping list of items
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        )
      )}
    </ul>
  );
};

export default ExpensesList;
