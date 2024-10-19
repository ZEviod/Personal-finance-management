import React from "react";
import Link from "next/link";
import "tailwindcss/tailwind.css";

const Header = () => {
  return (
		<header className="bg-blue-600 text-white p-4 shadow-md">
			<div className="container mx-auto flex flex-row gap-3 items-center">
				<div className="logo text-2xl font-bold">
					<Link href="/">Personal Finance Tracker</Link>
				</div>
				<div className="relative flex items-center justify-center w-full max-w-md mx-auto">
					<input
						type="text"
						placeholder="Search Products"
						className="w-full py-2 pl-10 pr-4 text-sm font-normal text-black bg-white border border-gray-400 rounded-md focus:outline-none focus:border-skyText"
					/>
				</div>
				<ul className="flex space-x-4">
					<li>
						<Link href="/" className="hover:text-gray-300">
							Home
						</Link>
					</li>
					<li>
						<Link href="/transactions" className="hover:text-gray-300">
							Transactions
						</Link>
					</li>
					<li>
						<Link href="/budgeting" className="hover:text-gray-300">
							Budgeting
						</Link>
					</li>
					<li>
						<Link href="/investment" className="hover:text-gray-300">
							Investment Management
						</Link>
					</li>
					<li>
						<Link href="/planning" className="hover:text-gray-300">
							Goal Planning
						</Link>
					</li>
					<li>
						<Link href="/about" className="hover:text-gray-300">
							About
						</Link>
					</li>
					<li>
						<Link href="/contact" className="hover:text-gray-300">
							Contact
						</Link>
					</li>
				</ul>
			</div>
		</header>
	);
};

export default Header;
