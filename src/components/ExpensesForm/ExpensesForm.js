import "./ExpensesForm.css"
import { useState } from "react";
// import App from "../../App";
function ExpensesForm (props) {

    const [title, setTitle] = useState('')
    const [amount, setAmount] = useState('')
    const [date, setDate] = useState('')

    const titleChange = (event) =>{
        setTitle(event.target.value)
    }
    const amountChange = (event) =>{
        setAmount(event.target.value)
    }
    const dateChange = (event) =>{
        setDate(event.target.value)
    }
       // console.log(formObject)

    const submitHandler = (event) =>{
        event.preventDefault()
        const formObject = {
            title: title,
            amount: amount,
            date: new Date (date)
        }
        console.log(formObject)
        setTitle('')
        setAmount('')
        setDate('')
    }
    return(
        <div className="form-main">
            <form onSubmit={submitHandler}>
                <label>title</label>
                <input onChange={titleChange} value={title} className="input-1" type="text"></input>
                <label>amount</label>
                <input onChange={amountChange} value={amount}  className="input-1" type="number"></input>
                <label>date</label>
                <input onChange={dateChange} value={date}  className="input-1" type="date"></input>
                <button className="form-butt">submit</button>
            </form>
        </div>
    )
}
export default ExpensesForm;