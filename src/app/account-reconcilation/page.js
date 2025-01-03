"use client";
import React from 'react'
import { useState } from 'react'
import Footer from '../componets/Footer'
import WeOpenSource from '../componets/WeOpenSource'
import Navbar from "../componets/Navbar"
function page() {

    const [selectedItem, setSelectedItem] = useState(null);

    // Sample array of items
    const items = [
        { id: 1, name: "Where can I find a complete documentation of the project?", details: "You could find the complete BotKube documentation here" },
        { id: 2, name: "Whom should I reach out to if I am facing a problem?", details: "You could join the BotKube thriving slack community or send an email to botkube@infracloud.io" },
        { id: 3, name: "Who can contribute to BotKube?", details: "As BotKube is an open source project, anyone can contribute. Start contributing to BotKube here" },
        { id: 4, name: "What if I need some custom integrations?", details: "Send an email to info@infracloud.io if you are looking for some custom integrations for BotKube." },
    ];

    const toggleItem = (id) => {
        // Toggle the currently selected item
        setSelectedItem(selectedItem === id ? null : id);
    };


    return (

        <>
            {/* =============================================================================================================== */}
            <Navbar />
            <div className='my-5 py-1'></div>
            <div className="" >
                <div className="container">
                    <div className=" row  ">

                        <div className="mt-5 col-md-5 col-12 ">
                            <h2 className="mb-3 fw-bold">Cyber Migration <br></br>Made Simple</h2>
                            <p className="mb-4 text-gray medium-text">Monitor, debug and run checks on your Kubernetes resources straight from your favorite messaging platform - Slack, Discord, Teams or Mattermost</p>
                            <button className="btn text-light px-4 py-2 " style={{ background: "#C0202E",  border: "none" }}>Get Started</button>

                        </div>

                        <div className="col-md-7 col-12 ">
                            <img
                                src="https://www.infracloud.io/assets/img/botkube/kubernetes-monitoring.svg"
                                alt="Logo"
                                className="img-fluid"
                            />
                        </div>

                    </div>
                </div>
            </div>
            {/* =================================================================================================================== */}

            <div className=" mt-5 p-4 top-to-bottom-color">
                <h3 className="text-center">Run Serverless Functions AnyWhere</h3>
                <p className="text-center text-gray">Monitor your Kubernetes cluster, debug critical deployments <br></br>& get recommendations for standard practices.</p>

                {/* first */}
                <div className="container">
                    <div className="row">
                        <div className="col-md-5 col-12 p-4 mt-5">
                            <div className="d-flex py-4">
                                <img
                                    src="https://www.infracloud.io/assets/img/Icons/monitor-icon-orange.svg"
                                    alt="Logo"
                                    className="img-fluid p-2"
                                />

                                <h4 className="p-4">Monitor</h4>
                            </div>
                            <p className="text-gray">BotKube watches Kubernetes resources and sends a notification to the channel if any event occurs (for example a ImagePullBackOff error).</p>
                        </div>
                        <div className="col-md-7 col-12">
                            <img
                                src="https://www.infracloud.io/assets/img/botkube/monitor.svg"
                                alt="Logo"
                                className="img-fluid"
                            />
                        </div>

                    </div>
                </div>

                {/* second */}
                <div className="container">
                    <div className="row">
                        <div className="col-md-7 col-12">
                            <img
                                src="https://www.infracloud.io/assets/img/botkube/debug.svg"
                                alt="Logo"
                                className="img-fluid"
                            />
                        </div>
                        <div className="col-md-5 col-12 p-4 mt-5">
                            <div className="d-flex py-4">
                                <img
                                    src="https://www.infracloud.io/assets/img/Icons/debug-icon-orange.svg"
                                    alt="Logo"
                                    className="img-fluid p-2"
                                />

                                <h4 className="p-4">Debug</h4>
                            </div>
                            <p className="text-gray">BotKube can execute `kubectl` commands on the Kubernetes cluster without giving access to Kubeconfig or underlying infrastructure.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* third */}
            <div className="container">
                <div className="row">
                    <div className="col-md-5 col-12 p-4 mt-5">
                        <div className="d-flex py-4">
                            <img
                                src="https://www.infracloud.io/assets/img/Icons/run-checks-icon-orange.svg"
                                alt="Logo"
                                className="img-fluid p-2"
                            />

                            <h4 className="p-4">Run Checks</h4>
                        </div>
                        <p className="text-gray">Some checks are built-in, but you can define and add additional checks for specific resources or events.</p>
                    </div>
                    <div className="col-md-7 col-12">
                        <img
                            src="https://www.infracloud.io/assets/img/botkube/debug.svg"
                            alt="Logo"
                            className="img-fluid"
                        />
                    </div>

                </div>
            </div>


            {/* ========================================================================================================================== */}

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
            {/* ================================================================================================================================ */}

            <div className="">
                <div className="container">
                    <div className="p-2">
                        <h2 className="text-center">Integrations to supercharge your K8s monitoring</h2>
                        <p className="text-center text-gray">Supports Slack, Mattermost, Teams, Discord</p>
                    </div>
                    <div className="p-2 d-flex flex-wrap justify-content-around">
                        <div className="text-center">
                            <img
                                src="https://www.infracloud.io/assets/img/botkube/webhook-logo.svg"
                                alt="Logo"
                                className="img-fluid"
                            />
                            <p className="fw-bold p-3">Webhook</p>
                        </div>

                        <div className="text-center">
                            <img
                                src="https://www.infracloud.io/assets/img/botkube/slack-logo.svg"
                                alt="Logo"
                                className="img-fluid"
                            />
                            <p className="fw-bold p-3">Slack</p>
                        </div>

                        <div className="text-center">
                            <img
                                src="https://www.infracloud.io/assets/img/botkube/teams-logo.svg"
                                alt="Logo"
                                className="img-fluid"
                            />
                            <p className="fw-bold p-3">Teams</p>
                        </div>
                        <div className="text-center">
                            <img
                                src="https://www.infracloud.io/assets/img/botkube/mattermost-logo.svg"
                                alt="Logo"
                                className="img-fluid"
                            />
                            <p className="fw-bold p-3">Mattermost</p>
                        </div>
                        <div className="text-center">
                            <img
                                src="https://www.infracloud.io/assets/img/botkube/discord-logo.svg"
                                alt="Logo"
                                className="img-fluid"
                            />
                            <p className="fw-bold p-3">Discord</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* ================================================================================================================================= */}
            <WeOpenSource />
            {/* ================================================================================================================================== */}

            <div className="mt-5 top-to-bottom-color">
                <div className=" container mt-3 mb-5">

                    <div className=" text-center">
                        <h3 className="fw-bold py-2">BotKube Resources</h3>
                    </div>

                    <div className="row  p-3 d-flex justify-content-evenly mt-5 ">

                        {/* Child Div 1 */}
                        <div className=" col-md-3 col-12 hover-effect hover-shadow">
                            {/* Image */}
                            <div >
                                <img
                                    src="https://www.infracloud.io/assets/img/devtalk-details/monitoring-kubernetes-clusters-by-chatting-with-them.png"
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
                                <h5 className="mb-2 ">Monitoring Kubernetes Clusters by “chatting” with them</h5>
                            </div>

                        </div>

                        {/* Child Div 2 */}
                        <div className="col-md-3 col-12 hover-effect hover-shadow">
                            {/* Image */}
                            <div >
                                <img
                                    src="https://www.infracloud.io/assets/img/blog/blog-updated-creatives/index-image/building-a-modern-chatops-platform-1200x628.png"
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
                                <h5 className="mb-2 ">Building a Modern Chatops Platform</h5>
                            </div>

                        </div>

                        {/* Child Div 3 */}
                        <div className="col-md-3 col-12 hover-effect hover-shadow">
                            {/* Image */}
                            <div >
                                <img
                                    src="https://www.infracloud.io/assets/img/devtalk-details/kubernetes-monitoring-made-simple-with-botkube.png"
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
                                <h5 className="mb-2 ">Kubernetes Monitoring Made Simple with BotKube</h5>
                            </div>

                        </div>

                    </div>

                </div>
            </div>
            {/* =================================================================================================================================== */}

            <div className="">
                <div className=" container">
                    <div className="row mt-5 mb-5">
                        <div className="col-md-6 col-12">
                            <h2>Have any questions?<br></br> Look here.</h2>
                        </div>
                        <div className="col-md-6 col-12">
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
                                        {selectedItem === item.id && (
                                            <div className="mt-2 p-2 text-gray">
                                                {item.details}
                                            </div>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* =========================================================================================================================== */}

            <div className="mt-5 mb-5">
                <div className="mt-5 mb-5 p-5 border border-primary container bg-purple text-center" style={{ borderRadius: "12px" }}>
                    <h2 className="p-2 text-white">Seamlessly Manage your Kubernetes Clusters <br></br>from your Messaging Platform.</h2>

                    <button className="btn px-5 text-light py-2 m-4" style={{ background: "#C0202E",  border: "none" }}>Add to Slack</button>
                    <button className="btn px-5 text-light py-2 " style={{ background: "#C0202E",  border: "none" }}>Add to Items</button>

                </div>
            </div>
            {/* ============================================================================================================================== */}
            <Footer />

        </>
    )
}

export default page
