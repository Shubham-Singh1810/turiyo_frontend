"use client";
import Navbar from "./componets/Navbar";
import HeroSection from "./componets/HeroSection";
import ContactSection from "./componets/ContactSection";
import Footer from "./componets/Footer";
import HomeSlider from "./componets/HomeSlider";
import { useState } from "react";

export default function Home() {
  const cloudData = [
    {
      img: "https://www.infracloud.io/assets/img/home/ai-cloud-trail-map/model-training-infrastructure.svg",
      heading: "Build GPU Cloud",
      para: "Build an AI Cloud with GPUs or other processing units & open source technologies. Our expertise in bare metal provisioning with Tinkerbell, private cloud with OpenStack and cloud native technologies such as Kubernetes, Prometheus, and Kubeflow have enabled organizations to build private/public GPU cloud.",
      link: "Learn More ->",
    },
    {
      img: "https://www.infracloud.io/assets/img/home/ai-cloud-trail-map/source-code-repo-ci-cd.svg",
      heading: "CI/CD for Code, Data & Models",
      para: "Setting up the right source code practices & a way to continuously integrate and deliver code along with data & models is crucial for the success of an AI platform. We have coached on practices that work & built pipelines for organizations to deliver business goals to production seamlessly.",
      link: "Learn More ->",
    },
    {
      img: "https://www.infracloud.io/assets/img/home/ai-cloud-trail-map/data-prep-workflow-orchestration.svg",
      heading: "Workflow Orchestration",
      para: "Orchestrating the workflows of data pipelines and executing them at scale is crucial to an AI platform. We build, deploy, and scale workflow orchestration systems on scalable infrastructure to execute them at the speed of business needs.",
      link: "Learn More ->",
    },
    {
      img: "https://www.infracloud.io/assets/img/home/ai-cloud-trail-map/model-registry-metadata-stores.svg",
      heading: "Model Registry & Metadata Stores",
      para: "A distributed & stable model registry needed to serve the right model when an application is needed is crucial for an AI platform that is global in nature. It is also crucial to capture the right metadata of models in a registry or separate database, depending on business needs.",
      link: "Learn More ->",
    },
    {
      img: "https://www.infracloud.io/assets/img/home/ai-cloud-trail-map/feature-stores.svg",
      heading: "Feature Stores",
      para: "A feature store that can serve the needs of model training as well as in the prediction request path is needed for the AI platform to deliver value to both sets of customers successfully. We build & deploy these on right infrastructure based on the needs of the business.",
      link: "Learn More ->",
    },

    {
      img: "https://www.infracloud.io/assets/img/home/ai-cloud-trail-map/model-serving.svg",
      heading: "Model Serving",
      para: "Serving models to end users in request path, with accuracy & low latency not only improves user experience but also business value. We deploy and configure the serving components to deliver to users.",
      link: "Learn More ->",
    },
    {
      img: "https://www.infracloud.io/assets/img/home/ai-cloud-trail-map/model-observability-feedback-loops.svg",
      heading: "Model Observability & Feedback Loops",
      para: "Redirecting requests to the right model and observing the accuracy of results & model performance is crucial to ensuring the intended & actual business outcomes are aligned. We use a combination of infra and model observability technologies to achieve this.",
      link: "Learn More ->",
    },
  ];
  const cloudNativeApsData = [
    {
      img: "https://www.infracloud.io/assets/img/home/containerization-img.svg",
      heading: "Containerization & Microservices",
      para: "Helping you start your cloud-native journey by adopting containers and if needed moving from monolithic architecture to microservices architecture. We understand the needs of your business and introduce the right architecture, maximizing the returns of effort and minimizing the TCO (Total Cost of Ownership).",
      link: "Learn More ->",
    },
    {
      img: "https://www.infracloud.io/assets/img/home/ci-cd-img.svg",
      heading: "CI, CD, GitOps & Progressive Delivery",
      para: "Delivering applications to the end user with right quality and fast is key. From microservice to ML models being deployed to Kubernetes or an edge location. We understand the goals and build the right CI/CD architecture with practices such as GitOps & progressive delivery.",
      link: "Learn More ->",
    },
    {
      img: "https://www.infracloud.io/assets/img/home/platform-engineering-&-iac.svg",
      heading: "Platform Engineering & IaC",
      para: "Trusted by CNCF as ‘Kubernetes Certified Service Provider’ (KCSP), we help in designing and building a solid platform for your teams. Our professional Kubernetes consulting services include cloud-native architecture consulting, design, and managed services.",
      link: "Learn More ->",
    },
    {
      img: "https://www.infracloud.io/assets/img/home/observability-img.svg",
      heading: "Observability & Security Platform",
      para: "A platform scales as good as a system that can observe it. We help build an observability system based on needs of the application along the axis of logs, metrics & traces with right dashboards and alerting system. This layer also allows building solid security on top of observed data.",
      link: "Learn More ->",
    },
    {
      img: "https://www.infracloud.io/assets/img/home/service-proxy-img.svg",
      heading: "Networking - Service Mesh, API Gateway",
      para: "Modern applications require a well-designed layer of secure networking that spans within and across clusters of compute. We have implemented Consul, LinkerD, Istio, and commercial distributions of these technologies for customers to build and scale the networking layer.",
      link: "Learn More ->",
    },

    {
      img: "https://www.infracloud.io/assets/img/home/devsecops-compliance.svg",
      heading: "DevSecOps & Compliance",
      para: "Startups, as well as enterprises, consider us trusted service providers for DevSecOps services and policy enforcement. With deep expertise in projects like Calico, OPA, Falco, etc., we help you with end-to-end cloud-native security services.",
      link: "Learn More ->",
    },
    {
      img: "https://www.infracloud.io/assets/img/home/cloud-native-networking.svg",
      heading: "Kubernetes Consulting",
      para: "Based on our deep expertise we offer Kubernetes Consulting and implementation services. We achieve this with our OSS tools, Managed Services, technologies from the partner ecosystem, and unparalleled understanding of the enterprise value stream.",
      link: "Learn More ->",
    },
  ];
  const cloudConsultingData = [
    {
      img: "https://www.infracloud.io/assets/img/home/ai-cloud-trail-map/model-training-infrastructure.svg",
      heading: "Build GPU Cloud",
      para: "Build an AI Cloud with GPUs or other processing units & open source technologies. Our expertise in bare metal provisioning with Tinkerbell, private cloud with OpenStack and cloud native technologies such as Kubernetes, Prometheus, and Kubeflow have enabled organizations to build private/public GPU cloud.",
      link: "Learn More ->",
    },
    {
      img: "https://www.infracloud.io/assets/img/home/ai-cloud-trail-map/source-code-repo-ci-cd.svg",
      heading: "CI/CD for Code, Data & Models",
      para: "Setting up the right source code practices & a way to continuously integrate and deliver code along with data & models is crucial for the success of an AI platform. We have coached on practices that work & built pipelines for organizations to deliver business goals to production seamlessly.",
      link: "Learn More ->",
    },
    {
      img: "https://www.infracloud.io/assets/img/home/ai-cloud-trail-map/data-prep-workflow-orchestration.svg",
      heading: "Workflow Orchestration",
      para: "Orchestrating the workflows of data pipelines and executing them at scale is crucial to an AI platform. We build, deploy, and scale workflow orchestration systems on scalable infrastructure to execute them at the speed of business needs.",
      link: "Learn More ->",
    },
    {
      img: "https://www.infracloud.io/assets/img/home/ai-cloud-trail-map/model-registry-metadata-stores.svg",
      heading: "Model Registry & Metadata Stores",
      para: "A distributed & stable model registry needed to serve the right model when an application is needed is crucial for an AI platform that is global in nature. It is also crucial to capture the right metadata of models in a registry or separate database, depending on business needs.",
      link: "Learn More ->",
    },
    {
      img: "https://www.infracloud.io/assets/img/home/ai-cloud-trail-map/feature-stores.svg",
      heading: "Feature Stores",
      para: "A feature store that can serve the needs of model training as well as in the prediction request path is needed for the AI platform to deliver value to both sets of customers successfully. We build & deploy these on right infrastructure based on the needs of the business.",
      link: "Learn More ->",
    },

    {
      img: "https://www.infracloud.io/assets/img/home/ai-cloud-trail-map/model-serving.svg",
      heading: "Model Serving",
      para: "Serving models to end users in request path, with accuracy & low latency not only improves user experience but also business value. We deploy and configure the serving components to deliver to users.",
      link: "Learn More ->",
    },
    {
      img: "https://www.infracloud.io/assets/img/home/ai-cloud-trail-map/model-observability-feedback-loops.svg",
      heading: "Model Observability & Feedback Loops",
      para: "Redirecting requests to the right model and observing the accuracy of results & model performance is crucial to ensuring the intended & actual business outcomes are aligned. We use a combination of infra and model observability technologies to achieve this.",
      link: "Learn More ->",
    },
  ];
  const [selectedTab, setSelectedTab] = useState("Cloud");
  const [sliderData, setSliderData] = useState(cloudData);
  return (
    <div>
      <Navbar />
      <HeroSection />
      {/* We are a company which enables start-up and enterprise section start */}
      <div className="my-5 py-5 companyStripSection p-2">
        <h3 className="text-center mb-4">
          We are a company which enables <span style={{ color: "#C0202E" }}>start-up and enterprise section</span>
        </h3>
        <p className="text-lg-center mx-lg-5 p-2" style={{textAlign:"justify"}}>
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
      <div className="d-flex justify-content-center mb-4">
        <div className="d-flex justify-content-center shadow-sm   p-1 navTabMain">
          <div
            onClick={() => {
              setSliderData(cloudData);
              setSelectedTab("Cloud");
            }}
            className={"navTab p-2 px-3  " + (selectedTab == "Cloud" && "bg-light shadow opacity1")}
          >
            Cloud
          </div>
          <div
            onClick={() => {
              setSliderData(cloudNativeApsData);
              setSelectedTab("Cloud Native Aps");
            }}
            className={"navTab p-2 px-3  " + (selectedTab == "Cloud Native Aps" && "bg-light shadow opacity1")}
          >
            Cloud Native Aps
          </div>
          <div
            onClick={() => {
              setSliderData(cloudConsultingData);
              setSelectedTab("Cloud Consulting");
            }}
            className={"navTab p-2 px-3  " + (selectedTab == "Cloud Consulting" && "bg-light shadow opacity1")}
          >
            Cloud Consulting
          </div>
        </div>
      </div>

      <HomeSlider data={sliderData} />
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
              <div className="col-lg-4 col-12">
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
            <div className="col-lg-5 col-12">
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
              <p className="mb-5 mb-lg-0">
                Be it an enterprise with datacenters across the world or a rapidly scaling startup, we got it covered!
              </p>
            </div>
            <div className="row col-lg-7 col-12 m-0 p-0 ">
              {[1, 2, 3, 4]?.map((v, i) => {
                return (
                  <div className={"col-lg-6 col-12 m-0 p-0  "}>
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
      <Footer />
    </div>
  );
}
