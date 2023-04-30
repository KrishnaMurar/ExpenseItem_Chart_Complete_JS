import React from 'react';
import ExpenseItem from './ExpenseItem';
import './ExpenseList.css';


const ExpenseList = props => {
 if(props.items.length ===0){
    return <h2 className ='expense-list__fallback'>No Result Found</h2>
 }
 if(props.items.length ===1){
    return ( <div>
    <ul className = 'expense-list'>
    {props.items.map((expenses) => (
<ExpenseItem key ={expenses.id} title = {expenses.title} Amount = {expenses.Amount} Date = {expenses.Date} />

)

)}
</ul>
<h2 className ='expenses-list__fallback'>Only single Expense here. Please add more...</h2></div>)
 }
    return (
        <ul className = 'expenses-list'>
                {props.items.map((expenses) => (
        <ExpenseItem key ={expenses.id} title = {expenses.title} Amount = {expenses.Amount} Date = {expenses.Date} />
         
        )
      
  )}
        </ul>
    )
}

export default ExpenseList;