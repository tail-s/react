import React, { useState } from 'react';

import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter.js';
import ExpensesList from './ExpensesList.js';
import ExpensesChart from './ExpensesChart';
import './Expense.css';

const Expense = (props) => {
    const [ filteredYear, setFilteredYear ] = useState('2020');

    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear);
    };

    const filteredExpenses = props.expenses.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    });

    // let expensesContent = <p>No expenses found.</p>;

    // if(filteredExpenses.length > 0) {
    //     expensesContent = filteredExpenses.map((expense) => (
    //         <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />
    //     ));
    // };

    return (
        <div>
            <Card className='expenses'>
                <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
                <ExpensesChart expenses={filteredExpenses} />
                <ExpensesList items={filteredExpenses} />



                {/* {expensesContent} */}

                {/* {filteredExpenses.length === 0 && <p>No expenses found.</p>}
                {filteredExpenses.length > 0 && (
                    filteredExpenses.map((expense) => (
                        <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />
                    ))
                )} */}

                {/* {filteredExpenses.length === 0 ? <p>No expenses found.</p> : (
                filteredExpenses.map((expense) => (
                    <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />
                )))} */}
            </Card>

        </div>
        
    );
};

export default Expense;