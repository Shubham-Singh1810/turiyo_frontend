import React from 'react'
import Footer from '../componets/Footer'
import Nitty_Gritty from '../componets/Nitty_Gritty'
import WeOpenSource from '../componets/WeOpenSource'
import HorizontalMove from '../componets/HorizontalMove'

function page() {
    return (
        <>
            <div className="" >
                <div className="container mb-5">
                    <div className=" row ">

                        <div className="mt-5 col-md-6 col-12 ">
                            <h2 className="mb-3 fw-bold">Building Future-Ready Platforms</h2>
                            <p className="mb-4 text-gray medium-text">Helping orgs at every step of Platform Engineering services - right from choosing a platform, building MVP, integrations to support.</p>
                            <button className="btn px-4 py-2 " style={{ background: "#C0202E", borderRadius: "15px", border: "none" }}>Talk to Platform Engineering Expert</button>

                        </div>

                        <div className="col-md-6 col-12 ">
                            <img
                                src="https://www.infracloud.io/assets/img/platform-engineering-consulting/platform-engineering-hero.svg"
                                alt="Logo"
                                className="img-fluid"
                            />
                        </div>

                    </div>
                </div>
            </div>

            {/* ====================================================================================================================================== */}

            <HorizontalMove />
            {/* ============================================================================================================================================= */}

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
                        <p className="fs-5">As a part of CNCF TAG App Delivery, our IDP experts contributed to the 'Platform Engineering Maturity Model' helping orgs understand why & what to build.</p>
                    </div>

                </div>
                </div>
            </div>

            {/* ================================================================================================================================== */}

            <div className="mt-5 top-to-bottom-color p-5">
                <div className="container mt-5 mb-5">

                    <div className="text-center ">
                        <h2 className="fw-bold">What do we Offer in Platform Engineering Consulting Services?</h2>
                    </div>


                    {/* first */}
                    <div className=" p-3 mt-4">
                        <div className="row">

                            {/* Left Side */}
                            <div className="col-7 ">
                                <h4 className="mb-3">SProduct Market Fit Assessment</h4>
                                <p className="text-gray">With advances in Gen AI, data privacy and security are more important than ever. With 137+ countries enacting some form of data protection and sovereignty laws, build AI cloud with data residency policies in place for data protection and privacy. With InfraCloud Sovereign AI Cloud, you can achieve digital sovereignty without stressing about all the operational complexity.</p>

                                <div>
                                    <p className="text-gray"><span className="fw-bold fs-3 orange-color">&#8594;</span>InfraCloud AI platform enables building a Sovereign AI Cloud in a colo facility or your data center, so you can control where you locate your data and computing infrastructure.</p>
                                    <p className="text-gray"><span className="fw-bold fs-3 orange-color">&#8594;</span>Our platform follows the three aspects of sovereignty right from the start: data sovereignty, operational sovereignty, and software sovereignty.</p>
                                    <p className="text-gray"><span className="fw-bold fs-3 orange-color">&#8594;</span>Build AI infrastructure that ensures compliance with local regulations (like GDPR and Schrems II) and fulfills the transparency obligations.</p>
                                    <p className="text-gray"><span className="fw-bold fs-3 orange-color">&#8594;</span>Platform can burst into the public cloud for specific scale needs and communication with public AI systems while preserving the data residency policies.</p>
                                </div>
                            </div>

                            {/* Right Side */}
                            <div className="col-5  text-end">
                                <img
                                    src="https://www.infracloud.io/assets/img/platform-engineering-consulting/product-market-fit-assessment.svg"
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
                                    src="https://www.infracloud.io/assets/img/platform-engineering-consulting/mvp-strategy-platform-roadmap-consulting.svg"
                                    alt="Sample Image"
                                    className="img-fluid"
                                />
                            </div>

                            {/* Left Side */}
                            <div className="col-7 ">
                                <h4 className="mb-3">MVP Strategy & Platform Roadmap Consulting</h4>
                                <p className="text-gray">InfraCloud AI BareMetal platform provides GPU instances to consumers with a prebuilt & configured software stack. InfraCloud AI Orchestration platform utilizes the power of containers and Kubernetes to manage AI infrastructure while bin packing for efficiency. Get immediate access to the tools and frameworks you need to share GPU without the setup hassle.</p>

                                <div>
                                    <p className="text-gray"><span className="fw-bold fs-3 orange-color">&#8594;</span>Provide platform consumers with on-demand GPUs with per-minute/hour billing, fast booting instances, and powerful storage and networking, with the aim of minimizing downtime.</p>
                                    <p className="text-gray"><span className="fw-bold fs-3 orange-color">&#8594;</span>Be productive from the first hour with ML in a Box. Immediately start machine learning experiments and projects using the instances with a preconfigured software stack. Choose the framework of your choice, such as TensorFlow or PyTorch, and a familiar IDE, such as Jupyter Notebooks or VSCode.</p>
                                    <p className="text-gray"><span className="fw-bold fs-3 orange-color">&#8594;</span>Achieve effective auto healing and auto scaling platform with containerized workloads with Kubernetes orchestration. Efficiently manage GPU cloud resources & reduce the GPU running cost by utilizing Kubernetes auto-scaling features like scale to zero and cluster autoscaler.</p>
                                    <p className="text-gray"><span className="fw-bold fs-3 orange-color">&#8594;</span>Allocate the resources to multiple workloads by combining various scheduling techniques based on requirements such as fair share scheduler, guaranteed quotas, or GPU over provisioning through the platform. Match specific AI tasks to the most suitable hardware configurations using various node pooling techniques that enable dynamic resource allocation.</p>
                                    <p className="text-gray"><span className="fw-bold fs-3 orange-color">&#8594;</span>Track the health of your GPU cloud with built-in observability. This enables proactive capacity planning and maximizes uptime to ensure that your AI infrastructure consistently meets demand.</p>

                                </div>
                            </div>


                        </div>
                    </div>

                    {/* third */}
                    <div className=" p-3 mt-4">
                        <div className="row">

                            {/* Left Side */}
                            <div className="col-7 ">
                                <h4 className="mb-3">Platform Design and Development</h4>
                                <p className="text-gray">With InfraCloud AI MLOps Platform, data scientists and engineers can build, train & deploy models and run AI and MLOps experiments without spending energy and resources managing GPU cloud infrastructure. Manage multiple cloud resources, data sources, server requests, system performance, logs, policies, etc, and administer all the management and business functionality through a single pane of glass with the InfraCloud AI Control plane.</p>

                                <div>
                                    <p className="text-gray"><span className="fw-bold fs-3 orange-color">&#8594;</span>Test various experiments for AI business use cases without worrying about setting up the MLOps pipeline while using the various foundation models from the open source world to author notebooks.</p>
                                    <p className="text-gray"><span className="fw-bold fs-3 orange-color">&#8594;</span>Connect to data sources and clean data before using with models/notebooks to maintain output accuracy and relevancy. Build models and train them on a distributed cluster for faster training & tracking of the experiments.</p>
                                    <p className="text-gray"><span className="fw-bold fs-3 orange-color">&#8594;</span>Deploy models to a choice of inference servers based on your needs, which are fine-tuned with the underlying infrastructure. Track requests to inference servers and optimize & debug based on monitoring & log data of the inference servers to keep MLOps in a healthy state.</p>
                                    <p className="text-gray"><span className="fw-bold fs-3 orange-color">&#8594;</span>Handle & operate on-premise and on cloud clusters and workloads along with underlying infrastructure from one user-friendly dashboard without any learning curve.</p>
                                    <p className="text-gray"><span className="fw-bold fs-3 orange-color">&#8594;</span>Monitor your system’s performance by tracking GPU, memory, and storage usage across your entire AI infrastructure in real-time and overview access control and audit logs of all operations on the platform to discover the unwanted waste of resources and downtime quickly.</p>

                                </div>
                            </div>

                            {/* Right Side */}
                            <div className="col-5 text-end d-flex align-items-center">
                                <img
                                    src="https://www.infracloud.io/assets/img/platform-engineering-consulting/platform-design-and-development.svg"
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
                                    src="https://www.infracloud.io/assets/img/platform-engineering-consulting/integrations-ecosystem-setup.svg"
                                    alt="Sample Image"
                                    className="img-fluid"
                                />
                            </div>

                            {/* Left Side */}
                            <div className="col-7 ">
                                <h4 className="mb-3">Integrations & Ecosystem Setup</h4>
                                <p className="text-gray">Our AI experts will ensure that agents, models, and AI infrastructure remain healthy, resilient, and up to date to meet the regularly changing business demands and win the competitive advantage through speed.</p>

                                <div>
                                    <p className="text-gray"><span className="fw-bold fs-3 orange-color">&#8594;</span>Monitor & measure the performance of the generative AI agents and models in executing the stated tasks to improvise based on changes in data or in the performance of model.</p>
                                    <p className="text-gray"><span className="fw-bold fs-3 orange-color">&#8594;</span>Update models to the latest version and test end to end performance before switching the versions in production to ensure smooth upgrade.</p>
                                    <p className="text-gray"><span className="fw-bold fs-3 orange-color">&#8594;</span>Our AI cloud explerts set up monitoring & fine-tune the deployed agents and LLM to meet the demands of the business. Use auto scaling and auto healing to respond to traffic and errors to ensure minimal downtime.</p>

                                </div>
                            </div>


                        </div>
                    </div>

                    {/* five */}
                    <div className=" p-3 mt-4">
                        <div className="row">

                            {/* Left Side */}
                            <div className="col-7 ">
                                <h4 className="mb-3">Platform Support & Maintenance</h4>
                                <p className="text-gray">With InfraCloud AI MLOps Platform, data scientists and engineers can build, train & deploy models and run AI and MLOps experiments without spending energy and resources managing GPU cloud infrastructure. Manage multiple cloud resources, data sources, server requests, system performance, logs, policies, etc, and administer all the management and business functionality through a single pane of glass with the InfraCloud AI Control plane.</p>

                                <div>
                                    <p className="text-gray"><span className="fw-bold fs-3 orange-color">&#8594;</span>Test various experiments for AI business use cases without worrying about setting up the MLOps pipeline while using the various foundation models from the open source world to author notebooks.</p>
                                    <p className="text-gray"><span className="fw-bold fs-3 orange-color">&#8594;</span>Connect to data sources and clean data before using with models/notebooks to maintain output accuracy and relevancy. Build models and train them on a distributed cluster for faster training & tracking of the experiments.</p>
                                    <p className="text-gray"><span className="fw-bold fs-3 orange-color">&#8594;</span>Deploy models to a choice of inference servers based on your needs, which are fine-tuned with the underlying infrastructure. Track requests to inference servers and optimize & debug based on monitoring & log data of the inference servers to keep MLOps in a healthy state.</p>
                                    <p className="text-gray"><span className="fw-bold fs-3 orange-color">&#8594;</span>Handle & operate on-premise and on cloud clusters and workloads along with underlying infrastructure from one user-friendly dashboard without any learning curve.</p>
                                    <p className="text-gray"><span className="fw-bold fs-3 orange-color">&#8594;</span>Monitor your system’s performance by tracking GPU, memory, and storage usage across your entire AI infrastructure in real-time and overview access control and audit logs of all operations on the platform to discover the unwanted waste of resources and downtime quickly.</p>

                                </div>
                            </div>

                            {/* Right Side */}
                            <div className="col-5 text-end d-flex align-items-center">
                                <img
                                    src="https://www.infracloud.io/assets/img/platform-engineering-consulting/platform-support-maintenance.svg"
                                    alt="Sample Image"
                                    className="img-fluid"
                                />
                            </div>
                        </div>
                    </div>

                    {/* six */}
                    <div className=" p-3 mt-4">
                        <div className="row">

                            {/* Right Side */}
                            <div className="col-5  text-start d-flex align-items-center">
                                <img
                                    src="https://www.infracloud.io/assets/img/platform-engineering-consulting/platform-engineering-training-support.svg"
                                    alt="Sample Image"
                                    className="img-fluid"
                                />
                            </div>

                            {/* Left Side */}
                            <div className="col-7 ">
                                <h4 className="mb-3">Platform Engineering Training & Support</h4>
                                <p className="text-gray">Our AI experts will ensure that agents, models, and AI infrastructure remain healthy, resilient, and up to date to meet the regularly changing business demands and win the competitive advantage through speed.</p>

                                <div>
                                    <p className="text-gray"><span className="fw-bold fs-3 orange-color">&#8594;</span>Monitor & measure the performance of the generative AI agents and models in executing the stated tasks to improvise based on changes in data or in the performance of model.</p>
                                    <p className="text-gray"><span className="fw-bold fs-3 orange-color">&#8594;</span>Update models to the latest version and test end to end performance before switching the versions in production to ensure smooth upgrade.</p>
                                    <p className="text-gray"><span className="fw-bold fs-3 orange-color">&#8594;</span>Our AI cloud explerts set up monitoring & fine-tune the deployed agents and LLM to meet the demands of the business. Use auto scaling and auto healing to respond to traffic and errors to ensure minimal downtime.</p>

                                </div>
                            </div>


                        </div>
                    </div>


                </div>
            </div>

            {/* ============================================================================================================================================ */}


            {/* =============================================================================================================================== */}


            {/* ======================================================================================================================================= */}
            <Nitty_Gritty />
            {/* ================================================================================================================================ */}

            <div className=" bg-light-green row py-5">

                <div className=" col-lg-9 col-12 ">
                    <div className=" p-5 d-flex justify-content-end">
                        <div className="  ">
                            <h3 className="fw-bold px-5">What do our Customers Say about us</h3>
                            <p className="text-gray px-5 fs-5">From startups to global enterprises, our clients are our biggest advocates. Hear straight from our customers how we helped them navigate their cloud native journey.</p>
                        </div>
                    </div>

                    <div className="row p-4  d-flex justify-content-center" >
                        <div className="row d-flex justify-content-around  div-static-in-small">

                            <div className="col-md-5 col-12 bg-white  p-2 border rounded-4">
                                <p className="text-gray">"Thanks to InfraCloud for your significant contribution to our January release. Your engineers had a significant impact and accelerated our ability to deliver innovation at a fast pace. I know it’s early days in our partnership but I hope this is the meaning of many great things we will do together. Thank you and keep up the great work!"
                                </p>

                                <div className="d-flex py-4">
                                    <img
                                        src="https://picsum.photos/50"
                                        alt="Logo"
                                        className="img-fluid rounded-2"
                                    />
                                    <div className="m-2">
                                        <h6>Squid Game</h6>
                                        <p className="text-gray small-text">Head of Platforms</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-5 col-12 bg-white  p-2 border rounded-4">
                                <p className="text-gray mb-5">"InfraCloud has been of tremendous value to the core development work we have been doing. Their engineers are thorough professional, very knowledgeable, and have adapted to the demands of the work quite well. They are always proactive and helpful to the other team members as well. A great asset for any team!"</p>

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

            {/* ===================================================================================================================================== */}
            <WeOpenSource />
            {/* ======================================================================================================================================== */}

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
                        <button className="btn px-4 py-2 " style={{ background: "#C0202E", borderRadius: "15px", border: "none" }}>Talk to Platform Engineering Expert</button>

                    </div>
                </div>
            </div>
            {/* ====================================================================================================================================== */}

            <div className="top-to-bottom-color p-5">
                <div className=" container mt-5 mb-5">

                    <div className=" text-center mt-5">
                        <h2 className="mb-3 fw-bold">Why InfraCloud for Platform Engineering Consulting Services?</h2>
                        {/* <p className="text-gray fs-6">Our cloud native product development experts help you with<br></br>
                            end-to-end product development & support.</p> */}
                    </div>

                    <div className=" p-3 mt-5 mb-3">
                        {/* Row 1 */}
                        <div className="row">
                            {/* Col 1 */}
                            <div className="col-lg-4 col-md-6 col-12  p-3">
                                {/* Image */}
                                <img
                                    src="https://via.placeholder.com/40"
                                    alt="Example"
                                    className="img-fluid mb-3 rounded-3"
                                />

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
                                <img
                                    src="https://via.placeholder.com/40"
                                    alt="Example"
                                    className="img-fluid mb-3 rounded-3"
                                />

                                {/* Heading */}
                                <h5 className="mb-2 fw-bold">Domain Expertise</h5>

                                {/* Paragraph */}
                                <p className="text-gray">
                                    Get cloud native engineers with expertise in Go, Python, Kubernetes, and other cloud native tech.</p>
                            </div>

                            {/* Col 3 */}
                            <div className="col-lg-4 col-md-6 col-12  p-3">
                                {/* Image */}
                                <img
                                    src="https://via.placeholder.com/40"
                                    alt="Example"
                                    className="img-fluid mb-3 rounded-3"
                                />

                                {/* Heading */}
                                <h5 className="mb-2 fw-bold">First Mover Advantage</h5>

                                {/* Paragraph */}
                                <p className="text-gray">
                                    Get additional engineering bandwidth for rapid prototyping and cloud native product development.</p>
                            </div>

                        </div>

                        {/* Row 2 */}
                        <div className="row">
                            {/* Col 1 */}
                            <div className="col-lg-4 col-md-6 col-12 p-3">
                                {/* Image */}
                                <img
                                    src="https://via.placeholder.com/40"
                                    alt="Example"
                                    className="img-fluid mb-3 rounded-3"
                                />

                                {/* Heading */}
                                <h5 className="mb-2 fw-bold">Training</h5>

                                {/* Paragraph */}
                                <p className="text-gray">
                                    Not sure about the idea? Build the MVP of your product with InfraCloud’s cloud native domain knowledge.</p>
                            </div>

                            {/* Col 2 */}
                            <div className="col-lg-4 col-md-6 col-12 p-3">
                                {/* Image */}
                                <img
                                    src="https://via.placeholder.com/40"
                                    alt="Example"
                                    className="img-fluid mb-3 rounded-3"
                                />

                                {/* Heading */}
                                <h5 className="mb-2 fw-bold">CNCF Certified Provider</h5>

                                {/* Paragraph */}
                                <p className="text-gray">
                                    Get world class APAC and EMEA cloud native support for your cloud product with us.</p>
                            </div>

                            {/* Col 3 */}
                            <div className="col-lg-4 col-md-6 col-12  p-3">
                                {/* Image */}
                                <img
                                    src="https://via.placeholder.com/40"
                                    alt="Example"
                                    className="img-fluid mb-3 rounded-3"
                                />

                                {/* Heading */}
                                <h5 className="mb-2 fw-bold">Expand Easily</h5>

                                {/* Paragraph */}
                                <p className="text-gray">
                                    Save on cost with optimized cloud native solutions that help you ship products faster.</p>
                            </div>

                        </div>


                    </div>
                </div>
            </div>

            {/* =================================================================================================================================== */}

            <div className="mt-5 top-to-bottom-color">
                <div className=" container mt-5 mb-5">

                    <div className=" text-center">
                        <h3 className="fw-bold py-2">Evangelizing Platform Engineering</h3>
                    </div>

                    <div className="row  p-3 d-flex justify-content-evenly mt-5 ">

                        {/* Child Div 1 */}
                        <div className=" col-md-3 col-12 hover-effect hover-shadow">
                            {/* Image */}
                            <div >
                                <img
                                    src="https://www.infracloud.io/assets/img/blog/devops-to-platform-engineering-how-we-got-here/devops-to-platform-engineering-how-we-got-here-1200x628.png"
                                    alt="Example Image"
                                    className="img-fluid mb-3"
                                />
                            </div>

                            <div className="position-relative mt-3 py-3">
                                <span className="fs-6 position-absolute bottom-100 px-4 py-2 rounded" style={{
                                    backgroundColor: "lavender",
                                    color: "blue"
                                }}>Blog</span>

                                {/* Heading */}
                                <h5 className="mb-2 ">Monitoring Kubernetes Clusters by “chatting” with them</h5>
                            </div>

                        </div>

                        {/* Child Div 2 */}
                        <div className="col-md-3 col-12 hover-effect hover-shadow">
                            {/* Image */}
                            <div >
                                <img
                                    src="https://www.infracloud.io/assets/img/platform-engineering-consulting/platform-engineering-maturity-model-cncf.png"
                                    alt="Example Image"
                                    className="img-fluid mb-3"
                                />
                            </div>

                            <div className="position-relative mt-3 py-3">
                                <span className="fs-6 position-absolute bottom-100 px-4 py-2 rounded" style={{
                                    backgroundColor: "lavender",
                                    color: "blue"
                                }}>Contribution</span>

                                {/* Heading */}
                                <h5 className="mb-2 ">Building a Modern Chatops Platform</h5>
                            </div>

                        </div>

                        {/* Child Div 3 */}
                        <div className="col-md-3 col-12 hover-effect hover-shadow">
                            {/* Image */}
                            <div >
                                <img
                                    src="https://www.infracloud.io/assets/img/blog/what-is-platform-engineering/what-is-platform-engineering-1200x628.png"
                                    alt="Example Image"
                                    className="img-fluid mb-3"
                                />
                            </div>

                            <div className="position-relative mt-3 py-3">
                                <span className="fs-6 position-absolute bottom-100 px-4 py-2 rounded" style={{
                                    backgroundColor: "lavender",
                                    color: "blue"
                                }}>Blog</span>

                                {/* Heading */}
                                <h5 className="mb-2 ">Kubernetes Monitoring Made Simple with BotKube</h5>
                            </div>

                        </div>

                    </div>

                </div>
            </div>
            {/* ================================================================================================================================ */}

            <div className="bg-dark-blue">

                <div className="container mt-5 p-3 text-white">

                    <div className=" p-3 mb-3 text-center">
                        <h2 className="fw-bold">Ready to Transform your Business with Platform Engineering?</h2>
                        <p className="fs-6">Schedule a call with our experts to understand how our platform engineering consulting services can help you.</p>
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

            {/* ===================================================================================================================== */}
            <Footer />
        </>
    )
}

export default page
