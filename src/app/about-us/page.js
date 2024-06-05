import Head from "next/head";
import Header from "../../components/Header";
import Banner from "../../components/Banner";
import About from "../../components/About";
import VisionMission from "../../components/VisionMission";
import ImpactNumbers from "../../components/ImpactfulNumbers";
import Founders from "../../components/Founders";
import Services from "../../components/Services";
import ContactForm from "../../components/ContactForm";

export default function AboutUs() {
  return (
    <>
      <Head>
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
    </>
  );
}
