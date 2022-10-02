import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { NextSeo } from "next-seo";

export default function Contact() {
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
        <title>opss</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className="flex flex-col justify-center items-center mx-auto mt-52 text-center max-w-2x1 gap-14">
        <a
          className="w-64 p-1 mx-auto font-bold text-center text-white border border-gray-500 rounded-lg sm:p-4 "
          href="/"
        >
          Return Home
        </a>
        <div className="flex items-center h-full mt-7">
            <img
              src="./images/404.gif"
              className="w-full h-full object-cover"
              alt=""
            />
          </div>
        
        <br />
       
      </div>
      <Footer />
    </div>
  );
}
