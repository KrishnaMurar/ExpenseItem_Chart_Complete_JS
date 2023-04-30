import React, { useState } from 'react';


import Card from '../UI/Card';
import ExpenseFilter from './ExpenseFilter';
import ExpenseList from './ExpenseList';




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

    <ExpenseList items = {filteredExpense} />
        
</Card> 
    );
}
export default Expenses;
