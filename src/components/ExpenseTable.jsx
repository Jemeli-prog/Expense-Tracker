import React from 'react';

function ExpenseTable({ expenses, deleteExpense }) {
  return (
    <table className="expense-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Description</th>
          <th>Amount</th>
          <th>Date</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {expenses.map((expense) => (
          <tr key={expense.id}>
            <td>{expense.name}</td>
            <td>{expense.description}</td>
            <td>Ksh:{expense.amount.toFixed(2)}</td>
            <td>{expense.date}</td>
            <td>
              <button onClick={() => deleteExpense(expense.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ExpenseTable;
