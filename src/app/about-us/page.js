import Head from "next/head";
import Header from "../../components/Header";
import Banner from "../../components/Banner";
import About from "../../components/About";

export default function AboutUs() {
  return (
    <>
      <Head>
        <title>About Us - Epicred</title>
      </Head>
      <Header />
      <Banner />
      <About />
      <main>
      </main>
    </>
  );
}
