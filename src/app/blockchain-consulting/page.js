"use client";
import React from "react";
import { useState } from "react";
import HorizontalMove from "../componets/HorizontalMove";
import Nitty_Gritty from "../componets/Nitty_Gritty";
import WeOpenSource from "../componets/WeOpenSource";
import Footer from "../componets/Footer";
import Slider from "react-slick";
import Navbar from "../componets/Navbar";

function page() {
  const [selectedItem, setSelectedItem] = useState(null);

  // Sample array of items
  const items = [
    {
      id: 1,
      name: "How can Backstage consultants help my organization?",
      details:
        "When choosing a cloud native product development partner, proof of the team’s expertise & experience with cloud native is essential. InfraCloud is a Kubernetes Certified Service Partner (KCSP) and CNCF silver member. The team includes 4 CKS, 51 CKA & 19 Certified Kubernetes Application Developers who have worked with 100+ clients. InfraCloud is also a winner of the Stratus 2023 award in the cloud native category.",
    },
    {
      id: 2,
      name: "When should you move to Backstage?",
      details:
        "Once you schedule a meeting with our cloud native experts, our team will chat with you to gain a deeper understanding of your project, specific requirements, and goals. Once the SoW is agreed upon, our team will kick off the project and keep you updated through a dedicated channel & regular sync-ups for communication and support.",
    },
    {
      id: 3,
      name: "What is the typical process for engaging your Backstage consulting services?",
      details:
        "The project does not end once the product is developed. Our team will ensure it is scalable, secure, and compliant. Depending on SoW, we will produce the training documents and plans to improve its adoption in cloud native community. If you wish, you can also receive support for your product, where we will keep updating and upgrading it to enhance its capabilities.",
    },
    {
      id: 4,
      name: "We are looking for a customized developer platform, how can you help?",
      details:
        "We have developed Fission, BotKube, and Krius. Our team has also helped make Kyverno, Paralus, Tinkerbell, and Crossplane. Please schedule a call to learn more about previous projects, or you can check our success cases.",
    },
  ];

  const toggleItem = (id) => {
    // Toggle the currently selected item
    setSelectedItem(selectedItem === id ? null : id);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 150,
    slidesToShow: 4,
    slidesToScroll: 2,
  };

  return (
    <>
      {/* ================================================================================================================================== */}
      <div className="">
      <Navbar />
      <div className='my-5 py-1'></div>
        <div className="container">
          <div className=" row  ">
            <div className="mt-5 col-md-6 col-12 ">
              <h2 className="mb-3 fw-bold">Backstage Consulting & Enterprise Support</h2>
              <p className="mb-4 text-gray medium-text">
                Internal developer platform (IDP) experts building a tailored Backstage solution that improves
                developers’ productivity - for orgs of all sizes.
              </p>
              <button
                className="btn text-light px-4 py-2 "
                style={{ background: "#C0202E",  border: "none" }}
              >
                Talk to a Backstage Expert
              </button>
            </div>

            <div className="col-md-6 col-12 ">
              <img
                src="https://www.infracloud.io/assets/img/backstage-consulting/backstage-hero.svg"
                alt="Logo"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>
      {/* ======================================================================================================================================= */}
      <HorizontalMove />
      {/* ============================================================================================================================================== */}

      <div className="">
        <div className="container">
          <div className="row mt-4 box-shadow ">
            <div className="border-end col-md-3 col-12 d-flex justify-content-center">
              <img
                src="https://www.infracloud.io/assets/img/generic/tag-app-delivery-horizontal-color.svg"
                alt="Logo"
                className="img-fluid"
              />
            </div>

            <div className=" col-md-9 col-12  p-5">
              <p className="fs-5">
                As a part of CNCF TAG App Delivery, our IDP experts contributed to the 'Platform Engineering Maturity
                Model' helping orgs understand why & what to build.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* ========================================================================================================================================= */}

      <div className="p-4 mt-5 top-to-bottom-color">
        <div className=" container p-3">
          <div className="">
            {/* Left Div */}
            <div className=" text-center p-3">
              <h2 className="fw-bold">Why opt for Backstage consulting & support?</h2>
            </div>

            {/* Right Div */}
            <div className=" p-4">
              <div className="row gap">
                {/* Div 1 */}
                <div className="col-md-4 col-6  p-4 text-center ">
                  <div className="p-2 bg-white border">
                    {/* Image */}
                    <img
                      src="https://www.infracloud.io/assets/img/product-engineering/cloud-native-icon.svg"
                      alt="Example"
                      className="img-fluid "
                    />
                    {/* Heading */}
                    <h6 className="p-3">Leverage Kubernetes Capabilities from Experts</h6>
                  </div>
                </div>

                {/* Div 2 */}
                <div className="col-md-4 col-6 p-4 text-center">
                  <div className="p-2 bg-white border">
                    {/* Image */}
                    <img
                      src="https://www.infracloud.io/assets/img/managed-services/icons/innovations.svg"
                      alt="Example"
                      className="img-fluid "
                    />
                    {/* Heading */}
                    <h6 className="p-3">Dedicated Experts to Execute Innovations</h6>
                  </div>
                </div>

                {/* Div 3 */}
                <div className="col-md-4 col-6 p-4 text-center">
                  <div className="p-2 bg-white border">
                    {/* Image */}
                    <img
                      src="https://www.infracloud.io/assets/img/managed-services/icons/simple-model.svg"
                      alt="Example"
                      className="img-fluid "
                    />
                    {/* Heading */}
                    <h6 className="p-3">Simple Subscription Model</h6>
                  </div>
                </div>

                {/* Div 4 */}
                <div className="col-md-4 col-6 p-4 text-center ">
                  <div className="p-2 bg-white border">
                    {/* Image */}
                    <img
                      src="https://www.infracloud.io/assets/img/managed-services/icons/customer-service.svg"
                      alt="Example"
                      className="img-fluid "
                    />
                    {/* Heading */}
                    <h6 className="p-3">24/7 ♥ to your Kubernetes Clusters</h6>
                  </div>
                </div>

                {/* Div 5 */}
                <div className="col-md-4 col-6 p-4 text-center">
                  <div className="p-2 bg-white border">
                    {/* Image */}
                    <img
                      src="https://www.infracloud.io/assets/img/managed-services/icons/compliance.svg"
                      alt="Example"
                      className="img-fluid "
                    />
                    {/* Heading */}
                    <h6 className="p-3">Compliance with Industry Standards</h6>
                  </div>
                </div>

                {/* Div 6 */}
                <div className="col-md-4 col-6  p-4 text-center">
                  <div className="p-2 bg-white border">
                    {/* Image */}
                    <img
                      src="https://www.infracloud.io/assets/img/managed-services/icons/prebuilt-solutions.svg"
                      alt="Example"
                      className="img-fluid "
                    />
                    {/* Heading */}
                    <h6 className="p-3">InfraCloud Pre-built Solutions</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ================================================================================================================================ */}

      <div className="top-to-bottom-color">
        <div className="container p-5">
          <div className="text-center mt-5">
            <h2 className="fw-bold">Explore Our Backstage Consulting & Support Capabilities</h2>
            <p className="text-gray">
              Leverage our Backstage consulting expertise to help you adopt, implement, and manage Backstage at scale.
            </p>
          </div>

          {/* first */}
          <div className=" p-3 mt-4">
            <div className="row">
              {/* Left Side */}
              <div className="col-7 ">
                <h4 className="mb-3">Backstage Consulting & Adoption Strategy</h4>
                <p className="text-gray">
                  With advances in Gen AI, data privacy and security are more important than ever. With 137+ countries
                  enacting some form of data protection and sovereignty laws, build AI cloud with data residency
                  policies in place for data protection and privacy. With InfraCloud Sovereign AI Cloud, you can achieve
                  digital sovereignty without stressing about all the operational complexity.
                </p>

                <div>
                  <p className="text-gray">
                    <span className="fw-bold fs-3 orange-color">&#8594;</span>InfraCloud AI platform enables building a
                    Sovereign AI Cloud in a colo facility or your data center, so you can control where you locate your
                    data and computing infrastructure.
                  </p>
                  <p className="text-gray">
                    <span className="fw-bold fs-3 orange-color">&#8594;</span>Our platform follows the three aspects of
                    sovereignty right from the start: data sovereignty, operational sovereignty, and software
                    sovereignty.
                  </p>
                </div>
              </div>

              {/* Right Side */}
              <div className="col-5  text-end">
                <img
                  src="https://www.infracloud.io/assets/img/backstage-consulting/backstage-consulting.svg"
                  alt="Sample Image"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>

          {/* second */}
          <div className=" p-3 mt-4">
            <div className="row">
              {/* Right Side */}
              <div className="col-5  text-start d-flex align-items-center">
                <img
                  src="https://www.infracloud.io/assets/img/backstage-consulting/implement-production-grade-backstage.svg"
                  alt="Sample Image"
                  className="img-fluid"
                />
              </div>

              {/* Left Side */}
              <div className="col-7 ">
                <h4 className="mb-3">Implement Production-Grade Backstage</h4>
                <p className="text-gray">
                  InfraCloud AI BareMetal platform provides GPU instances to consumers with a prebuilt & configured
                  software stack. InfraCloud AI Orchestration platform utilizes the power of containers and Kubernetes
                  to manage AI infrastructure while bin packing for efficiency. Get immediate access to the tools and
                  frameworks you need to share GPU without the setup hassle.
                </p>

                <div>
                  <p className="text-gray">
                    <span className="fw-bold fs-3 orange-color">&#8594;</span>Provide platform consumers with on-demand
                    GPUs with per-minute/hour billing, fast booting instances, and powerful storage and networking, with
                    the aim of minimizing downtime.
                  </p>
                  <p className="text-gray">
                    <span className="fw-bold fs-3 orange-color">&#8594;</span>Be productive from the first hour with ML
                    in a Box. Immediately start machine learning experiments and projects using the instances with a
                    preconfigured software stack. Choose the framework of your choice, such as TensorFlow or PyTorch,
                    and a familiar IDE, such as Jupyter Notebooks or VSCode.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* third */}
          <div className=" p-3 mt-4">
            <div className="row">
              {/* Left Side */}
              <div className="col-7 ">
                <h4 className="mb-3">Integration with Other Tools or Workflows</h4>
                <p className="text-gray">
                  With InfraCloud AI MLOps Platform, data scientists and engineers can build, train & deploy models and
                  run AI and MLOps experiments without spending energy and resources managing GPU cloud infrastructure.
                  Manage multiple cloud resources, data sources, server requests, system performance, logs, policies,
                  etc, and administer all the management and business functionality through a single pane of glass with
                  the InfraCloud AI Control plane.
                </p>

                <div>
                  <p className="text-gray">
                    <span className="fw-bold fs-3 orange-color">&#8594;</span>Test various experiments for AI business
                    use cases without worrying about setting up the MLOps pipeline while using the various foundation
                    models from the open source world to author notebooks.
                  </p>
                  <p className="text-gray">
                    <span className="fw-bold fs-3 orange-color">&#8594;</span>Connect to data sources and clean data
                    before using with models/notebooks to maintain output accuracy and relevancy. Build models and train
                    them on a distributed cluster for faster training & tracking of the experiments.
                  </p>
                </div>
              </div>

              {/* Right Side */}
              <div className="col-5 text-end d-flex align-items-center">
                <img
                  src="https://www.infracloud.io/assets/img/backstage-consulting/integration-with-other-tools-or-workflows.svg"
                  alt="Sample Image"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>

          {/* four */}
          <div className=" p-3 mt-4">
            <div className="row">
              {/* Right Side */}
              <div className="col-5  text-start d-flex align-items-center">
                <img
                  src="https://www.infracloud.io/assets/img/backstage-consulting/backstage-enterprise-support-and-training.svg"
                  alt="Sample Image"
                  className="img-fluid"
                />
              </div>

              {/* Left Side */}
              <div className="col-7 ">
                <h4 className="mb-3">Backstage Support and Training</h4>
                <p className="text-gray">
                  Our AI experts will ensure that agents, models, and AI infrastructure remain healthy, resilient, and
                  up to date to meet the regularly changing business demands and win the competitive advantage through
                  speed.
                </p>

                <div>
                  <p className="text-gray">
                    <span className="fw-bold fs-3 orange-color">&#8594;</span>Monitor & measure the performance of the
                    generative AI agents and models in executing the stated tasks to improvise based on changes in data
                    or in the performance of model.
                  </p>
                  <p className="text-gray">
                    <span className="fw-bold fs-3 orange-color">&#8594;</span>Update models to the latest version and
                    test end to end performance before switching the versions in production to ensure smooth upgrade.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* five */}
          <div className=" p-3 mt-4">
            <div className="row">
              {/* Left Side */}
              <div className="col-7 ">
                <h4 className="mb-3">Scalability Planning</h4>
                <p className="text-gray">
                  As your business grows, your software needs to scale as well. So your developer platform has to handle
                  all the new documentations, users, softwares and complexities that come with scalability. Our
                  Backstage expert team will build your internal developer portal for scalability from day 1.
                </p>

                <div>
                  <p className="text-gray">
                    <span className="fw-bold fs-3 orange-color">&#8594;</span>Test various experiments for AI business
                    use cases without worrying about setting up the MLOps pipeline while using the various foundation
                    models from the open source world to author notebooks.
                  </p>
                  <p className="text-gray">
                    <span className="fw-bold fs-3 orange-color">&#8594;</span>Connect to data sources and clean data
                    before using with models/notebooks to maintain output accuracy and relevancy. Build models and train
                    them on a distributed cluster for faster training & tracking of the experiments.
                  </p>
                </div>
              </div>

              {/* Right Side */}
              <div className="col-5 text-end d-flex align-items-center">
                <img
                  src="https://www.infracloud.io/assets/img/backstage-consulting/scalability-planning.svg"
                  alt="Sample Image"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>

          {/* six  */}
          <div className=" p-3 mt-4">
            <div className="row">
              {/* Right Side */}
              <div className="col-5  text-start d-flex align-items-center">
                <img
                  src="https://www.infracloud.io/assets/img/backstage-consulting/security-and-compliance-integration.svg"
                  alt="Sample Image"
                  className="img-fluid"
                />
              </div>

              {/* Left Side */}
              <div className="col-7 ">
                <h4 className="mb-3">Security and Compliance Integration</h4>
                <p className="text-gray">
                  Our AI experts will ensure that agents, models, and AI infrastructure remain healthy, resilient, and
                  up to date to meet the regularly changing business demands and win the competitive advantage through
                  speed.
                </p>

                <div>
                  <p className="text-gray">
                    <span className="fw-bold fs-3 orange-color">&#8594;</span>Monitor & measure the performance of the
                    generative AI agents and models in executing the stated tasks to improvise based on changes in data
                    or in the performance of model.
                  </p>
                  <p className="text-gray">
                    <span className="fw-bold fs-3 orange-color">&#8594;</span>Update models to the latest version and
                    test end to end performance before switching the versions in production to ensure smooth upgrade.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ============================================================================================================================================= */}
      <Nitty_Gritty />
      {/* ============================================================================================================================================= */}

      <div className=" bg-light-green row py-5">
        <div className=" col-lg-9 col-12 ">
          <div className=" p-5 d-flex justify-content-end">
            <div className="  ">
              <h3 className="fw-bold px-5">What do our Customers Say about us</h3>
              <p className="text-gray px-5 fs-5">
                From startups to global enterprises, our clients are our biggest advocates. Hear straight from our
                customers how we helped them navigate their cloud native journey.
              </p>
            </div>
          </div>

          <div className="row p-4  d-flex justify-content-center">
            <div className="row d-flex justify-content-around  div-static-in-small">
              <div className="col-md-5 col-12 bg-white  p-2 border rounded-4">
                <p className="text-gray">
                  "We engaged with InfraCloud to build a Kubernetes based platform for running insurance apps.
                  InfraCloud’s experience and deep knowledge helped us in building this platform quickly using best
                  practices for Kubernetes."
                </p>

                <div className="d-flex py-4">
                  <img src="https://picsum.photos/50" alt="Logo" className="img-fluid rounded-2" />
                  <div className="m-2">
                    <h6>Squid Game</h6>
                    <p className="text-gray small-text">Head of Platforms</p>
                  </div>
                </div>
              </div>
              <div className="col-md-5 col-12 bg-white  p-2 border rounded-4">
                <p className="text-gray">
                  "InfraCloud has been of tremendous value to the core development work we have been doing. Their
                  engineers are thorough professional, very knowledgeable, and have adapted to the demands of the work
                  quite well. They are always proactive and helpful to the other team members as well. A great asset for
                  any team!"
                </p>

                <div>
                  <h6 className="p-0">VP, Engineering & Head, India Product Operations</h6>
                  <p className="text-gray small-text">Computer and Network Security</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className=" bg-dark-blue  col-lg-3 col-0"></div>
      </div>

      {/* ======================================================================================================================================== */}
      <WeOpenSource />
      {/* ====================================================================================================================================================== */}

      <div className=" top-to-bottom-color">
        <div className=" container p-4 text-center mt-3 mb-3">
          <div className=" mt-5 mb-5">
            {/* Heading */}
            <h2 className="mb-3 fw-bold">Looking for Backstage Enterprise Support?</h2>

            {/* Paragraph */}
            <p className="mb-4 text-gray">
              Consult with our Backstage experts for assistance with strategy, design, and testing, to<br></br>
              integration, custom plugins, deployment and ongoing support to leverage the Backstage at fullest.
            </p>

            {/* Button */}
            <button className="btn px-4 py-2 " style={{ background: "#C0202E", borderRadius: "15px", border: "none" }}>
              Talk to Backstage Expert
            </button>
          </div>
        </div>
      </div>

      {/* =========================================================================================================================================================== */}

      <div className="top-to-bottom-color p-5">
        <div className=" container mt-5 mb-5">
          <div className=" text-center mt-5">
            <h2 className="mb-3 fw-bold">Why InfraCloud as Backstage Consulting & Implementation Partner?</h2>
            {/* <p className="text-gray fs-6">Our cloud native product development experts help you with<br></br>
                            end-to-end product development & support.</p> */}
          </div>

          <div className=" p-3 mt-5 mb-3">
            {/* Row 1 */}
            <div className="row">
              {/* Col 1 */}
              <div className="col-lg-4 col-md-6 col-12  p-3">
                {/* Image */}
                <img src="https://via.placeholder.com/40" alt="Example" className="img-fluid mb-3 rounded-3" />

                {/* Heading */}
                <h5 className="mb-2 fw-bold">Certified Developers</h5>

                {/* Paragraph */}
                <p className="text-gray">
                  Get cloud native product engineers on demand. No more waiting to expand your team.
                </p>
              </div>

              {/* Col 2 */}
              <div className="col-lg-4 col-md-6 col-12 p-3">
                {/* Image */}
                <img src="https://via.placeholder.com/40" alt="Example" className="img-fluid mb-3 rounded-3" />

                {/* Heading */}
                <h5 className="mb-2 fw-bold">Domain Expertise</h5>

                {/* Paragraph */}
                <p className="text-gray">
                  Get cloud native engineers with expertise in Go, Python, Kubernetes, and other cloud native tech.
                </p>
              </div>

              {/* Col 3 */}
              <div className="col-lg-4 col-md-6 col-12  p-3">
                {/* Image */}
                <img src="https://via.placeholder.com/40" alt="Example" className="img-fluid mb-3 rounded-3" />

                {/* Heading */}
                <h5 className="mb-2 fw-bold">First Mover Advantage</h5>

                {/* Paragraph */}
                <p className="text-gray">
                  Get additional engineering bandwidth for rapid prototyping and cloud native product development.
                </p>
              </div>
            </div>

            {/* Row 2 */}
            <div className="row">
              {/* Col 1 */}
              <div className="col-lg-4 col-md-6 col-12 p-3">
                {/* Image */}
                <img src="https://via.placeholder.com/40" alt="Example" className="img-fluid mb-3 rounded-3" />

                {/* Heading */}
                <h5 className="mb-2 fw-bold">Training</h5>

                {/* Paragraph */}
                <p className="text-gray">
                  Not sure about the idea? Build the MVP of your product with InfraCloud’s cloud native domain
                  knowledge.
                </p>
              </div>

              {/* Col 2 */}
              <div className="col-lg-4 col-md-6 col-12 p-3">
                {/* Image */}
                <img src="https://via.placeholder.com/40" alt="Example" className="img-fluid mb-3 rounded-3" />

                {/* Heading */}
                <h5 className="mb-2 fw-bold">CNCF Certified Provider</h5>

                {/* Paragraph */}
                <p className="text-gray">
                  Get world class APAC and EMEA cloud native support for your cloud product with us.
                </p>
              </div>

              {/* Col 3 */}
              <div className="col-lg-4 col-md-6 col-12  p-3">
                {/* Image */}
                <img src="https://via.placeholder.com/40" alt="Example" className="img-fluid mb-3 rounded-3" />

                {/* Heading */}
                <h5 className="mb-2 fw-bold">In-house Domain Expertise</h5>

                {/* Paragraph */}
                <p className="text-gray">
                  Save on cost with optimized cloud native solutions that help you ship products faster.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ========================================================================================================================================== */}
      <div className="bg-white">
        <div className="border border-primary container mt-5 mb-5 ">
          <h3 className="text-center py-2">Team with a Diverse Set of Technical Expertise</h3>
          <p className="text-center text-gray">
            While working with more than 100+ customers, our certified <br></br>consultants have gotten well versed in:
          </p>

          <div className=" ">
            <Slider {...settings}>
              <div className="p-4 rounded d-flex justify-content-center">
                {/* Image */}
                <img
                  src="https://www.infracloud.io/assets/img/generic/kubernetes-kcsp-color.svg"
                  alt="Example"
                  className="img-fluid "
                />
              </div>

              <div className="p-4 rounded d-flex justify-content-center">
                {/* Image */}
                <img
                  src="https://www.infracloud.io/assets/img/generic/certified-tag-2.svg"
                  alt="Example"
                  className="img-fluid "
                />
              </div>

              <div className="p-4 rounded d-flex justify-content-center">
                {/* Image */}
                <img src="https://www.infracloud.io/assets/img/generic/iso.svg" alt="Example" className="img-fluid " />
              </div>

              <div className="p-4 rounded d-flex justify-content-center">
                {/* Image */}
                <img
                  src="https://www.infracloud.io/assets/img/generic/certified-tag.svg"
                  alt="Example"
                  className="img-fluid "
                />
              </div>

              <div className="p-4 rounded d-flex justify-content-center">
                {/* Image */}
                <img src="https://www.infracloud.io/assets/img/generic/iso.svg" alt="Example" className="img-fluid " />
              </div>

              <div className="p-4 rounded d-flex justify-content-center">
                {/* Image */}
                <img src="https://www.infracloud.io/assets/img/generic/iso.svg" alt="Example" className="img-fluid " />
              </div>

              <div className="p-4 rounded d-flex justify-content-center">
                {/* Image */}
                <img
                  src="https://www.infracloud.io/assets/img/generic/certified-tag-2.svg"
                  alt="Example"
                  className="img-fluid "
                />
              </div>
            </Slider>
          </div>
        </div>
      </div>
      {/* =============================================================================================================================================== */}

      <div className="mt-5 top-to-bottom-color">
        <div className=" container mt-5 mb-5">
          <div className=" text-center">
            <h3 className="fw-bold py-2">Evangelizing IDPs and Platform Engineering</h3>
          </div>

          <div className="row  p-3 d-flex justify-content-evenly mt-5 ">
            {/* Child Div 1 */}
            <div className=" col-md-3 col-12 hover-effect hover-shadow">
              {/* Image */}
              <div>
                <img
                  src="https://www.infracloud.io/assets/img/download-pdf/platform-engineering-ebook-og.png"
                  alt="Example Image"
                  className="img-fluid mb-3"
                />
              </div>

              <div className="position-relative mt-3 py-3">
                <span
                  className="fs-6 position-absolute bottom-100 px-4 py-2 rounded"
                  style={{
                    backgroundColor: "lavender",
                    color: "blue",
                  }}
                >
                  eBook
                </span>

                {/* Heading */}
                <h5 className="mb-2 ">Platform Engineering Reference Architecture</h5>
              </div>
            </div>

            {/* Child Div 2 */}
            <div className="col-md-3 col-12 hover-effect hover-shadow">
              {/* Image */}
              <div>
                <img
                  src="https://www.infracloud.io/assets/img/blog/starting-platform-engineering-journey-with-backstage/unlocking-developer-productivity-with-backstage-1200x628.png"
                  alt="Example Image"
                  className="img-fluid mb-3"
                />
              </div>

              <div className="position-relative mt-3 py-3">
                <span
                  className="fs-6 position-absolute bottom-100 px-4 py-2 rounded"
                  style={{
                    backgroundColor: "lavender",
                    color: "blue",
                  }}
                >
                  Blog
                </span>

                {/* Heading */}
                <h5 className="mb-2 ">Starting Platform Engineering Journey with Backstage</h5>
              </div>
            </div>

            {/* Child Div 3 */}
            <div className="col-md-3 col-12 hover-effect hover-shadow">
              {/* Image */}
              <div>
                <img
                  src="https://www.infracloud.io/assets/img/platform-engineering-consulting/platform-engineering-maturity-model-cncf.png"
                  alt="Example Image"
                  className="img-fluid mb-3"
                />
              </div>

              <div className="position-relative mt-3 py-3">
                <span
                  className="fs-6 position-absolute bottom-100 px-4 py-2 rounded"
                  style={{
                    backgroundColor: "lavender",
                    color: "blue",
                  }}
                >
                  Contribution
                </span>

                {/* Heading */}
                <h5 className="mb-2 ">Platform Engineering Maturity Model by CNCF</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* =============================================================================================================================================== */}

      <div className="bg-dark-blue">
        <div className="container mt-5 p-3 text-white">
          <div className=" p-3 mb-3 text-center">
            <h2 className="fw-bold">Ready to Get Started with Backstage?</h2>
            <p className="fs-6">
              Schedule a call with our experts to understand how our platform engineering consulting services can help
              you.
            </p>
          </div>

          <div className="p-3 d-flex flex-wrap justify-content-around">
            {/* First Inner Div */}
            <div className=" p-2 mb-3 text-center">
              {/* Paragraph */}
              <p>Trusted by 100+ companies worldwide</p>

              {/* Horizontal Line */}
              <hr className="my-2" />

              <div style={{ width: "500px" }}>
                {/* Image */}
                <img
                  src="https://www.infracloud.io/assets/img/customers/calendly-section-all-customer-logos.svg"
                  alt="Example"
                  className="img-fluid mt-2"
                />
              </div>
            </div>

            {/* Second Inner Div */}
            <div className=" p-2 mb-3">
              <h5>Calender Calender Calender Calender Calender</h5>
              <img
                src="https://www.infracloud.io/assets/img/customers/calendly-section-all-customer-logos.svg"
                alt="Example"
                className="img-fluid mt-2"
              />
            </div>
          </div>
        </div>
      </div>
      {/* =============================================================================================================================================== */}

      <div className=" mb-5 p-5 top-to-bottom-color">
        <div className=" container">
          <div className="text-center p-4">
            <h3 className="fw-bold">Got a question around Backstage Consulting?</h3>
          </div>

          <div className="text-center ">
            <div className="container mt-4 px-4">
              <ul className="list-group">
                {items.map((item) => (
                  <li
                    key={item.id}
                    className="list-group-item text-start p-4 fw-bold box-shadow"
                    onClick={() => toggleItem(item.id)}
                    style={{ cursor: "pointer" }}
                  >
                    {item.name}
                    {/* Show details below if this item is selected */}
                    {selectedItem === item.id && <div className="mt-2 p-2 text-gray">{item.details}</div>}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* ==================================================================================================================================================== */}

      <Footer />
      {/* ============================================================================================================================================= */}
    </>
  );
}

export default page;
