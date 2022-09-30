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
                                    htmlFor="number"
                                    className="block mb-2 text-sm text-black dark:text-black"
                                >
                                    Numéro de Téléphone
                                </label>
                                <input
                                    type="text"
                                    id="number"
                                    placeholder="06 00 00 00 00"
                                    onChange={(e) => setPhonenumber(e.target.value)}
                                    className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-orange-500 focus:bg-white focus:outline-none"
                                    autoFocus
                                    autoComplete="true"
                                    required
                                />
                            </div>

                            <div className="mt-6">
                                <div className="flex justify-between mb-2">
                                    <label
                                        htmlFor="password"
                                        className="text-sm text-black dark:text-black"
                                    >
                                        Mot de Passe
                                    </label>
                                </div>

                                <input
                                    type="password"
                                    id="password"
                                    placeholder="******"
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-orange-500 focus:bg-white focus:outline-none"
                                    autoFocus
                                    autoComplete="true"
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
                                    s'identifier
                                </button>
                            </div>
                            <p className="mt-6 text-sm text-center text-gray-400">
                                vous n'avez pas de compte ? créez un compte
                                <a
                                    href="#"
                                    className="text-orange-500 focus:outline-none focus:underline hover:underline"
                                ></a>
                                .
                            </p>
                            <div className="flex justify-center gap-2">
                                <div>
                                    <a href="">
                                        <button
                                            type="button"
                                            className="flex mt-3 w-48 h-14 bg-black text-white rounded-xl items-center justify-center"
                                        >
                                            <div className="mr-3">
                                                <svg viewBox="0 0 384 512" width="30">
                                                    <path
                                                        fill="currentColor"
                                                        d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"
                                                    ></path>
                                                </svg>
                                            </div>
                                            <div>
                                                <div className="text-xs">Télécharger sur le</div>
                                                <div className="text-xl font-semibold font-sans -mt-1">
                                                    App Store
                                                </div>
                                            </div>
                                        </button>
                                    </a>
                                </div>
                                <div>
                                    <a
                                        href="https://play.google.com/store/games?gl=MA&utm_source=emea_Med&utm_medium=hasem&utm_content=Nov2020&utm_campaign=Evergreen&pcampaignid=MKT-EDR-emea-ma-1001280-Med-hasem-py-Evergreen-Nov2020-Text_Search_BKWS%7CONSEM_kwid_43700008708650955&referrer=gclid%3DCj0KCQjw_viWBhD8ARIsAH1mCd5W3pAS1w417x6_P5usrCydzOerEywviiYUGj5Yp4lELubxTQRaPAMaAiODEALw_wcB&gref=EkUKPQoJCPD--JYGEPwBEiwAfWYJ3lbekBLXDjXvHr8_m6ysLJ3M56sTLC-KJhQaPliniUQu5vFNBFo8AxoCI4MQAvD_BwEY4_bcmgM&gclid=Cj0KCQjw_viWBhD8ARIsAH1mCd5W3pAS1w417x6_P5usrCydzOerEywviiYUGj5Yp4lELubxTQRaPAMaAiODEALw_wcB&gclsrc=aw.ds"
                                        target="_blank"
                                    >
                                        <button
                                            type="button"
                                            className="flex mt-3 w-48 h-14 bg-black text-white rounded-lg items-center justify-center"
                                        >
                                            <div className="mr-3">
                                                <svg viewBox="30 336.7 120.9 129.2" width="30">
                                                    <path
                                                        fill="#FFD400"
                                                        d="M119.2,421.2c15.3-8.4,27-14.8,28-15.3c3.2-1.7,6.5-6.2,0-9.7  c-2.1-1.1-13.4-7.3-28-15.3l-20.1,20.2L119.2,421.2z"
                                                    ></path>
                                                    <path
                                                        fill="#FF3333"
                                                        d="M99.1,401.1l-64.2,64.7c1.5,0.2,3.2-0.2,5.2-1.3  c4.2-2.3,48.8-26.7,79.1-43.3L99.1,401.1L99.1,401.1z"
                                                    ></path>
                                                    <path
                                                        fill="#48FF48"
                                                        d="M99.1,401.1l20.1-20.2c0,0-74.6-40.7-79.1-43.1  c-1.7-1-3.6-1.3-5.3-1L99.1,401.1z"
                                                    ></path>
                                                    <path
                                                        fill="#3BCCFF"
                                                        d="M99.1,401.1l-64.3-64.3c-2.6,0.6-4.8,2.9-4.8,7.6  c0,7.5,0,107.5,0,113.8c0,4.3,1.7,7.4,4.9,7.7L99.1,401.1z"
                                                    ></path>
                                                </svg>
                                            </div>
                                            <div>
                                                <div className="text-xs">Télécharger sur le</div>
                                                <div className="text-xl font-semibold font-sans -mt-1">
                                                    Google Play
                                                </div>
                                            </div>
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;