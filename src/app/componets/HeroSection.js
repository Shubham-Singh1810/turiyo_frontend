import React from "react";

function HeroSection() {
  const cartItem = [
    {
      title: "Responsible use of AI",
      subTitle: "Whereas AI has a massive disruptive power for every industry – it is extremely critical to use it responsibly. We ensure the ethical and responsible use of AI in our product framework. ",
    },
    {
        title: "Leveraging the power of AI",
        subTitle: "The application of AI should not only be limited to the leading players in the industry. Rather everyone should benefit from this advancement. We ensure access to technology for all players in the industry ",
      },
      {
        title: "Inclusive AI",
        subTitle: "Again, AI should not only be limited to a handful of candidates – for example, white-collar employees. We need to expand it to other sectors -e.g. blue collar and grey collar as well. Our multimodal technology is built to address all types of stakeholders. ",
      },
  ];
  return (
    <div className="container marginNavTop">
      <div className="row m-0 p-0  ">
        <div className="col-lg-6 col-md-12 order-2 order-lg-1 m-0 p-0 my-auto heroSectionContent">
          <h1>We Care, <br/> Therefore We Are</h1>
          <p className="my-4">
            We are team of talented designers making websites with Bootstrap
          </p>
          <div className="d-flex">
            <button className="btn btn-success w-50 py-2 borderRadius30 shadow">
              Get Started
            </button>
          </div>
        </div>
        <div className="col-lg-6 col-md-12 m-0 p-0 order-1 order-lg-2">
          <img
            src="https://bootstrapmade.com/content/demo/eNno/assets/img/hero-img.png"
            className="img-fluid"
          />
        </div>
      </div>
      <div className="row mx-0 px-0 my-5 py-5">
        {cartItem?.map((v, i) => {
          return <div className="col-lg-4 col-12 m-0 p-0">
            <div className={' heroCard mb-4 mb-lg-0 p-2 p-lg-4 bg-light shadow-sm'+ (i==1 && " mx-lg-3 mx-0")} style={{height:"100%"}}>
                {/* <div>
                    <img src='https://cdn-icons-png.flaticon.com/128/6797/6797554.png'/>
                </div> */}
                <h1 className='my-3'>{v?.title}</h1>
                <p>{v?.subTitle}</p>
            </div>
          </div>;
        })}
      </div>
    </div>
  );
}

export default HeroSection;
