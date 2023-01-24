import React, {useState} from "react";

import NewExpense from "./components/newExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(),
    LocationOfExpenditure: 'Shop'
  },
  {
    id: 'e2',
    title: 'New TV',
    amount: 799.49,
    date: new Date(),
    LocationOfExpenditure: 'Online'
  },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2022, 3,12),
    LocationOfExpenditure: 'Showroom'
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2022, 3,12),
    LocationOfExpenditure: 'Shop'
  },
];

const App = () => {

  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = expense => {
    // console.log('In app.js');
    // console.log(expense);
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense = {addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
