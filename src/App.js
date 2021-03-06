import React, { useState } from "react";
import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

//below we create an array
const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  {
    id: "e2",
    title: "Car Insurance",
    amount: 124.42,
    date: new Date(2020, 6, 24),
  },
  {
    id: "e3",
    title: "Foods",
    amount: 664.12,
    date: new Date(2020, 6, 4),
  },
  {
    id: "e4",
    title: "Beverages",
    amount: 44.12,
    date: new Date(2021, 6, 4),
  },
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  const addExpenseHandler = (expense) => {
    //expense is an object parameter
    console.log("In App.js");
    console.log(expense);
    // setExpenses((prevExpenses) => {
    //   return [expense, ...prevExpenses];
    // });
    setExpenses([expense, ...expenses]);
  };

  //below is an HTML code inside java script. But here it works due to the feature called jsx(java script xml) invented by react team
  return (
    //onAddExpense can be any name. now we have taken data upward which was 2 components below the App.js
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
