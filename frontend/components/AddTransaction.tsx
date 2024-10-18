"use client";

import React, { useState } from "react";

const AddTransaction: React.FC = () => {
	const [title, setTitle] = useState<string>("");
	const [amount, setAmount] = useState<number | string>("");
	const [date, setDate] = useState<string>("");
	const [category, setCategory] = useState<string>("");

	const categories = [
		"Income",
		"Food",
		"Transport",
		"Shopping",
		"Bills",
		"Entertainment",
		"Savings",
		"Other",
	];

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		// Handle form submission logic here
		console.log({ title, amount, date, category });
	};

	return (
		<div className="max-w-sm mx-auto p-6 bg-white rounded-lg shadow-md">
			<h2 className="text-2xl font-bold mb-6 text-center">Add Transaction</h2>
			<form onSubmit={handleSubmit} className="space-y-3">
				{/* Title Input */}
				<div className="flex flex-row">
					<label
						className="block w-28 text-gray-700 text-lg font-bold p-2"
						htmlFor="title"
					>
						Title
					</label>
					<input
						id="title"
						type="text"
						value={title}
						onChange={(e) => setTitle(e.target.value)}
						className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
						placeholder="Enter transaction title"
					/>
				</div>

				<div className="flex flex-row">
					<label
						className="block w-28 text-gray-700 text-lg font-bold p-2"
						htmlFor="amount"
					>
						Amount
					</label>
					<input
						id="amount"
						type="number"
						value={amount}
						onChange={(e) => setAmount(e.target.value)}
						className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
						placeholder="Enter amount"
					/>
				</div>

				<div className="flex flex-row">
					<label
						className="block w-28 text-gray-700 text-lg font-bold p-2"
						htmlFor="date"
					>
						Date
					</label>
					<input
						id="date"
						type="date"
						value={date}
						onChange={(e) => setDate(e.target.value)}
						className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
					/>
				</div>

				<div className="">
					<label className="block text-gray-700 text-lg font-bold mb-2">
						Category
					</label>
					<div className="flex flex-wrap gap-2">
						{categories.map((cat) => (
							<label key={cat} className="flex items-center">
								<input
									type="radio"
									name="category"
									value={cat}
									checked={category === cat}
									onChange={(e) => setCategory(e.target.value)}
									className="form-radio h-4 w-4 text-blue-600"
								/>
								<span className="ml-2">{cat}</span>
							</label>
						))}
					</div>
				</div>

				{/* Submit Button */}
				<div className="flex items-center justify-between">
					<button
						type="submit"
						className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
					>
						Add Transaction
					</button>
				</div>
			</form>
		</div>
	);
};

export default AddTransaction;
