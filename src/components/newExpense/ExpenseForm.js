import React, { useState } from "react";

import './ExpenseForm.css'

const ExpenseForm = () => {

    const [enterTitle, setEnteredTitle] = useState('');
    const [enterAmount, setEnteredAmount] = useState('');
    const [enterDate, setEnteredDate] = useState('');
    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value)
    };
    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value)
    };
    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value)
    };

    return <form>
        <div className="new-expense__controls">
            <div className="new-expense__controls">
                <label>Title</label>
                <input type='text' onChange={titleChangeHandler}/>
            </div>
            <div className="new-expense__controls">
                <label>Amount</label>
                <input type='number' min="0.01" step="0.01" onChange={amountChangeHandler}/>
            </div>
            <div className="new-expense__controls">
                <label>Date</label>
                <input type='date' min="2023-01-02" onChange={dateChangeHandler}/>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </div>
    </form>
};

export default ExpenseForm;