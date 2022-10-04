import React from 'react';
import { useEffect, useState } from "react";
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import ClassIcon from '@mui/icons-material/Class';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import { getCookie } from "cookies-next";


export default function ProfilMain() {
    const [userdata, setuserdata] = useState("");
    const userfun = () => {
        try {
            const user = JSON.parse(getCookie("user"));
            // console.log(user);
            userdata = user;
            console.log(userdata);
        } catch (error) {
            console.log(error);
        }
    }

    userfun();


    return (
        <section className="text-gray-600 body-font">
            <div className="max-w-5xl pt-36 pb-6 mx-auto">
                <h1 className="text-80 text-center font-4 lh-6 ld-04 font-bold text-white mb-6">
                    <span className="text-red-700">JSON</span> Map
                </h1>
            </div>
            <div className="mb-5 flex justify-center  ">
                <div className="px-28 pt-10 pb-10  border-red-700 shadow-2xl shadow-red-500 ">

                    <div className="max-w-sm rounded overflow-hidden shadow-lg  ">
                        <div className="px-6 py-4 flex justify-center text-white">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-20 h-20 "
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                                />
                            </svg>
                        </div>
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2 text-center">Fullname : {userdata.firstName} {userdata.lastName}
                           
                            </div>
                            <div>
                                <p className="text-white text-base text-start">
                                    <AccountBalanceIcon /> &nbsp; Campus : {userdata.campus}

                                </p>
                            </div>
                            <p className="text-white text-base text-start">
                                <TrendingUpIcon /> &nbsp; Level : {userdata.level}

                            </p>
                            <p className="text-white text-base text-start">
                                <ClassIcon /> &nbsp; Class : {userdata.class}

                            </p>
                            <p className="text-white text-base text-start">
                                <AlternateEmailIcon /> &nbsp; email  : {userdata.email}

                            </p>
                        </div>

                    </div>
                </div>
            </div>
            <div className=" text-center text-red-600 first-letter:uppercase justify-center flex flex-nowrap gap-5 mt-20">
                <div className="px-40 pt-10 pb-10 border-2 border-red-700 shadow-md shadow-red-500">
                </div>
                <div className="px-40 pt-10 pb-10 border-2 border-red-700 shadow-md shadow-red-500">
                </div>
                <div className="px-40 pt-10 pb-10 border-2 border-red-700 shadow-md shadow-red-500">
                </div>
                <div className="px-40 pt-10 pb-10 border-2 border-red-700 shadow-md shadow-red-500">
                </div>
            </div>

        </section>
    );
}    
