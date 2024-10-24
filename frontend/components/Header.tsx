import React from "react";
import Link from "next/link";
import "tailwindcss/tailwind.css";

const Header = () => {
  return (
    <header className="bg-blue-600 text-white p-4 shadow-md">
      <div className="/container px-[2rem] justify-between w-full /mx-auto flex flex-col md:flex-row gap-3 items-center">
        <div className="text-2xl font-bold text-nowrap">
          <Link href="/">Personal Finance Tracker</Link>
        </div>

        <ul className="flex  gap-[0.4rem] md:gap-[0.5rem] /space-x-4">
          {[
            { title: "Home", link: "/" },
            { title: "Transactions", link: "/transactions" },
            { title: "Budgeting", link: "/budgeting" },
            // { title: "Investment Management", link: "/investment" },
            // { title: "Goal Planning", link: "/planning" },
            { title: "About", link: "/about" },
            { title: "Contact", link: "/contact" },
          ].map((el) => (
            <li
              className="px-2 md:px-4 hover:bg-[rgba(255,255,255,0.15)] cursor-pointer py-1 md:py-2 text-[0.7rem] md:text-sm flex items-center justify-center border-2 border-[rgba(255,255,255,0.1)] rounded-md bg-[rgba(255,255,255,0.1)] transition-all duration-300"
              key={el.title + el.link}
            >
              <Link href={el.link} className="/hover:text-gray-300 text-nowrap">
                {el.title}
              </Link>
            </li>
          ))}
        </ul>
        <div className="relative md:flex  hidden items-center justify-center w-full max-w-[20rem] /mx-auto">
          <div className="absolute top-[9px] left-[12px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              version="1.1"
              id="Capa_1"
              x="0px"
              y="0px"
              viewBox="0 0 513.749 513.749"
              enableBackground="new 0 0 513.749 513.749"
              xmlSpace="preserve"
              width="19"
              height="19"
            >
              <g>
                <path
                  d="M504.352,459.061l-99.435-99.477c74.402-99.427,54.115-240.344-45.312-314.746S119.261-9.277,44.859,90.15   S-9.256,330.494,90.171,404.896c79.868,59.766,189.565,59.766,269.434,0l99.477,99.477c12.501,12.501,32.769,12.501,45.269,0   c12.501-12.501,12.501-32.769,0-45.269L504.352,459.061z M225.717,385.696c-88.366,0-160-71.634-160-160s71.634-160,160-160   s160,71.634,160,160C385.623,314.022,314.044,385.602,225.717,385.696z"
                  fill="#94a3b8"
                />
              </g>
            </svg>
          </div>
          <input
            type="text"
            placeholder="Search Products"
            className="w-full py-2 pl-10 pr-4 text-sm font-normal text-black bg-white border border-gray-400 rounded-md focus:outline-none focus:border-skyText"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
