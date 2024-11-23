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
import HomeCardGroup from "./componets/HomeCardGroup";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      {/* We are a company which enables start-up and enterprise section start */}
      <div className="my-5 py-5 companyStripSection">
        <h3 className="text-center mb-4">We are a company which enables <span style={{color:"#C0202E"}}>start-up and enterprise section</span></h3>
        <p className="text-center mx-lg-5">
          A team of young technology enthusiasts focused to carve out the path for delivering high quality software
          products to solve the complex business problems using next generation technologies. Tequre emphases on easing
          out the adoption of next generation technologies like blockchain, big data, artificial intelligence and cloud
          computing. Our prime target is to build and offer SaaS services that are modular, service-oriented with micro
          service architecture and provide sophisticated solution to the business problems for customers. At Tequre, we
          aim to deliver seamless customer experience, business efficiency and actionable insights in booming
          technology.
        </p>
      </div>
      {/* We are a company which enables start-up and enterprise section end */}

      {/* We are a company which enables start-up and enterprise section start */}
      <div className="my-5 py-5 companyStripSection" style={{background:"#fff"}}>
        <div className="row m-0 p-0">
          <div className="col-md-6 col-12 my-auto">
          <h3 className="text-center mb-4">Brands That  <span style={{color:"#C0202E"}}>Trust Us</span></h3>
        <p className="text-center mx-lg-5">
        We are a trusted development partner for Many more companies and established brands.
        </p>
          </div>
          <div className="col-md-6 col-12">
            <div className="row">
              <div className="col-6  p-2  d-flex justify-content-end " style={{height:"140px"}}>
                
                <img src="https://tequre.com/wp-content/uploads/2020/05/genx.jpg" className="img-fluid m-2 shadow rounded"/>
               
                
              </div>
              <div className="col-6 p-0 d-flex  justify-content-start " style={{height:"140px"}}>
                <img src="https://tequre.com/wp-content/uploads/2020/05/CastleBridge.jpg" className="img-fluid m-2 shadow rounded"/>
              </div>
              <div className="col-6  p-0 d-flex justify-content-end " style={{height:"140px"}}>
                <img src="https://tequre.com/wp-content/uploads/2020/05/shahi.jpg" className="img-fluid m-2 shadow rounded"/>
              </div>
              <div className="col-6 p-0 d-flex justify-content-start " style={{height:"140px"}}>
                <img src="https://tequre.com/wp-content/uploads/2020/05/azur3media.jpg" className="img-fluid m-2 shadow rounded"/>
              </div>

            </div>
          </div>
        </div>
        
      </div>
      {/* We are a company which enables start-up and enterprise section end */}
      {/* <HomeCardGroup/> */}
    </>
  );
}
