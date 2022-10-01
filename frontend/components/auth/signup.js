import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function SignUp({ setIsLogin }) {
  const router = useRouter();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [campus, setCampus] = useState("");
  const [level, setLevel] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [Class, setClass] = useState("");
  const api = "http://localhost:9000/users";
  const signup = async () => {
    await fetch(api, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        firstName,
        lastName,
        email,
        password,
        campus,
        level,
        class: Class,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status == 201) {
          router.push("/Auth");

        } else {
          setError(data.message);
        }
      })
      .catch((err) => {
        console.log("catch: ", err);
      });
  };
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
              signup();
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
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
                <input
                  type="text"
                  id="lastName"
                  placeholder="Last Name"
                  className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-orange-500 focus:bg-white focus:outline-none"
                  autoFocus
                  autoComplete="true"
                  required
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
              <div className="flex gap-3">
                <select
                  name="campus"
                  id="campus"
                  className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-orange-500 focus:bg-white focus:outline-none"
                  required
                  value={campus}
                  onChange={(event) => setCampus(event.target.value)}
                >
                  <option value="" disabled defaultValue>
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
                  value={level}
                  onChange={(event) => setLevel(event.target.value)}
                >
                  <option value="" disabled defaultValue>
                    Select your level
                  </option>
                  <option value="A1">A1</option>
                  <option value="A2">A2</option>
                </select>
              </div>
              <select
                name="level"
                id="level"
                className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-orange-500 focus:bg-white focus:outline-none"
                required
                value={Class}
                onChange={(event) => setClass(event.target.value)}
              >
                <option value="" disabled defaultValue>
                  Select your class
                </option>
                <option value="Ada lovelace">Ada Lovelace</option>
                <option value="Alan turing">Alan Turing</option>
                <option value="Robert Noyce">Robert Noyce</option>
                <option value="margaret hamilton">Margaret Hamilton</option>
              </select>
              <input
                type="email"
                id="email"
                placeholder="email"
                className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-orange-500 focus:bg-white focus:outline-none"
                autoFocus
                autoComplete="true"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                id="password"
                placeholder="password"
                className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-orange-500 focus:bg-white focus:outline-none"
                autoFocus
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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
