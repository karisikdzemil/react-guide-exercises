import ExpensesItem from "./components/ExpensesItem/ExpensesItem";
import "./App.css";
import ExpensesForm from "./components/ExpensesForm/ExpensesForm";
import ExpensesFilter from "./components/ExpensesFilter/ExpensesFilter";
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
  const handlerProps = (expenses) => {
    console.log("in app.js");
    console.log(expenses);
  };
  // const exp = () =>{
  //   Expenses.map(() =>{
  //     return <ExpensesItem name={Expenses.name} price={Expenses.price} date={Expenses.date}/>
  //   })
  // }
  return (
    <div>
      <ExpensesForm />
      <div className="mein">
        <ExpensesFilter appProps={handlerProps} />
        {Expenses.map((expense) => {
          return (
            <ExpensesItem
              key={expense.name}
              name={expense.name}
              price={expense.price}
              date={expense.date}
            />
          );
        })}
        {/* <ExpensesItem
        name={Expenses[0].name}
        price={Expenses[0].price}
        date={Expenses[0].date}
      />
      <ExpensesItem
        name={Expenses[1].name}
        price={Expenses[1].price}
        date={Expenses[1].date}
      />
      <ExpensesItem
        name={Expenses[2].name}
        price={Expenses[2].price}
        date={Expenses[2].date}
      />
      <ExpensesItem
        name={Expenses[3].name} 
        price={Expenses[3].price}
        date={Expenses[3].date}
      /> */}
      </div>
    </div>
  );
}

export default App;
