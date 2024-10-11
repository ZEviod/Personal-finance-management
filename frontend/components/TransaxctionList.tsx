import React from "react";

interface Transaction {
  id: number;
  description: string;
  amount: number;
  date: string;
}

const transactions: Transaction[] = [
  { id: 1, description: "Grocery Shopping", amount: -50, date: "2023-10-01" },
  { id: 2, description: "Salary", amount: 1500, date: "2023-10-05" },
  { id: 3, description: "Electricity Bill", amount: -100, date: "2023-10-10" },
];

const TransactionList: React.FC = () => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Transaction List</h2>
      <ul className="space-y-2">
        {transactions.map((transaction) => (
          <li
            key={transaction.id}
            className="flex justify-between items-center p-2 border rounded shadow-sm"
          >
            <span className="text-gray-600">{transaction.date}</span>
            <span className="flex-1 mx-4">{transaction.description}</span>
            <span
              className={`font-bold ${
                transaction.amount < 0 ? "text-red-500" : "text-green-500"
              }`}
            >
              {transaction.amount < 0 ? "-" : "+"}$
              {Math.abs(transaction.amount)}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransactionList;
