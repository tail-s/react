import React, { useState } from 'react';

import ExpenseItem from './ExpenseItem.js';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter.js';
import './Expense.css';

const Expense = (props) => {
    const [ filteredYear, setFilteredYear ] = useState('2020');

    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear);

    };

    return (
        <div>
            <Card className='expenses'>
                <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
                {props.expenses.map((expense) => (<ExpenseItem title={expense.title} amount={expense.amount} date={expense.date} />))}
                {/* <ExpenseItem title={props.expenses[0].title} amount={props.expenses[0].amount} date={props.expenses[0].date}></ExpenseItem>
                <ExpenseItem title={props.expenses[1].title} amount={props.expenses[1].amount} date={props.expenses[1].date}></ExpenseItem>
                <ExpenseItem title={props.expenses[2].title} amount={props.expenses[2].amount} date={props.expenses[2].date}></ExpenseItem>
                <ExpenseItem title={props.expenses[3].title} amount={props.expenses[3].amount} date={props.expenses[3].date}></ExpenseItem> */}
            </Card>

        </div>
        
    );
};

export default Expense;