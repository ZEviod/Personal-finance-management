import AddTransaction from "@/components/AddTransaction";
import Balance from "@/components/Balance";
import IncomeExpense from "@/components/IncomeExpense";
import Transaction from "@/components/Transaction";
import TransactionList from "@/components/TransaxctionList";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center space-y-4 text-center">
      <Balance />
      <IncomeExpense />
      <div className="flex space-x-4">
        <TransactionList />
        <AddTransaction />
      </div>
    </main>
  );
}
