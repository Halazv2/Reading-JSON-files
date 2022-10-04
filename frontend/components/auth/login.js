import { useRouter } from "next/router";
import { useState } from "react";
import { setCookie } from "cookies-next";
const Login = ({ setIsLogin }) => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const api = "http://localhost:9000/login";

  const login = async () => {
    console.log(email, password);
    // return;
    await fetch(api, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({ email, password }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "success") {
          router.push("/home");
          setCookie("user", data.data[0], {
            maxAge: 6000,
          });
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
              login();
            }}
          >
            <div className="flex flex-col gap-4">
              <input
                type="email"
                id="email"
                placeholder="email"
                className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-orange-500 focus:bg-white focus:outline-none"
                autoFocus
                autoComplete="true"
                required
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
              <input
                type="password"
                id="password"
                placeholder="password"
                className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-orange-500 focus:bg-white focus:outline-none"
                autoFocus
                required
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
            </div>

            <div
              className="text-right mt-2"
              onClick={() => {
                setIsLogin(false);
              }}
            >
              <div className="text-start text-sm font-semibold text-white hover:text-red-700">
                Dont have an account?
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
                sign in
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
};

export default Login;
