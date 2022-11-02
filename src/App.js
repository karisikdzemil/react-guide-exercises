import ExpenseItem from "./components/ExpensesItem/ExpensesItem";
import "./App.css";
import ExpensesForm from "./components/ExpensesForm/ExpensesForm";
function App() {
  const Expenses = [
    {
      name: "toalet paper",
      price: 100,
      date: new Date(2004, 6, 3),
    },
    {
      name: "paper toalet",
      price: 20,
      date: new Date(2004, 7, 3),
    },
    {
      name: "paper",
      price: 40,
      date: new Date(2015, 3, 7),
    },
    {
      name: "kupoprodajni ugovor",
      price: 800,
      date: new Date(2022, 10, 29),
    },
  ];
  return (
    <div>
      <ExpensesForm />
    <div className="mein">
      <ExpenseItem
        name={Expenses[0].name}
        price={Expenses[0].price}
        date={Expenses[0].date}
      />
      <ExpenseItem
        name={Expenses[1].name}
        price={Expenses[1].price}
        date={Expenses[1].date}
      />
      <ExpenseItem
        name={Expenses[2].name}
        price={Expenses[2].price}
        date={Expenses[2].date}
      />
      <ExpenseItem
        name={Expenses[3].name}
        price={Expenses[3].price}
        date={Expenses[3].date}
      />
    </div>
    </div>
  );
}

export default App;
