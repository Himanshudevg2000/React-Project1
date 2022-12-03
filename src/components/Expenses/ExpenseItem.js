import ExpenseDate from './ExpenseDate';
import ExpenseAmount from './ExpenseAmount';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
    const clickHandler = () => {
        console.log("Clicked!!!");
    }

    const removeExpense = () => {
        const element = document.getElementById('expense')
        element.remove();
        console.log("removed");
    }

    return( 
    <div className='expense-item' id='expense'> 
        <ExpenseDate date={props.date} />
        <ExpenseAmount amount = {props.amount} title={props.title} />
        <div> {props.LocationOfExpenditure}</div>
        <button onClick={clickHandler}> Change Title</button>
        <button onClick={removeExpense}> remove</button>
    </div>
    );
};

export default ExpenseItem;