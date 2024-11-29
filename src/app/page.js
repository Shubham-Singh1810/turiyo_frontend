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
        <h3 className="text-center mb-4">
          We are a company which enables <span style={{ color: "#C0202E" }}>start-up and enterprise section</span>
        </h3>
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
      <div className="my-5 py-5 companyStripSection" style={{ background: "#fff" }}>
        <div className="row m-0 p-0">
          <div className="col-md-6 col-12 my-auto">
            <h3 className="text-center mb-4">
              Brands That <span style={{ color: "#C0202E" }}>Trust Us</span>
            </h3>
            <p className="text-center mx-lg-5">
              We are a trusted development partner for Many more companies and established brands.
            </p>
          </div>
          <div className="col-md-6 col-12">
            <div className="row">
              <div className="col-6  p-2  d-flex justify-content-end " style={{ height: "140px" }}>
                <img
                  src="https://tequre.com/wp-content/uploads/2020/05/genx.jpg"
                  className="img-fluid m-2 shadow rounded"
                />
              </div>
              <div className="col-6 p-0 d-flex  justify-content-start " style={{ height: "140px" }}>
                <img
                  src="https://tequre.com/wp-content/uploads/2020/05/CastleBridge.jpg"
                  className="img-fluid m-2 shadow rounded"
                />
              </div>
              <div className="col-6  p-0 d-flex justify-content-end " style={{ height: "140px" }}>
                <img
                  src="https://tequre.com/wp-content/uploads/2020/05/shahi.jpg"
                  className="img-fluid m-2 shadow rounded"
                />
              </div>
              <div className="col-6 p-0 d-flex justify-content-start " style={{ height: "140px" }}>
                <img
                  src="https://tequre.com/wp-content/uploads/2020/05/azur3media.jpg"
                  className="img-fluid m-2 shadow rounded"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* We are a company which enables start-up and enterprise section end */}
      {/* testimonial start */}
      <div className="my-5 py-5 companyStripSection">
        <h3 className="text-center mb-4">
          <span style={{ color: "#C0202E" }}>What do our Customers Say about us</span>
        </h3>
        <div className="row m-0 p-0 ">
          {[1, 2, 3]?.map((v, i) => {
            return (
              <div className="col-4 ">
                <div className="bg-light p-3 m-2 shadow rounded">
                  <div className="d-flex justify-content-center mb-3">
                    <div className="d-flex align-items-center" style={{ opacity: "0.8" }}>
                      <h1 className="mb-0 me-3">
                        <i className="fa fa-user" style={{ position: "relative", top: "-5px" }}></i>
                      </h1>
                      <div>
                        <h6 className="mb-0">KT Verma</h6>
                        <p className="mb-0">Co-founder, USA</p>
                      </div>
                    </div>
                  </div>
                  <p className="" style={{ textAlign: "justify" }}>
                    “InfraCloud was quickly able to set up a small team and realize our elasticity vision. Their
                    expertise in working with early-stage features of Kubernetes was second only to their flexibility in
                    quickly adjusting course as we discovered simpler/better tech options along the way. ”
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {/* testimonial end */}
      {/* testimonial start */}
      <div className=" py-5 companyStripSection navPopBg" style={{ marginTop: "-50px" }}>
        <div className="container">
          <div className="row m-0 p-0">
            <div className="col-5">
              <img
                className="img-fluid my-3"
                src="https://www.infracloud.io/assets/img/home/ai-cloud-trail-map/model-observability-feedback-loops.svg"
              />
              <h3 className=" mb-3">
                <span style={{ color: "#C0202E" }}>We Understand the Nitty-Gritty!</span>
              </h3>
              <p>
                Gain leverage with our proven artificial intelligence expertise & industry exposure. Working with 100+
                clients, we know the criticalities, compliances & the importance of getting things right in the first
                go.
              </p>
              <p>
                Be it an enterprise with datacenters across the world or a rapidly scaling startup, we got it covered!
              </p>
            </div>
            <div className="row col-7 m-0 p-0 ">
              {[1, 2, 3, 4]?.map((v, i) => {
                return (
                  <div className={"col-6 m-0 p-0 "}>
                    <div className={"  p-3 shadow-sm bg-light mx-2 mb-3"}>
                      <div className="d-flex justify-content-center mb-3">
                        <div className="d-flex align-items-center ">
                          <div className="p-1 px-2 rounded shadow-sm bg-light me-3">
                            {" "}
                            <img
                              src="https://cdn-icons-png.flaticon.com/128/2175/2175515.png"
                              style={{ height: "30px", width: "30px" }}
                            />
                          </div>

                          <div style={{ opacity: "0.8" }}>
                            <h4 className="mb-0">Banking & Finance</h4>
                          </div>
                        </div>
                      </div>
                      <p className="" style={{ textAlign: "justify" }}>
                        “InfraCloud was quickly able to set up a small team and realize our elasticity vision. Their
                        expertise in working with early-stage features of Kubernetes was second only to their
                        flexibility in quickly adjusting course as we discovered simpler/better tech options along the
                        way. ”
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      {/* testimonial end */}
      {/* <HomeCardGroup/> */}
      <ContactSection />
      <Footer/>
    </>
  );
}
