import "./App.css";
import ExpenseItem from "./components/ExpenseItem";

function App() {
  //below we create an array
  const expenses = [
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
  ];
  //below is an HTML code inside java script. But here it works due to the feature called jsx(java script xml) invented by react team
  return (
    <div>
      <h2>Lets get started!!</h2>
      <ExpenseItem //here we pass the values as props to components
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      />
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      />
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      />
    </div>
  );
}

export default App;
