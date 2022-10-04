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
        
        <div className="flex items-center">
            <img
              src="./images/404.gif"
              className="w-full h-96 object-cover"
              alt=""
            />
          </div>
          <a
          className="w-64 p-1 mx-auto font-bold text-center text-white border border-gray-500 rounded-lg sm:p-4 "
          href="/"
        >
          Return Home
        </a>
        <br />
       
      </div>
      <Footer />
    </div>
  );
}
