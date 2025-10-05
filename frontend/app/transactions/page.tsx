"use client";
import React, { useState } from "react";
import AddTransaction from "@/components/AddTransaction";
import Balance from "@/components/Balance";
import Expense from "@/components/Expense";
import Income from "@/components/Income";
import Investment from "@/components/Investment";
import TransactionList from "@/components/TransactionList";
import Sidebar from "@/components/Sidebar";

export default function TransactionsPage() {
  const [search, setSearch] = useState<string>("");
  const [category, setCategory] = useState<string>("");

  const categories = [
    "",
    "Income",
    "Food",
    "Transport",
    "Shopping",
    "Bills",
    "Entertainment",
    "Savings",
    "Other",
  ];

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
          <div className="flex items-center gap-2 w-full lg:w-1/2">
            <input
              aria-label="Search transactions"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search description or category"
              className="w-full rounded-md border px-3 py-2"
            />
          </div>
          <div className="flex items-center gap-2 w-full lg:w-1/2 justify-end">
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="rounded-md border px-3 py-2"
            >
              {categories.map((c) => (
                <option key={c || "all"} value={c}>
                  {c === "" ? "All categories" : c}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex flex-col w-full justify-center gap-4 mt-4 lg:flex-row lg:gap-8">
          <Balance />
          <Expense />
          <Income />
          <Investment />
        </div>
        <div className="flex flex-col w-full p-6 lg:flex-row lg:space-x-4">
          <TransactionList search={search} category={category} />
          <div className="lg:w-1/3 w-full mt-6 lg:mt-0">
            <AddTransaction />
          </div>
        </div>
      </main>
    </div>
  );
}
