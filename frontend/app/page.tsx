"use client";
import React from "react";
import AddTransaction from "@/components/AddTransaction";
import Balance from "@/components/Balance";
import Expense from "@/components/Expense";
import Income from "@/components/Income";
import Investment from "@/components/Investment";
import TransactionList from "@/components/TransactionList";
import Sidebar from "@/components/Sidebar";

export default function Home() {
  return (
    <div className="min-h-[80vh] flex bg-slate-50">
      <Sidebar
        onQuickAdd={() => {
          // try to find add transaction button or form and focus the first input
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

      {/* Main content area */}
      <main className="flex-1 p-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left column: Snapshot & quick stats */}
          <div className="lg:col-span-1 space-y-4">
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="text-sm text-slate-500">Overview</h3>
              <div className="mt-3 grid grid-cols-2 gap-3">
                <div className="p-3 bg-gray-50 rounded">
                  <p className="text-xs text-slate-500">Balance</p>
                  <p className="text-lg font-semibold mt-1">$0.00</p>
                </div>
                <div className="p-3 bg-gray-50 rounded">
                  <p className="text-xs text-slate-500">This month</p>
                  <p className="text-lg font-semibold mt-1">$0.00</p>
                </div>
                <div className="p-3 bg-gray-50 rounded">
                  <p className="text-xs text-slate-500">Expenses</p>
                  <p className="text-lg font-semibold mt-1 text-red-500">
                    $0.00
                  </p>
                </div>
                <div className="p-3 bg-gray-50 rounded">
                  <p className="text-xs text-slate-500">Income</p>
                  <p className="text-lg font-semibold mt-1 text-green-500">
                    $0.00
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="text-sm text-slate-500">Shortcuts</h3>
              <div className="mt-3 flex flex-col gap-3">
                <button className="w-full text-left bg-blue-50 px-3 py-2 rounded">
                  Add quick expense
                </button>
                <button className="w-full text-left bg-blue-50 px-3 py-2 rounded">
                  Set budget
                </button>
                <button className="w-full text-left bg-blue-50 px-3 py-2 rounded">
                  Review reports
                </button>
              </div>
            </div>

            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="text-sm text-slate-500">Goals</h3>
              <ul className="mt-3 space-y-2 text-sm">
                <li>- Save $2000</li>
                <li>- Reduce dining out</li>
              </ul>
            </div>
          </div>

          {/* Center column: Activity feed */}
          <div className="lg:col-span-2 space-y-4">
            <div className="bg-white p-4 rounded-lg shadow">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold">Today</h2>
                <div className="text-sm text-slate-500">Quick view</div>
              </div>
              <div className="mt-4">
                <TransactionList limit={8} />
              </div>
            </div>

            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="text-sm text-slate-500">Insights</h3>
              <p className="mt-2 text-sm text-slate-600">
                Spending breakdown and trends will appear here.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
