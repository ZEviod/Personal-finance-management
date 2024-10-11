import React from "react";

const IncomeExpense: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Income & Expense Tracker</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white shadow-md rounded-lg p-4">
          <h2 className="text-xl font-semibold mb-2">Income</h2>
          <ul>
            <li className="flex justify-between py-2 border-b">
              <span>Salary</span>
              <span>$5000</span>
            </li>
            <li className="flex justify-between py-2 border-b">
              <span>Freelance</span>
              <span>$2000</span>
            </li>
          </ul>
        </div>
        <div className="bg-white shadow-md rounded-lg p-4">
          <h2 className="text-xl font-semibold mb-2">Expenses</h2>
          <ul>
            <li className="flex justify-between py-2 border-b">
              <span>Rent</span>
              <span>$1500</span>
            </li>
            <li className="flex justify-between py-2 border-b">
              <span>Groceries</span>
              <span>$500</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default IncomeExpense;
