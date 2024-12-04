import React from 'react'

function WeOpenSource() {
    return (
        <div className=" top-to-bottom-color">
            <div className="container  p-3 mt-5 mb-5">
                <div className="row d-flex justify-content-evenly">
                    {/* Left Div */}
                    <div className="col-lg-4 col-12 scrolling-image" style={{height:"350px"}}>
                        <img
                            src="https://www.infracloud.io/assets/img/open-source-contributions/sprite-for-we-believe-in-paying-it-forward-section.svg"
                            alt="Placeholder Image"
                            className="img-fluid mb-3"
                        />
                    </div>

                    {/* Right Div */}
                    <div className="col-lg-5 col-12 mt-4 mt-lg-0  d-grid align-self-center">
                        <h2 className="mb-3 fw-bold">We<span style={{ color: "orange" }}>&#x2764;</span> Open Source</h2>
                        <p className="mb-0 text-gray textJustify">
                            We believe open source enables anyone to create technologies for a better tomorrow. Our developers have been constantly contributing to cloud native projects including Kubernetes.</p>
                        <span className="text-gray fst-italic">Sneak peek at our OSS contributions</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WeOpenSource
