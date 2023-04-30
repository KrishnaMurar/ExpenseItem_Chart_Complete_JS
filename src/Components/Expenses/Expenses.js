import React, { useState } from 'react';

import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpenseFilter from './ExpenseFilter';




const Expenses = (props) => {
const[filteredYear, setFilteredYear] = useState('2019');

const filterChangeHandler = selectedYear =>{
    setFilteredYear(selectedYear);
}
const filteredExpense = props.items.filter((expense) =>{
 return expense.Date.getFullYear().toString()===filteredYear;
})

    return(
<Card className="expenses">
    <ExpenseFilter selected = {filteredYear} onChangeFilter = {filterChangeHandler} />

      {filteredExpense.map((expenses) => (
            <ExpenseItem key ={expenses.id} title = {expenses.title} Amount = {expenses.Amount} Date = {expenses.Date} />
      )

      )}
        
</Card> 
    );
}
export default Expenses;
