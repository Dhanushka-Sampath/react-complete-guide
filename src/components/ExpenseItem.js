import "./ExpenseItem.css"; //import the CSS file
import ExpenseDate from "./ExpenseDate";

const ExpenseItem = (props) => {
  //here data is received(from out side) to this component as key value pair object

  return (
    //this is the root element
    <div className="expense-item">
      {/* <h1>{props.date.toISOString()}</h1> */}
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </div>
  );
};

export default ExpenseItem;
