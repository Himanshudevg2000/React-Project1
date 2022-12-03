import ExpenseDate from './ExpenseDate';
import ExpenseAmount from './ExpenseAmount';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
    
    return( 
    <div className='expense-item'> 
        <ExpenseDate date={props.date} />
        <ExpenseAmount amount = {props.amount} title={props.title} />
        <div> {props.LocationOfExpenditure}</div>
    </div>
    );
};

export default ExpenseItem;