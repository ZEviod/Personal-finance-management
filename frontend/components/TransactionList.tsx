import React from "react";

interface Transaction {
  id: number;
  description: string;
  amount: number;
  date: string;
  category: string; // Add category to the Transaction interface
}

type Props = {
  search?: string;
  category?: string;
  limit?: number;
  transactions?: Transaction[]; // optional transactions passed from parent or fetched
};

const TransactionList: React.FC<Props> = ({
  search = "",
  category = "",
  limit = 50,
  transactions = [],
}) => {
  const filtered = transactions
    .filter((t) => (category ? t.category === category : true))
    .filter(
      (t) =>
        `${t.description} ${t.category}`
          .toLowerCase()
          .indexOf(search.toLowerCase()) !== -1
    );

  return (
    <div className="p-4 w-full lg:w-2/3">
      <h2 className="text-2xl font-bold mb-4">Recent Transactions</h2>
      <table className="min-w-full divide-y divide-gray-200">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-4 py-2  text-gray-600">Date</th>
            <th className="px-4 py-2  text-gray-600">Description</th>
            <th className="px-4 py-2  text-gray-600">Amount</th>
            <th className="px-4 py-2 text-gray-600">Category</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {filtered.slice(0, limit).map((transaction) => (
            <tr key={transaction.id} className="hover:bg-gray-50">
              <td className="px-4 py-2 ">{transaction.date}</td>
              <td className="px-4 py-2">{transaction.description}</td>
              <td
                className={`px-4 py-2 font-bold ${
                  transaction.amount < 0 ? "text-red-500" : "text-green-500"
                }`}
              >
                {transaction.amount < 0 ? "-" : "+"}$
                {Math.abs(transaction.amount)}
              </td>
              <td className="px-4 py-2 text-gray-600">
                {transaction.category}
              </td>
            </tr>
          ))}
          {filtered.length === 0 && (
            <tr>
              <td colSpan={4} className="px-4 py-6 text-center text-slate-700">
                <div className="space-y-2">
                  <div className="font-semibold">No transactions yet</div>
                  <div className="text-sm text-slate-500">
                    It looks like you haven't added any transactions. Try adding
                    your first transaction using the "Add Transaction" form.
                    Here are some quick tips:
                  </div>
                  <ul className="text-sm list-disc list-inside text-slate-500">
                    <li>Use a short description like "Grocery" or "Salary"</li>
                    <li>
                      Set a positive amount for income and negative for expenses
                      (e.g. -50)
                    </li>
                    <li>Assign a category like Food, Bills, or Transport</li>
                  </ul>
                </div>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionList;
