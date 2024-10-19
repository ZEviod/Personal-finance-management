import React from "react";

const Expense: React.FC = () => {
	return (
		<div className="flex flex-col items-center justify-center bg-gray-100 ">
			<div className="bg-white p-6 rounded-lg shadow-lg w-full">
				<h1 className="text-2xl font-bold mb-4">Month Expense</h1>
				<p className="text-xl font-bold text-red-500">$0.00</p>
			</div>
		</div>
	);
};

export default Expense;
