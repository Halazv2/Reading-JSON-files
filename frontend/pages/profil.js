import Head from "next/head";
import Header from "../components/user/UserHeader";
import ProfilMain from "../components/user/ProfilMain";
// import { NextSeo } from "next-seo";
import { useEffect, useState } from "react";
import { getCookie } from "cookies-next";
import { useRouter } from "next/router";

export default function Profil() {
    const router = useRouter();
    const user = getCookie("user");
    
    useEffect(() => {
      if (!user) {
        router.push("/Auth");
      }
      else{
        return;
      }
    }, []);
    return (
      <div className="text-black bg-black">
       
        <Head>
          <title>My Acount</title>
          <link rel="icon" href="/favicon.png" />
        </Head>
        <Header />
        <ProfilMain />
     <h1 className="text-white"> </h1>   
        </div>
    );
    }