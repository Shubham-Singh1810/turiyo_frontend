import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "./componets/Navbar";
import HeroSection from "./componets/HeroSection";
import AboutSection from "./componets/AboutSection";
import CounterSection from "./componets/CounterSection";
import ServicesSection from "./componets/ServicesSection";
import PricingSection from "./componets/PricingSection";
import ContactSection from "./componets/ContactSection";
import Footer from "./componets/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <section id="home">
        <HeroSection />
      </section>
      <section id="about">
        <AboutSection />
      </section>
      <section id="services">
        <ServicesSection />
      </section>
      <section id="pricing">
        <PricingSection />
      </section>
      <section id="contact">
        <ContactSection />
      </section>
      <Footer/>
    </>
  );
}
