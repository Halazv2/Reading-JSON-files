import Head from "next/head";
import Header from "../components/user/UserHeader";
import Main from "../components/user/Main";
import Footer from "../components/Footer";
import { NextSeo } from "next-seo";
import { useEffect, useState } from "react";
import { getCookie } from "cookies-next";
import { useRouter } from "next/router";
import Upload from "../components/user/Upload";

export default function Home() {
  const router = useRouter();
  const user = getCookie("user");
  const [upload, setUpload] = useState(true);
  useEffect(() => {
    if (!user) {
      router.push("/Auth");
    } else {
      return;
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
        <title>Json Map</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Header />
      {upload ? (
        <Main setUpload={setUpload} />
      ) : (
        <Upload setUpload={setUpload} />
      )}
      <Footer />
      {/* <h1 class="text-3xl font-bold underline text-white">Hello world!</h1> */}
    </div>
  );
}
