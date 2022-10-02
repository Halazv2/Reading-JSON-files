import Head from "next/head";
import Header from "../components/Header";
import Main from "../components/Main";
import UserMain from "../components/user/Main";
import UserHeader from "../components/user/UserHeader";
import Footer from "../components/Footer";
import { NextSeo } from "next-seo";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { getCookie } from "cookies-next";

export default function Home() {
  const router = useRouter();
  const user = getCookie("user");
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    if (!user) {
      setIsLogin(false);
    }
    else{
      setIsLogin(true);
    }
  }, []);
  return (
    <div className="text-black bg-black">
      <NextSeo
        title="Home: Json Map"
        description="Json Map is a free online tool to visualize and explore JSON data."
        canonical="https://jsonmap.com/"
        openGraph={{
          url: "https://jsonmap.com/",
        }}
      />
      <Head>
        <title>Json Map - Visualize and explore JSON data online</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      {isLogin? (
        <>
          <UserHeader />
          <UserMain />
        </>
      ) : (
        <>
          <Header />
          <Main />
        </>
      )}

      <Footer />
    </div>
  );
}
