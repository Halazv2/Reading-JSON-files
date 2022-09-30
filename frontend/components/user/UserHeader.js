import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Header() {
  const router = useRouter();
  return (
    <header className="fixed top-0 w-full clearNav z-50 ">
      <div className="max-w-5xl mx-auto flex flex-wrap p-5 justify-between items-center border-b-2 border-gray-700 ">
        <div className="flex flex-row items-center justify-between p-3 md:p-1">
          <a
            href="/"
            className="flex text-3xl text-white font-medium mb-4 md:mb-0"
          >
            <img src="./images/logo.png" alt="" className="w-12 h-12" />
          </a>
        </div>
        <div>
          <div
            className=" text-white cursor-pointer"
            onClick={() => router.push("/")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-10 h-10 "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
              />
            </svg>
            <h1>Profil</h1>
          </div>
        </div>
        <div>
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
            <Link href="/login">
              <button
                type="button"
                className="relative block w-full uppercase bg-red-700 py-2 px-4 border border-transparent rounded-md font-medium text-white hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
              >
                logout
              </button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
