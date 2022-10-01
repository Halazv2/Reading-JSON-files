import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function SignUp({ setIsLogin }) {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  return (
    <div className="flex items-center w-full max-w-md px-6 mx-auto lg:w-2/6">
      <div className="flex-1">
        <div className="text-center">
          <div className="flex justify-center gap-2 mb-7">
            <img
              src="./images/simploline.png"
              onClick={() => router.push("/")}
              className="cursor-pointer"
              width={100}
              height={100}
            />
          </div>
          <h2 className="text-4xl font-bold text-center text-white">
            Welcom to
          </h2>
          <h2 className="text-4xl font-bold text-center text-red-700">
            JSON Crack
          </h2>
        </div>

        <div className="mt-8">
          <div className="text-red-600 text-center first-letter:uppercase ">
            {error}
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              login();
            }}
          >
            <div className="flex flex-col gap-4">
              <div className="flex gap-3">
                <input
                  type="text"
                  id="firstName"
                  placeholder="First Name"
                  className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-orange-500 focus:bg-white focus:outline-none"
                  autoFocus
                  autoComplete="true"
                  required
                />
                <input
                  type="text"
                  id="lastName"
                  placeholder="Last Name"
                  className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-orange-500 focus:bg-white focus:outline-none"
                  autoFocus
                  autoComplete="true"
                  required
                />
              </div>
              <div className="flex gap-3">
                <select
                  name="campus"
                  id="campus"
                  className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-orange-500 focus:bg-white focus:outline-none"
                  required
                >
                  <option value="" disabled selected>
                    Select your campus
                  </option>
                  <option value="Safi">Safi</option>
                  <option value="Youssoufia">Youssoufia</option>
                </select>
                <select
                  name="level"
                  id="level"
                  className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-orange-500 focus:bg-white focus:outline-none"
                  required
                >
                  <option value="" disabled selected>
                    Select your level
                  </option>
                  <option value="A1">A1</option>
                  <option value="A2">A2</option>
                </select>
              </div>
              <input
                type="email"
                id="email"
                placeholder="email"
                className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-orange-500 focus:bg-white focus:outline-none"
                autoFocus
                autoComplete="true"
                required
              />
              <input
                type="password"
                id="password"
                placeholder="password"
                className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-orange-500 focus:bg-white focus:outline-none"
                autoFocus
                required
              />
            </div>

            <div
              className="text-right mt-2"
              onClick={() => {
                setIsLogin(true);
              }}
            >
              <div className="text-end text-sm font-semibold text-white hover:text-red-700">
                <h1>Already have an account?</h1>
              </div>
            </div>
            <div className="mt-6">
              <button
                type="submit"
                className="w-full px-4 py-2 tracking-wide text-white
                  transition-colors duration-200 transform bg-red-700
                  rounded-md hover:bg-red-600 focus:outline-none
                  focus:bg-red-500 focus:ring focus:ring-orange-300
                  focus:ring-opacity-50"
              >
                Sign In
              </button>
            </div>
            <p className="mt-6 text-sm text-center text-gray-400">
              <a
                href="#"
                className="text-orange-500 focus:outline-none focus:underline hover:underline"
              ></a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
