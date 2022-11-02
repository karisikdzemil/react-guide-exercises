import "./ExpensesItem.css"
import ExpensesDate from "../ExpensesDate/ExpensesDate";
function ExpenseItem(props){

    return(
        <div className="best">
         <ExpensesDate date={props.date}/>
            <div className="name"><h1 className="name-h1">{props.name}</h1></div>
            <div className="expense">${props.price}</div>
        </div>
    )
}
export default ExpenseItem;