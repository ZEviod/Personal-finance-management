import React from "react";

interface Transaction {
	id: number;
	description: string;
	amount: number;
	date: string;
	category: string; // Add category to the Transaction interface
}

const transactions: Transaction[] = [
	{
		id: 1,
		description: "Grocery Shopping",
		amount: -50,
		date: "2023-10-01",
		category: "Food",
	},
	{
		id: 2,
		description: "Salary",
		amount: 1500,
		date: "2023-10-05",
		category: "Income",
	},
	{
		id: 3,
		description: "Electricity Bill",
		amount: -100,
		date: "2023-10-10",
		category: "Bills",
	},
	// Add more transactions as needed
];

type Props = {
	search?: string;
	category?: string;
	limit?: number;
};

const TransactionList: React.FC<Props> = ({ search = "", category = "", limit = 50 }) => {
	const filtered = transactions
		.filter((t) => (category ? t.category === category : true))
		.filter(
			(t) =>
				`${t.description} ${t.category}`.toLowerCase().indexOf(search.toLowerCase()) !== -1
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
							<td className="px-4 py-2 text-gray-600">{transaction.category}</td>
						</tr>
					))}
					{filtered.length === 0 && (
						<tr>
							<td colSpan={4} className="px-4 py-6 text-center text-slate-500">
								No transactions found.
							</td>
						</tr>
					)}
				</tbody>
			</table>
		</div>
	);
};

export default TransactionList;
