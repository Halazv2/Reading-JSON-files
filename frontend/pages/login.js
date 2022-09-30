import React, { useState } from "react";
import Photo from "../public/images/login.jpg";
// import logo from "../../assets/logo.png";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";

function Login() {
    return (
        <div className="bg-white ">
            <div className="flex justify-center h-screen">
                <div className="hidden bg-cover lg:block lg:w-2/3">
                    <div className="flex items-center h-full">
                        <img src={Photo} className="w-full h-full object-cover" alt="" />
                    </div>
                </div>

                <div className="flex items-center w-full max-w-md px-6 mx-auto lg:w-2/6">
                    <div className="flex-1">
                        <div className="text-center">
                            {/* <div className="flex justify-center gap-2">
                                <Link to="/">
                                    <img src={logo} width={100} height={100} />
                                </Link>
                            </div> */}

                            <h2 className="text-4xl font-bold text-center text-black">
                                Bienvenue à
                            </h2>
                            <h2 className="text-4xl font-bold text-center text-orange-500">
                                GST-Avicole
                            </h2>
                        </div>

                        <div className="mt-8">
                            <div>
                                <label
                                    htmlFor="email"
                                    className="block mb-2 text-sm text-black dark:text-black"
                                >
                                    email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    placeholder="email@gmail.com"
                                    className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-orange-500 focus:bg-white focus:outline-none"
                                    autoFocus
                                    autoComplete="true"
                                    required
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="password"
                                    className="block mb-2 text-sm text-black dark:text-black"
                                >
                                    password
                                </label>
                                <input
                                    type="password"
                                    id="password"
                                    placeholder="*******"
                                    className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-orange-500 focus:bg-white focus:outline-none"
                                    autoFocus
                                    required
                                />
                            </div>

                            
                            <div className="text-right mt-2">
                                <Link to="/forget-password">
                                    <div className="text-sm font-semibold text-gray-700 hover:text-orange-700 focus:text-blue-700">
                                        mot de passe oublié ?
                                    </div>
                                </Link>
                            </div>

                            <div className="mt-6">
                                <button
                                    type="submit"
                                    onClick={() => {
                                        login();
                                    }}
                                    className="w-full px-4 py-2 tracking-wide text-white
                  transition-colors duration-200 transform bg-orange-500
                  rounded-md hover:bg-orange-400 focus:outline-none
                  focus:bg-orange-400 focus:ring focus:ring-orange-300
                  focus:ring-opacity-50"
                                >
                                    signup
                                </button>
                            </div>
                            <p className="mt-6 text-sm text-center text-gray-400">
                                
                                <a
                                    href="#"
                                    className="text-orange-500 focus:outline-none focus:underline hover:underline"
                                ></a>
                                .
                            </p>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;