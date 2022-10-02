import React, { useEffect, useState } from 'react';

import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter/ExpensesFilter';

const Expenses = (props) => {
  const [filterDateSelected, setFilterDateSelected] = useState();

  //use it to check if state changed
  useEffect(() => {
    console.log(filterDateSelected)
  }, [filterDateSelected])

  return (
    <div>
      <ExpensesFilter 
        setFilterDateSelected={setFilterDateSelected} 
      />
      <Card className="expenses">
        <ExpenseItem
          title={props.items[0].title}
          amount={props.items[0].amount}
          date={props.items[0].date}
        />
        <ExpenseItem
          title={props.items[1].title}
          amount={props.items[1].amount}
          date={props.items[1].date}
        />
        <ExpenseItem
          title={props.items[2].title}
          amount={props.items[2].amount}
          date={props.items[2].date}
        />
        <ExpenseItem
          title={props.items[3].title}
          amount={props.items[3].amount}
          date={props.items[3].date}
        />
      </Card>
    </div>
  );
}

export default Expenses;
