import React,{ useState} from 'react';
import ExpenseDate from './ExpenseDate';
import ExpenseAmount from './ExpenseAmount';
import './ExpenseItem.css';

const ExpenseItem = (props) => {

    const [title, setTitle] = useState(props.title);
    const [amount, updateAmount] = useState(props.amount);

    const clickHandler = () => {
        setTitle("updated")
        console.log("Clicked!!!");
    }

    const removeExpense = () => {
        const element = document.getElementById('expense')
        element.remove();
        console.log("removed");
    }

    const changeAmount = () => {
        updateAmount("100$");
    }

    return( 
    <div className='expense-item' id='expense'> 
        <ExpenseDate date={props.date} />
        <ExpenseAmount amount = {amount} title = {title} />
        <div> {props.LocationOfExpenditure}</div>
        <button onClick={changeAmount}> Change Amount</button>
        <button onClick={clickHandler}> Change Title</button>
        <button onClick={removeExpense}> remove</button>
    </div>
    );
};

export default ExpenseItem;