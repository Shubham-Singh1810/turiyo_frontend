"use client";
import React from "react";
import Navbar from "../componets/Navbar";
import Footer from "../componets/Footer";
import HorizontalMove from "../componets/HorizontalMove";
import Nitty_Gritty from "../componets/Nitty_Gritty";
import WeOpenSource from "../componets/WeOpenSource";
export default function AiCloud() {
  return (
    <div>
      <Navbar selectedItem="AI Cloud" />
      <div className="mt-5 pt-3 pt-lg-5 container">
        <div className=" row  mt-5">
          <div className="mt-5 col-lg-6 col-12 custom-dimensions order-lg-1 order-2">
            <h2 className="mb-3">Build AI Cloud with InfraCloud AI Platform</h2>
            <p className="mb-4 text-gray medium-text">
              Build and operationalize a GPU Cloud in no time with InfraCloud AI platform. Offer various services to
              customers while efficiently using & scaling the GPU infrastructure from a dashboard.{" "}
            </p>
            <button className="btn btn-danger" style={{ background: "#C0202E" }}>
              Talk to AI Cloud Expert
            </button>
          </div>

          <div className="col-12 col-lg-6 custom-dimensions2 d-flex justify-content-center order-lg-2 order-1">
            <img src="https://www.infracloud.io/assets/img/cloud-ai/ai-cloud-hero-image.svg" alt="Logo" className="" />
          </div>
        </div>
      </div>
      <HorizontalMove />
      <div className="container ">
        <div className="text-center mt-5">
          <h2 className="fw-bold">Accelerate Building AI Cloud</h2>
          <p className="text-gray">
            InfraCloud’s deep expertise in open source technologies and experience of operating cloud platforms<br></br>
            at scale is used to build the InfraCloud AI Platform.
          </p>
        </div>

        {/* first */}
        <div className=" p-3 mt-4">
          <div className="row">
            {/* Left Side */}
            <div className="col-lg-5 col-12">
              <h4 className="mb-3 text-center">Sovereign AI Cloud with InfraCloud Platform</h4>
              <div className="d-flex justify-content-center">
                <img
                  src="https://www.infracloud.io/assets/img/cloud-ai/build-sovereign-ai-cloud-with-infracloud-platform.svg"
                  alt="Sample Image"
                  className="img-fluid"
                />
              </div>
            </div>

            {/* Right Side */}
            <div className="col-lg-7 col-12">
              <p className="text-gray textJustify">
                With advances in Gen AI, data privacy and security are more important than ever. With 137+ countries
                enacting some form of data protection and sovereignty laws, build AI cloud with data residency policies
                in place for data protection and privacy. With InfraCloud Sovereign AI Cloud, you can achieve digital
                sovereignty without stressing about all the operational complexity.
              </p>

              <div>
                <p className="text-gray textJustify">
                  <span className="fw-bold fs-3 orange-color">&#8594;</span>InfraCloud AI platform enables building a
                  Sovereign AI Cloud in a colo facility or your data center, so you can control where you locate your
                  data and computing infrastructure.
                </p>
                <p className="text-gray textJustify">
                  <span className="fw-bold fs-3 orange-color">&#8594;</span>Our platform follows the three aspects of
                  sovereignty right from the start: data sovereignty, operational sovereignty, and software sovereignty.
                </p>
                <p className="text-gray textJustify">
                  <span className="fw-bold fs-3 orange-color">&#8594;</span>Build AI infrastructure that ensures
                  compliance with local regulations (like GDPR and Schrems II) and fulfills the transparency
                  obligations.
                </p>
                <p className="text-gray textJustify">
                  <span className="fw-bold fs-3 orange-color">&#8594;</span>Platform can burst into the public cloud for
                  specific scale needs and communication with public AI systems while preserving the data residency
                  policies.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* second */}
        <div className=" p-3 mt-4">
          <div className="row">
            {/* Right Side */}
            <div className="col-12 col-lg-6 order-lg-2 order-1  justify-content-center d-flex ">
              <div className="">
                <h4 className="mb-3">InfraCloud AI Bare Metal and Orchestration Platform</h4>
                <img
                  src="https://www.infracloud.io/assets/img/cloud-ai/infracloud-ai-bare-metal-platform.svg"
                  alt="Sample Image"
                  className="img-fluid"
                />
              </div>
            </div>

            {/* Left Side */}
            <div className="col-lg-6 col-12 order-lg-2 order-1 ">
              <p className="text-gray">
                InfraCloud AI BareMetal platform provides GPU instances to consumers with a prebuilt & configured
                software stack. InfraCloud AI Orchestration platform utilizes the power of containers and Kubernetes to
                manage AI infrastructure while bin packing for efficiency. Get immediate access to the tools and
                frameworks you need to share GPU without the setup hassle.
              </p>

              <div>
                <p className="text-gray">
                  <span className="fw-bold fs-3 orange-color">&#8594;</span>Provide platform consumers with on-demand
                  GPUs with per-minute/hour billing, fast booting instances, and powerful storage and networking, with
                  the aim of minimizing downtime.
                </p>
                <p className="text-gray">
                  <span className="fw-bold fs-3 orange-color">&#8594;</span>Be productive from the first hour with ML in
                  a Box. Immediately start machine learning experiments and projects using the instances with a
                  preconfigured software stack. Choose the framework of your choice, such as TensorFlow or PyTorch, and
                  a familiar IDE, such as Jupyter Notebooks or VSCode.
                </p>
                <p className="text-gray">
                  <span className="fw-bold fs-3 orange-color">&#8594;</span>Achieve effective auto healing and auto
                  scaling platform with containerized workloads with Kubernetes orchestration. Efficiently manage GPU
                  cloud resources & reduce the GPU running cost by utilizing Kubernetes auto-scaling features like scale
                  to zero and cluster autoscaler.
                </p>
                <p className="text-gray">
                  <span className="fw-bold fs-3 orange-color">&#8594;</span>Allocate the resources to multiple workloads
                  by combining various scheduling techniques based on requirements such as fair share scheduler,
                  guaranteed quotas, or GPU over provisioning through the platform. Match specific AI tasks to the most
                  suitable hardware configurations using various node pooling techniques that enable dynamic resource
                  allocation.
                </p>
                <p className="text-gray">
                  <span className="fw-bold fs-3 orange-color">&#8594;</span>Track the health of your GPU cloud with
                  built-in observability. This enables proactive capacity planning and maximizes uptime to ensure that
                  your AI infrastructure consistently meets demand.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* third */}
        <div className=" p-3 mt-4">
          <div className="row">
            <div className="col-5 text-end d-flex align-items-center">
              <img
                src="https://www.infracloud.io/assets/img/cloud-ai/infracloud-ai-mlops-platform.svg"
                alt="Sample Image"
                className="img-fluid"
              />
            </div>
            {/* Left Side */}
            <div className="col-12 ">
              <h4 className="mb-3">InfraCloud AI MLOps Platform and Control Plane</h4>
              <p className="text-gray">
                With InfraCloud AI MLOps Platform, data scientists and engineers can build, train & deploy models and
                run AI and MLOps experiments without spending energy and resources managing GPU cloud infrastructure.
                Manage multiple cloud resources, data sources, server requests, system performance, logs, policies, etc,
                and administer all the management and business functionality through a single pane of glass with the
                InfraCloud AI Control plane.
              </p>

              <div>
                <p className="text-gray">
                  <span className="fw-bold fs-3 orange-color">&#8594;</span>Test various experiments for AI business use
                  cases without worrying about setting up the MLOps pipeline while using the various foundation models
                  from the open source world to author notebooks.
                </p>
                <p className="text-gray">
                  <span className="fw-bold fs-3 orange-color">&#8594;</span>Connect to data sources and clean data
                  before using with models/notebooks to maintain output accuracy and relevancy. Build models and train
                  them on a distributed cluster for faster training & tracking of the experiments.
                </p>
                <p className="text-gray">
                  <span className="fw-bold fs-3 orange-color">&#8594;</span>Deploy models to a choice of inference
                  servers based on your needs, which are fine-tuned with the underlying infrastructure. Track requests
                  to inference servers and optimize & debug based on monitoring & log data of the inference servers to
                  keep MLOps in a healthy state.
                </p>
                <p className="text-gray">
                  <span className="fw-bold fs-3 orange-color">&#8594;</span>Handle & operate on-premise and on cloud
                  clusters and workloads along with underlying infrastructure from one user-friendly dashboard without
                  any learning curve.
                </p>
                <p className="text-gray">
                  <span className="fw-bold fs-3 orange-color">&#8594;</span>Monitor your system’s performance by
                  tracking GPU, memory, and storage usage across your entire AI infrastructure in real-time and overview
                  access control and audit logs of all operations on the platform to discover the unwanted waste of
                  resources and downtime quickly.
                </p>
              </div>
            </div>

            {/* Right Side */}
          </div>
        </div>

        {/* four */}
        <div className=" p-3 mt-4">
          <div className="row">
            {/* Right Side */}
            <div className="col-lg-5 col-12  text-start d-flex align-items-center">
              <img
                src="https://www.infracloud.io/assets/img/generative-ai-services/llm-deployment-scaling-&-monitoring.svg"
                alt="Sample Image"
                className="img-fluid"
              />
            </div>

            {/* Left Side */}
            <div className="col-lg-7 col-12 ">
              <h4 className="mb-3">LLM Deployment, Scaling & Monitoring</h4>
              <p className="text-gray">
                Our AI experts will ensure that agents, models, and AI infrastructure remain healthy, resilient, and up
                to date to meet the regularly changing business demands and win the competitive advantage through speed.
              </p>

              <div>
                <p className="text-gray">
                  <span className="fw-bold fs-3 orange-color">&#8594;</span>Monitor & measure the performance of the
                  generative AI agents and models in executing the stated tasks to improvise based on changes in data or
                  in the performance of model.
                </p>
                <p className="text-gray">
                  <span className="fw-bold fs-3 orange-color">&#8594;</span>Update models to the latest version and test
                  end to end performance before switching the versions in production to ensure smooth upgrade.
                </p>
                <p className="text-gray">
                  <span className="fw-bold fs-3 orange-color">&#8594;</span>Our AI cloud explerts set up monitoring &
                  fine-tune the deployed agents and LLM to meet the demands of the business. Use auto scaling and auto
                  healing to respond to traffic and errors to ensure minimal downtime.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Nitty_Gritty />
      <WeOpenSource />
      <div className=" top-to-bottom-color">
        <div className=" container p-4 text-center mt-3 mb-3">
          <div className=" mt-5 mb-5">
            {/* Heading */}
            <h2 className="mb-3 fw-bold">Looking for GPU Cloud Consulting partner?</h2>

            {/* Paragraph */}
            <p className="mb-4 text-gray">
              Get expert guidance from our GPU Cloud consultants for building and managing<br></br>
              GPU cloud solutions and robust AI infrastructure.
            </p>

            {/* Button */}
            <button className="btn mt-3 p-2 px-4 btn-danger" style={{ background: "#C0202E" }}>
              Talk to GPU Cloud Expert
            </button>
          </div>
        </div>
      </div>
      <div className=" bg-light-white">
        <div className=" container mt-5 mb-5">
          <div className=" text-center mt-5">
            <h2 className="mb-3 fw-bold">Why Choose InfraCloud AI Platform for Building your AI Cloud?</h2>
          </div>

          <div className=" p-3 mt-3 mb-3">
            {/* Row 1 */}
            <div className="row">
              {/* Col 1 */}
              <div className="col-lg-4 col-md-6 col-12  p-3">
                {/* Image */}
                <div className="d-flex align-items-center mb-2">
                  <img src="https://via.placeholder.com/40" alt="Example" className="img-fluid  rounded-3" />

                  {/* Heading */}
                  <h5 className="mb-0 ms-2 fw-bold">Certified Developers</h5>
                </div>

                {/* Paragraph */}
                <p className="text-gray">
                  170 in-house engineers, including 4 CKS, 51 CKA, 19 Certified Kubernetes Application Developers & 2
                  Kubestronauts.
                </p>
              </div>

              {/* Col 2 */}
              <div className="col-lg-4 col-md-6 col-12 p-3">
                <div className="d-flex align-items-center mb-2">
                  {/* Image */}
                  <img src="https://via.placeholder.com/40" alt="Example" className="img-fluid  rounded-3" />

                  {/* Heading */}
                  <h5 className="mb-0 ms-2 fw-bold">Domain Expertise</h5>
                </div>

                {/* Paragraph */}
                <p className="text-gray">
                  Implement the AI cloud best practices that we have learned while working with 100+ clients.
                </p>
              </div>

              {/* Col 3 */}
              <div className="col-lg-4 col-md-6 col-12  p-3">
                <div className="d-flex align-items-center mb-2">
                  <img src="https://via.placeholder.com/40" alt="Example" className="img-fluid  rounded-3" />

                  {/* Heading */}
                  <h5 className="mb-0 ms-2 fw-bold">First Mover Advantage</h5>
                </div>

                {/* Paragraph */}
                <p className="text-gray">
                  Partner with the first Kubernetes service provider in India and second in APAC.
                </p>
              </div>

              {/* Row 2 */}

              {/* Col 1 */}
              <div className="col-lg-4 col-md-6 col-12 p-3">
                {/* Paragraph */}
                <div className="d-flex align-items-center mb-2">
                  <img src="https://via.placeholder.com/40" alt="Example" className="img-fluid  rounded-3" />

                  {/* Heading */}
                  <h5 className="mb-0 ms-2 fw-bold">Training</h5>
                </div>
                <p className="text-gray">
                  Our AI training focuses on building knowledge of core AI concepts with practical experiences.
                </p>
              </div>

              {/* Col 2 */}
              <div className="col-lg-4 col-md-6 col-12 p-3">
                <div className="d-flex align-items-center mb-2">
                  <img src="https://via.placeholder.com/40" alt="Example" className="img-fluid  rounded-3" />

                  {/* Heading */}
                  <h5 className="mb-0 ms-2 fw-bold">CNCF Certified Provider</h5>
                </div>
                <p className="text-gray">
                  InfraCloud is a proud CNCF Silver Member, and Kubernetes Certified Service Provider (KCSP).
                </p>
              </div>

              {/* Col 3 */}
              <div className="col-lg-4 col-md-6 col-12  p-3">
                <div className="d-flex align-items-center mb-2">
                  <img src="https://via.placeholder.com/40" alt="Example" className="img-fluid  rounded-3" />

                  {/* Heading */}
                  <h5 className="mb-0 ms-2 fw-bold">Expand Easily</h5>
                </div>
                {/* Paragraph */}
                <p className="text-gray">
                  Easily scale up the team of expert AI engineers & developers without the hassle of hiring or training.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Swipper Container */}
      <div className="top-to-bottom-color">
        <div className="container r mt-5">
          <div className="s text-center">
            <h3 className="fw-bold pt-5 pt-lg-0 ">Team with Diverse Set of AI Cloud Expertise</h3>
            <p className="text-gray">
              Top-tier consulting for building AI and GPU cloud. Bespoke solutions for enhanced AI performance.
            </p>
          </div>

          {/* Swipper */}
          <div id="carouselExampleSlidesOnly" className="carousel slide border border-primary" data-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active" style={{ width: "200px" }}>
                <img src="https://picsum.photos/100" className="d-block w-100" alt="Image1" />
              </div>
              <div className="carousel-item" style={{ width: "200px" }}>
                <img src="https://picsum.photos/150" className="d-block w-100" alt="Image2" />
              </div>
              <div className="carousel-item" style={{ width: "200px" }}>
                <img src="https://picsum.photos/200" className="d-block w-100" alt="Image3" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <div className=" container mt-3">
          <div className=" text-center">
            <h3 className="fw-bold py-2">Evangelizing AI Cloud</h3>
          </div>

          <div className="row  p-3 d-flex justify-content-evenly mt-5 ">
            {/* Child Div 1 */}
            <div className=" col-lg-3 col-12 hover-effect hover-shadow">
              {/* Image */}
              <div>
                <img
                  src="https://www.infracloud.io/assets/img/blog/gpu-sharing-techniques-guide/vgpu-vs-mig-vs-gpu-time-slicing-1200x628.png"
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
                <h5 className="mb-2 fw-bold">Guide to GPU Sharing Techniques: vGPU, MIG and Time Slicing</h5>
              </div>
            </div>

            {/* Child Div 2 */}
            <div className=" col-lg-3 col-12 hover-effect hover-shadow">
              {/* Image */}
              <div>
                <img
                  src="https://www.infracloud.io/assets/img/blog/artifact-hub-ai.png"
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
                  Open Source Helm Charts
                </span>

                {/* Heading */}
                <h5 className="mb-2 fw-bold">Host LLM Models Locally on K8s Clusters & Build AI Apps Faster</h5>
              </div>
            </div>

            {/* Child Div 3 */}
            <div className=" col-lg-3 col-12 hover-effect hover-shadow">
              {/* Image */}
              <div>
                <img
                  src="https://www.infracloud.io/assets/img/webinars/ai-webinar-thumbnail.png"
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
                  Webinar
                </span>

                {/* Heading */}
                <h5 className="mb-2 fw-bold">How We Built Our AI Lab: A Practical Walkthrough</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* above footer */}
      <div className="bg-dark-blue py-lg-5 py-2">
        <div className="container">
          <div className=" mt-5  text-white row">
            <div className=" p-3 mb-3  col-lg-6 col-12">
             <img src="https://www.infracloud.io/assets/img/cloud-ai/ai-cloud-hero-image.svg" className="img-fluid"/>
              <h2 className="fw-bold">Ready to Transform & Build your AI Cloud?</h2>
              <p className="fs-6">
                Elevate your organization’s AI and GPU cloud capabilities with tailored consulting and management
                services.
              </p>
              {/* Paragraph */}
              <p>Trusted by 100+ companies worldwide</p>

              {/* Horizontal Line */}
              <hr className="my-2" />
            </div>

            <div className=" d-flex justify-content-around col-lg-6 col-12">
              {/* First Inner Div */}
             
                <div className="w-100  mb-3 text-center">
                  {/* Image */}
                  <img
                    src="https://www.infracloud.io/assets/img/customers/calendly-section-all-customer-logos.svg"
                    alt="Example"
                    className="img-fluid mt-2"
                  />
                
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
