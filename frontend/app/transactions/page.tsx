import AddTransaction from "@/components/AddTransaction";
import Balance from "@/components/Balance";
import Expense from "@/components/Expense";
import Income from "@/components/Income";
import Investment from "@/components/Investment";
import TransactionList from "@/components/TransactionList";

export default function Home() {
	return (
		<main className="flex flex-col items-center justify-center space-y-4 text-center ">
			<div className="flex flex-col w-full justify-center gap-4 mt-4 lg:flex-row lg:gap-8">
				<Balance />
				<Expense />
				<Income />
				<Investment />
			</div>
			<div className="flex flex-col w-full p-6 lg:flex-row space-x-4">
				<TransactionList />
				<AddTransaction />
			</div>
		</main>
	);
}
