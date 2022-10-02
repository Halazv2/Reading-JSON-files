import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Login from "../../components/auth/login";
import Signup from "../../components/auth/signup";
import { getCookie } from "cookies-next";

export default function Auth() {
  const [isLogin, setIsLogin] = useState(true);

  const router = useRouter();
  const user = getCookie("user");

  useEffect(() => {
    if (!user) {
      return;
    } else {
      router.push("/home");
    }
  }, []);
  return (
    <div className="bg-black ">
      <div className="flex justify-center h-screen">
        <div className="hidden bg-cover lg:block lg:w-2/3">
          <div className="flex items-center h-full">
            <img
              src="./images/login.gif"
              className="w-full h-full object-cover"
              alt=""
            />
          </div>
        </div>
        {isLogin ? (
          <Login setIsLogin={setIsLogin} />
        ) : (
          <Signup setIsLogin={setIsLogin} />
        )}
      </div>
    </div>
  );
}
