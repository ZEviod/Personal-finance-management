"use client";
import React, { useMemo, useState } from "react";
import AddTransaction from "@/components/AddTransaction";
import Balance from "@/components/Balance";
import Expense from "@/components/Expense";
import Income from "@/components/Income";
import Investment from "@/components/Investment";
import TransactionList from "@/components/TransactionList";
import Sidebar from "@/components/Sidebar";

type Tx = {
  id: number;
  description: string;
  amount: number;
  date: string;
  category: string;
};

const sampleTransactions: Tx[] = [
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
  {
    id: 4,
    description: "Cinema",
    amount: -25,
    date: "2023-10-12",
    category: "Entertainment",
  },
  {
    id: 5,
    description: "Bus pass",
    amount: -30,
    date: "2023-10-08",
    category: "Transport",
  },
];

export default function BudgetingPage() {
  const categories = [
    "Food",
    "Transport",
    "Shopping",
    "Bills",
    "Entertainment",
    "Savings",
    "Other",
  ];
  const [budgets, setBudgets] = useState<Record<string, number>>({});

  const totals = useMemo(() => {
    const map: Record<string, number> = {};
    for (const t of sampleTransactions) {
      map[t.category] = (map[t.category] || 0) + Math.abs(t.amount);
    }
    return map;
  }, []);

  const handleBudgetChange = (category: string, value: string) => {
    const n = Number(value || 0);
    setBudgets((s) => ({ ...s, [category]: n }));
  };

  return (
    <div className="min-h-[80vh] flex bg-slate-50">
      <Sidebar
        onQuickAdd={() => {
          const el = document.querySelector(
            "input#title"
          ) as HTMLInputElement | null;
          if (el) {
            el.focus();
            el.scrollIntoView({ behavior: "smooth", block: "center" });
          } else {
            window.scrollTo({
              top: document.body.scrollHeight,
              behavior: "smooth",
            });
          }
        }}
      />

      <main className="flex-1 flex flex-col items-start justify-start space-y-4 text-left">
        <div className="w-full max-w-[1200px] mx-auto p-4 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <Balance />
          <Expense />
          <Income />
          <Investment />
        </div>

        <div className="w-full p-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="col-span-2">
            <TransactionList />
          </div>

          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-3">Budget Manager</h3>
            <p className="text-sm text-slate-600 mb-4">
              Set monthly budgets per category and compare against actual
              spending.
            </p>
            <div className="space-y-3">
              {categories.map((c) => (
                <div key={c} className="flex items-center justify-between">
                  <div className="text-sm font-medium">{c}</div>
                  <input
                    type="number"
                    value={budgets[c] ?? ""}
                    onChange={(e) => handleBudgetChange(c, e.target.value)}
                    placeholder="0"
                    className="w-24 rounded-md border px-2 py-1"
                  />
                </div>
              ))}
            </div>

            <h4 className="mt-4 font-semibold">Summary</h4>
            <table className="mt-2 w-full text-left text-sm">
              <thead>
                <tr>
                  <th>Category</th>
                  <th className="text-right">Budget</th>
                  <th className="text-right">Actual</th>
                </tr>
              </thead>
              <tbody>
                {categories.map((c) => (
                  <tr key={c} className="border-t">
                    <td className="py-2">{c}</td>
                    <td className="py-2 text-right">${budgets[c] ?? 0}</td>
                    <td className="py-2 text-right">${totals[c] ?? 0}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}
