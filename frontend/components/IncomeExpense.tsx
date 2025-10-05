import React from "react";

const IncomeExpense: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Income & Expense Tracker</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white shadow-md rounded-lg p-4">
          <h2 className="text-xl font-semibold mb-2">Income</h2>
          <div className="text-sm text-slate-600">
            No income recorded yet. Add income transactions to see them listed
            here and to track monthly totals.
          </div>
        </div>
        <div className="bg-white shadow-md rounded-lg p-4">
          <h2 className="text-xl font-semibold mb-2">Expenses</h2>
          <div className="text-sm text-slate-600">
            No expenses recorded yet. Start by adding everyday expenses like
            groceries or transport to build your spending history.
          </div>
        </div>
      </div>
    </div>
  );
};

export default IncomeExpense;
