import React from 'react'
import Navbar from '../componets/Navbar'
import Footer from '../componets/Footer'
import WeOpenSource from '../componets/WeOpenSource'

function page() {
    return (
        <>
            <Navbar />
<div className='my-5 py-1'></div>
            {/* ======================================================================================================== */}
            <div className="" >
                <div className="container">
                    <div className=" row  ">

                        <div className="mt-5 col-md-5 col-12 ">
                            <h2 className="mb-3 fw-bold">Serverless Function as <br></br>a Service for Kubernetes</h2>
                            <p className="mb-4 text-gray medium-text">Build applications based on Serverless architecture so that your developers can focus on code without worrying about the servers and cost. </p>
                            <button className="btn px-4 py-2 text-light" style={{ background: "#C0202E",  border: "none" }}>Get Started</button>

                        </div>

                        <div className="col-md-7 col-12 ">
                            <img
                                src="https://www.infracloud.io/assets/img/fission/fission-illustration.svg"
                                alt="Logo"
                                className="img-fluid"
                            />
                        </div>

                    </div>
                </div>
            </div>
            {/* ============================================================================================================ */}

            <div className=" mt-5 p-4 top-to-bottom-color">
                <h3 className="text-center">Run Serverless Functions AnyWhere</h3>
                <div className="container">
                    <div className="row">
                        <div className="col-md-7 col-12">
                            <img
                                src="https://www.infracloud.io/assets/img/fission/fission-screenshot.svg"
                                alt="Logo"
                                className="img-fluid"
                            />
                        </div>
                        <div className="col-md-5 col-12 p-5">
                            <h4>What is Fission?</h4>
                            <p className="text-gray py-2">Fission allows you to code serverless functions in any language and have them run wherever you have a Kubernetes cluster - in the public cloud, on-premises, on your laptop, or at the Edge!</p>
                            <p className="text-gray py-2">Fission automatically manages the infrastructure for you. You can focus on your code, while you get the most out of Kubernetes infrastructure, without requiring any in-depth knowledge of Kubernetes at scale, no containers to build or registries to manage.</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* ================================================================================================================ */}

            <div className="top-to-bottom-color">
                <div className=" container mt-5">
                    <h3 className="text-center py-5">Why Organisations Love Fission?</h3>

                    <div className=" px-5 mt-5">
                        <div className="col col-12  px-5 py-2 ">
                            <div className="row  ">
                                {/* Row 1 */}
                                <div className="col-md-6 col-12  p-5 ">

                                    <img
                                        src="https://www.infracloud.io/assets/img/fission/focus-icon.svg"
                                        alt="Example"
                                        className="img-fluid mb-3 bg-white"
                                    />
                                    <h5 className="mb-2 ">Focus on Code and not Plumbing</h5>
                                    <p className="text-gray">Developers can focus on writing the business logic, while Fission takes care of building, deploying and managing the infrastructure.</p>
                                </div>

                                <div className="col-md-6 col-12  p-5">

                                    <img
                                        src="https://www.infracloud.io/assets/img/fission/lambda-icon.svg"
                                        alt="Example"
                                        className="img-fluid mb-3"
                                    />
                                    <h5 className="mb-2">Lambda like Service Anywhere</h5>
                                    <p className="text-gray">Why get locked with your cloud provider while you can run the same serverless experience with Fission.</p>
                                </div>
                            </div>

                            <div className="row  mt-3">
                                {/* Row 2 */}
                                <div className="col-md-6 col-12 p-5">

                                    <img
                                        src="https://www.infracloud.io/assets/img/fission/pricing-icon.svg"
                                        alt="Example"
                                        className="img-fluid mb-3"
                                    />
                                    <h5 className="mb-2 ">Pricing</h5>
                                    <p className="text-gray">Best alternative to cloud provider's serverless offering, which is more economical and flexible to your needs.</p>
                                </div>

                                <div className="col-md-6 col-12 p-5">

                                    <img
                                        src="https://www.infracloud.io/assets/img/fission/extensible-icon.svg"
                                        alt="Example"
                                        className="img-fluid mb-3"
                                    />
                                    <h5 className="mb-2 ">Extensible and Customizable</h5>


                                    <p className="text-gray">Code in any language without worrying about the servers.</p>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </div>

            {/* ============================================================================================================== */}

            <div className="">
                <div className=" container mt-5">

                    <div className="text-center">
                        <h3>Calculate the Savings you get with Fission</h3>
                        <p className="text-gray">Select the number of function invocations and see how much you can save with <br></br>Fission over other leading providers.</p>
                    </div>
                    <div className="row border border-warning">
                        <div className="col-md-8 col-12 box-shadow">
                            <div>
                                <h6 className="fw-bold p-2">Select a tool to compare</h6>
                                <div className="d-flex justify-content-between p-2">
                                    <div className="text-center border px-5 py-2">
                                        <img
                                            src="https://www.infracloud.io/assets/img/fission/lambda-icon.svg"
                                            alt="Example"
                                            className="img-fluid mb-3"
                                        />
                                        <p className="text-gray fw-bold">Amazon Lambda</p>
                                    </div>

                                    <div className="text-center border px-5 py-2">
                                        <img
                                            src="https://www.infracloud.io/assets/img/fission/lambda-icon.svg"
                                            alt="Example"
                                            className="img-fluid mb-3"
                                        />
                                        <p className="text-gray fw-bold">Azure</p>
                                    </div>

                                    <div className="text-center border px-5 py-2">
                                        <img
                                            src="https://www.infracloud.io/assets/img/fission/lambda-icon.svg"
                                            alt="Example"
                                            className="img-fluid mb-3"
                                        />
                                        <p className="text-gray fw-bold">Google Functions</p>
                                    </div>
                                </div>

                            </div>
                            <div className="border border-warning p-2 mb-2">
                                select
                            </div>
                        </div>

                        <div className="col-md-4 col-12 border border-primary">
                            data box
                        </div>
                    </div>

                    <div className="text-center py-4 px-2">

                        <button className="btn btn-success shadow my-auto "
                            style={{ background: "#C0202E", borderRadius: "15px", border: "none" }}
                        >Contact Us</button>
                    </div>
                </div>
            </div>

            {/* ================================================================================================================= */}
            <div className="bg-very-dark-blue border mt-5 mb-5 py-5">
                <div className=" container mt-5 text-white">
                    <h3 className="text-center">More than 100+ Organizations have already adopted<br></br> Fission for FaaS on Kubernetes</h3>

                    <div className="d-flex justify-content-around flex-wrap mt-5">
                        <div className="text-center">
                            <h2 className="orange-color">152</h2>
                            <p>Contributors</p>
                            <img
                                src="https://www.infracloud.io/assets/img/icons/github.svg"
                                alt="Example"
                                className="img-fluid mb-3"
                                style={{ width: "30px" }}
                            />
                        </div>

                        <div className="text-center">
                            <h2 className="orange-color">7.9K</h2>
                            <p>Stars</p>
                            <img
                                src="https://www.infracloud.io/assets/img/icons/star-solid.svg"
                                alt="Example"
                                className="img-fluid mb-3"
                                style={{ width: "30px" }}
                            />
                        </div>

                        <div className="text-center">
                            <h2 className="orange-color">774</h2>
                            <p>Forks</p>
                            <img
                                src="https://www.infracloud.io/assets/img/icons/code-branch-solid.svg"
                                alt="Example"
                                className="img-fluid mb-3"
                                style={{ width: "30px" }}
                            />
                        </div>
                    </div>
                </div>
            </div>


            {/* ======================================================================================================================== */}
            <div className="">
                <div className=" container mt-5">
                    <h3 className="text-center">Join the growing community of Fission</h3>
                    <div className="row d-flex justify-content-around mt-5">
                        <div className="col-md-3 col-12 p-2 hover-effect hover-shadow">
                            <img
                                src="https://www.infracloud.io/assets/img/fission/slack-icon.svg"
                                alt="Example"
                                className="img-fluid mb-3"
                            />
                            <h5 className="mb-2 ">Slack </h5>
                            <p className="text-gray"><span className="orange-color">Join the Fission community</span> to engage with the fission team, interact with other users, and contribute ideas and feedback</p>
                        </div>

                        <div className="col-md-3 col-12 p-2 hover-effect hover-shadow">
                            <img
                                src="https://www.infracloud.io/assets/img/fission/github-icon.svg"
                                alt="Example"
                                className="img-fluid mb-3"
                            />
                            <h5 className="mb-2 ">Github </h5>
                            <p className="text-gray">Dive into the code, learn more about Fission. <span className="orange-color">Submit PRs and collaborate</span> with others like-minded contributors.</p>
                        </div>

                        <div className="col-md-3 col-12 p-2 hover-effect hover-shadow">
                            <img
                                src="https://www.infracloud.io/assets/img/fission/twitter-icon.svg"
                                alt="Example"
                                className="img-fluid mb-3"
                            />
                            <h5 className="mb-2 ">Twitter</h5>
                            <p className="text-gray">Follow us <span className="orange-color">@Fission</span> to stay up date with Fission news, updates and annoucements.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* ================================================================================================================== */}
            <WeOpenSource />
            {/* ====================================================================================================================== */}

            <div className="">
                <div className=" container mt-3">

                    <div className=" text-center">
                        <h3 className="fw-bold py-2">Fission Resources</h3>
                    </div>

                    <div className="row  p-3 d-flex justify-content-evenly mt-5 ">

                        {/* Child Div 1 */}
                        <div className=" col-md-3 col-12 hover-effect hover-shadow">
                            {/* Image */}
                            <div >
                                <img
                                    src="https://www.infracloud.io/assets/img/blog/blog-updated-creatives/index-image/writing-serverless-workloads-on-kubernetes-with-fission-1200x628.png"
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
                                <h5 className="mb-2 ">Writing Serverless Workloads on Kubernetes using Fission</h5>
                            </div>

                        </div>

                        {/* Child Div 2 */}
                        <div className="col-md-3 col-12 hover-effect hover-shadow">
                            {/* Image */}
                            <div >
                                <img
                                    src="https://www.infracloud.io/assets/img/devtalk-details/hands-on-introduction-to-fission.png"
                                    alt="Example Image"
                                    className="img-fluid mb-3"
                                />
                            </div>

                            <div className="position-relative mt-3 py-3">
                                <span className="fs-6 position-absolute bottom-100 px-4 py-2 rounded" style={{
                                    backgroundColor: "lavender",
                                    color: "blue"
                                }}>Tech Talk</span>

                                {/* Heading */}
                                <h5 className="mb-2 ">Hands-on Introduction to Fission</h5>
                            </div>

                        </div>

                        {/* Child Div 3 */}
                        <div className="col-md-3 col-12 hover-effect hover-shadow">
                            {/* Image */}
                            <div >
                                <img
                                    src="https://www.infracloud.io/assets/img/customers/building-a-faas-platform-on-kubernetes.png"
                                    alt="Example Image"
                                    className="img-fluid mb-3"
                                />
                            </div>

                            <div className="position-relative mt-3 py-3">
                                <span className="fs-6 position-absolute bottom-100 px-4 py-2 rounded" style={{
                                    backgroundColor: "lavender",
                                    color: "blue"
                                }}>Case Study</span>

                                {/* Heading */}
                                <h5 className="mb-2 ">Building a Faas Platform on Kubernetes</h5>
                            </div>

                        </div>

                    </div>

                </div>
            </div>

            {/* ===================================================================================================================== */}

            <div className="mt-5 mb-5">
                <div className="mt-5 mb-5 p-5 border border-primary container bg-purple text-center" style={{ borderRadius: "12px" }}>
                    <h3 className="p-2 text-white">Let your Developers Focus on the Code without <br></br>Worrying about the Kubernetes Clusters.</h3>
                    <button className="btn px-5 py-2 text-light" style={{ background: "#C0202E",  border: "none" }}>Contact Us</button>
                </div>
            </div>

            {/* ======================================================================================================================= */}
            <Footer />
        </>
    )
}

export default page
