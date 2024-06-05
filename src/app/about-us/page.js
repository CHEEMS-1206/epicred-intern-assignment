import Head from "next/head";
import Header from "../../components/Header";
import Banner from "../../components/Banner";
import About from "../../components/About";
import VisionMission from "../../components/VisionMission";
import ImpactNumbers from "../../components/ImpactfulNumbers";
import Founders from "../../components/Founders";
import Services from "../../components/Services";
import ContactForm from "../../components/ContactForm";
import Footer from "../../components/Footer";

export default function AboutUs() {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
        <title>About Us - Epicred</title>
      </Head>
      <Header />
      <Banner />
      <About />
      <VisionMission />
      <ImpactNumbers />
      <Founders />
      <Services />
      <ContactForm />
      <Footer />
    </>
  );
}
