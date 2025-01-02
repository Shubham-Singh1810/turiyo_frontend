"use client"
import React from 'react'
import Footer from '../componets/Footer'
import WeOpenSource from '../componets/WeOpenSource'
import Navbar from '../componets/Navbar'
import Slider from "react-slick";
function page() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 150,
        slidesToShow: 4,
        slidesToScroll: 2,
    };
    return (
        <>
        <Navbar/>
        <div className='my-5 py-1'></div>
            {/* ================================================================================================================================ */}
            <div className="mt-5 mb-5" >
                <div className="container">
                    <div className=" row  ">

                        <div className="mt-5 col-md-6 col-12 ">
                            <h2 className="mb-3 fw-bold">Trusted Managed Services for Kubernetes</h2>
                            <p className="mb-4 text-gray medium-text">From advising and implementation to optimization and support - making Kubernetes easier for you.</p>
                            <button className="btn px-4 py-2 text-light" style={{ background: "#C0202E",  border: "none" }}>Talk to Expert</button>

                        </div>

                        <div className="col-md-6 col-12 ">
                            <img
                                src="https://www.infracloud.io/assets/img/managed-services/managed-service-provider.svg"
                                alt="Logo"
                                className="img-fluid"
                            />
                        </div>

                    </div>

                    <div className="row mt-4 box-shadow">
                        <div className="border-end col-md-3 col-12 d-flex justify-content-center">
                            <img
                                src="https://www.infracloud.io/assets/img/generic/certified-tag-2.svg"
                                alt="Logo"
                                className="img-fluid"
                            />
                        </div>

                        <div className=" col-md-9 col-12  p-4">
                            <p className="fs-5">InfraCloud is the winner of '2023 Stratus Award for Cloud Computing - Kubernetes' category for leading the innovation and excellence in cloud native space.</p>
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
                            <h2 className="fw-bold">How we can help with <br></br>Managed Services for Kubernetes?</h2>
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
            {/* ==================================================================================================================================== */}

            <div className="top-to-bottom-color">
                <div className=" container mt-5 py-5">
                    <h3 className="text-center ">Let Kubernetes Experts Manage the Complexities for You</h3>
                    <p className="text-gray text-center">We manage 100% of your Infrastructure, so you can focus on innovating<br></br> with the needed peace of mind.</p>
                    <div className=" px-5 mt-5">
                        <div className="col col-12  px-5 py-2 ">
                            <div className="row  ">
                                {/* Row 1 */}
                                <div className="col-md-6 col-12  p-5 ">

                                    <img
                                        src="https://www.infracloud.io/assets/img/managed-services/icons/multi-cluster-management.svg"
                                        alt="Example"
                                        className="img-fluid mb-3 bg-white"
                                    />
                                    <h5 className="mb-2 ">Multi Cluster Management</h5>
                                    <p className="text-gray">With multi cluster management, you get a single pane of glass and visibility across your clusters. A single point of governance management can be used to drive policies and compliance across your infrastructure.</p>
                                </div>

                                <div className="col-md-6 col-12  p-5">

                                    <img
                                        src="https://www.infracloud.io/assets/img/managed-services/icons/managed-observability.svg"
                                        alt="Example"
                                        className="img-fluid mb-3"
                                    />
                                    <h5 className="mb-2">Observability</h5>
                                    <p className="text-gray">We bring a holistic view of observability across dimensions of monitoring, logging, tracing, dashboards, & alerting. Our experience from the field allows us to deploy a proven stack and practices so we are ahead of the incidents happening in production.</p>
                                </div>
                            </div>

                            <div className="row  mt-3">
                                {/* Row 2 */}
                                <div className="col-md-6 col-12 p-5">

                                    <img
                                        src="https://www.infracloud.io/assets/img/managed-services/icons/managed-storage.svg"
                                        alt="Example"
                                        className="img-fluid mb-3"
                                    />
                                    <h5 className="mb-2 ">Storage Operations</h5>
                                    <p className="text-gray">Data is the heart of your infrastructure, and we help make it resilient and scalable with modern practices and technologies. Helping you set up periodic backup, restore and disaster recovery mechanisms.</p>
                                </div>

                                <div className="col-md-6 col-12 p-5">

                                    <img
                                        src="https://www.infracloud.io/assets/img/managed-services/icons/managed-kubernetes-security.svg"
                                        alt="Example"
                                        className="img-fluid mb-3"
                                    />
                                    <h5 className="mb-2 ">Security for Kubernetes</h5>


                                    <p className="text-gray">Security is at the core of all operational aspects, and right from compliance needs to be safe from any unwanted security incidents. We deploy a set of systems to observe and react to things as soon as they occur.</p>
                                </div>
                            </div>

                            <div className="row  mt-3">
                                {/* Row 3 */}
                                <div className="col-md-6 col-12 p-5">

                                    <img
                                        src="https://www.infracloud.io/assets/img/managed-services/icons/managed-devportal.svg"
                                        alt="Example"
                                        className="img-fluid mb-3"
                                    />
                                    <h5 className="mb-2 ">DevPortal</h5>
                                    <p className="text-gray">Specially designed for growing and large teams, DevPortal ensures your developers can move across teams efficiently and without the overhead of learning everything from scratch. It also brings a single pane of glass for the teams.</p>
                                </div>

                                <div className="col-md-6 col-12 p-5">

                                    <img
                                        src="https://www.infracloud.io/assets/img/managed-services/icons/consulting-icon.svg"
                                        alt="Example"
                                        className="img-fluid mb-3"
                                    />
                                    <h5 className="mb-2 ">Architecture Consulting</h5>


                                    <p className="text-gray">A dedicated Architect will work closely with your application dev teams and MSP team to ensure that best practices are followed across applications and infrastructure.</p>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
            {/* ====================================================================================================================================== */}

            <div className="">
                <div className=" container text-center mt-5 mb-5">
                    <h3>Certifications</h3>
                    <p className="text-gray">Kubernetes Experts, that you can trust.</p>
                    <div className=" d-flex justify-content-center flex-wrap">
                        <img
                            src="https://www.infracloud.io/assets/img/lps/devops-consulting/SVG/kubernetes-kcsp-color.svg"
                            alt="Example"
                            className="img-fluid mb-3 px-5 bg-white"
                        />

                        <img
                            src="https://www.infracloud.io/assets/img/generic/cncf-stacked-color.svg"
                            alt="Example"
                            className="img-fluid mb-3 px-5 bg-white"
                        />

                    </div>

                    <div className=" d-flex justify-content-center flex-wrap">
                        <div className="d-flex px-4">
                            <img
                                src="https://www.infracloud.io/assets/img/managed-services/kubernetes-administrator-certified.svg"
                                alt="Example"
                                className="img-fluid mb-3 px-2 bg-white"
                            />
                            <h2 className="orange-color py-3">33+</h2>

                        </div>

                        <div className="d-flex px-4">
                            <img
                                src="https://www.infracloud.io/assets/img/managed-services/kubernetes-administrator-certified.svg"
                                alt="Example"
                                className="img-fluid mb-3 px-2 bg-white"
                            />
                            <h2 className="orange-color py-3">15+</h2>

                        </div>

                        <div className="d-flex px-4">
                            <img
                                src="https://www.infracloud.io/assets/img/managed-services/kubernetes-administrator-certified.svg"
                                alt="Example"
                                className="img-fluid mb-3 px-2 bg-white"
                            />
                            <h2 className="orange-color py-3">3+</h2>

                        </div>
                    </div>

                </div>
            </div>

            {/* =============================================================================================================================================== */}
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
                                <p className="text-gray">"We engaged with InfraCloud to build a Kubernetes based platform for running insurance apps. InfraCloud’s experience and deep knowledge helped us in building this platform quickly using best practices for Kubernetes."</p>

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
                                <p className="text-gray">"InfraCloud has been of tremendous value to the core development work we have been doing. Their engineers are thorough professional, very knowledgeable, and have adapted to the demands of the work quite well. They are always proactive and helpful to the other team members as well. A great asset for any team!"</p>

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

            {/* ========================================================================================================================================= */}
            <WeOpenSource />
            {/* ================================================================================================================================ */}

            <div className="top-to-bottom-color mt-5 mb-5">
                <div className=" mt-5 mb-5 py-5 container text-center">
                    <h3>Choose the Service Tier, that's Right for You!</h3>
                    <p className="text-gray">Flexible subscription model to simplify your Kubernetes operations.</p>

                    <button
                        className="btn btn-success shadow my-auto px-5"
                        style={{ background: "#C0202E", borderRadius: "10px", border: "none" }}
                    >Compare our Service Tiers
                    </button>
                </div>
            </div>
            {/* ========================================================================================================================================= */}

            <div className="bg-white">
                <div className="border border-primary container mt-5 mb-5 ">
                    <h3 className="text-center py-5">Technology Partners</h3>

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
                                <img
                                    src="https://www.infracloud.io/assets/img/generic/iso.svg"
                                    alt="Example"
                                    className="img-fluid "
                                />
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
                                <img
                                    src="https://www.infracloud.io/assets/img/generic/iso.svg"
                                    alt="Example"
                                    className="img-fluid "
                                />
                            </div>

                            <div className="p-4 rounded d-flex justify-content-center">
                                {/* Image */}
                                <img
                                    src="https://www.infracloud.io/assets/img/generic/iso.svg"
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

                        </Slider>

                    </div>
                </div>
            </div>

            {/* ============================================================================================================================================== */}
            <div className="top-to-bottom-color p-5">
                <div className=" container mt-5 mb-5">

                    <div className=" text-center mt-5">
                        <h2 className="mb-3 fw-bold">Why Some of the Best Companies Work with InfraCloud?</h2>
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
                                <h5 className="mb-2 fw-bold">Cloud Native Evangelism</h5>

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
                                <h5 className="mb-2 fw-bold">Global Kubernetes Partner</h5>

                                {/* Paragraph */}
                                <p className="text-gray">
                                    Save on cost with optimized cloud native solutions that help you ship products faster.</p>
                            </div>

                        </div>


                    </div>
                </div>
            </div>
            {/* ========================================================================================================================== */}

            <div className="bg-dark-blue">

                <div className="container mt-5 p-3 text-white">

                    <div className=" p-3 mb-3 text-center">
                        <h2 className="fw-bold">Ready to Get Started with Managed Services for K8s?</h2>
                        <p className="fs-6">Discuss your project with one of the Managed Services experts.</p>
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
            {/* ======================================================================================================================= */}

            
            {/* =============================================================================================================================== */}
            <Footer />
        </>
    )
}

export default page
