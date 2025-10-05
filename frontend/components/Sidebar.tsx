"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Icon = ({ children }: { children: React.ReactNode }) => (
  <div className="w-6 h-6">{children}</div>
);

export default function Sidebar({ onQuickAdd }: { onQuickAdd?: () => void }) {
  const pathname = usePathname();
  const items = [
    {
      href: "/",
      label: "Home",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            d="M3 9.5L12 3l9 6.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1V9.5z"
            strokeWidth={1.5}
          />
        </svg>
      ),
    },
    {
      href: "/transactions",
      label: "Transactions",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path d="M3 6h18M3 12h18M3 18h18" strokeWidth={1.5} />
        </svg>
      ),
    },
    {
      href: "/budgeting",
      label: "Budgeting",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path d="M3 7h18v10H3z" strokeWidth={1.5} />
        </svg>
      ),
    },
  ];

  return (
    <nav
      aria-label="Main navigation"
      className="w-16 border-r bg-white hidden md:flex flex-col items-center py-4 gap-6"
    >
      {items.map((it) => {
        const active = pathname === it.href;
        return (
          <Link
            key={it.href}
            href={it.href}
            aria-label={it.label}
            className={`w-10 h-10 flex items-center justify-center rounded-md focus:outline-none focus:ring-2 ${
              active ? "bg-blue-500 text-white" : "bg-gray-100 text-slate-700"
            }`}
          >
            <span className="sr-only">{it.label}</span>
            <Icon>{it.icon}</Icon>
          </Link>
        );
      })}

      <button
        aria-label="Quick add transaction"
        onClick={onQuickAdd}
        className="mt-4 w-10 h-10 flex items-center justify-center rounded-md bg-green-500 text-white"
        title="Quick add"
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path d="M12 5v14M5 12h14" strokeWidth={1.5} />
        </svg>
      </button>
    </nav>
  );
}
