import "./ExpenseItem.css"; //import the CSS file
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import { useState } from "react";

const ExpenseItem = (props) => {
  //here data is received(from out side) to this component as key value pair object

  const [title, setTitle] = useState(props.title); //this returns an array

  const clickHandler = () => {
    setTitle("Hellow");
    console.log(title);
  };
  return (
    //this is the root element
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
};

export default ExpenseItem;
