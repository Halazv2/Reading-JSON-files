import React from "react";
import Link from 'next/link'

export default function Header() {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  const [flyer, setFlyer] = React.useState(false);
  const [flyerTwo, setFlyerTwo] = React.useState(false);

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
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
            <Link href="/login">
              <button
                type="button"
                className="relative block w-full uppercase bg-red-700 py-2 px-4 border border-transparent rounded-md font-medium text-white hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
              >
                sign in / sign up
              </button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
