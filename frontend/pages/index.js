import Head from "next/head";
import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";
import { NextSeo } from "next-seo";

export default function Home() {
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
        <title>
          Json Map - Visualize and explore JSON data online
        </title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Header />
      <Main />
      <Footer />
      {/* <h1 class="text-3xl font-bold underline">Hello world!</h1> */}
    </div>
  );
}
