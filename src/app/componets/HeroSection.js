import React from "react";

function HeroSection() {
  const cartItem = [
    {
      title: "Card 1",
      subTitle: "hello World",
    },
    {
        title: "Card 1",
        subTitle: "hello World",
      },
      {
        title: "Card 1",
        subTitle: "hello World",
      },
  ];
  return (
    <div className="container marginNavTop">
      <div className="row m-0 p-0  ">
        <div className="col-6 m-0 p-0 my-auto heroSectionContent">
          <h1>Elegant and creative solutions</h1>
          <p className="my-4">
            We are team of talented designers making websites with Bootstrap
          </p>
          <div className="d-flex">
            <button className="btn btn-success w-50 py-2 borderRadius30 shadow">
              Get Started
            </button>
          </div>
        </div>
        <div className="col-6 m-0 p-0">
          <img
            src="https://bootstrapmade.com/content/demo/eNno/assets/img/hero-img.png"
            className="img-fluid"
          />
        </div>
      </div>
      <div className="row mx-0 px-0 my-5 py-5">
        {cartItem?.map((v, i) => {
          return <div className="col-4">
            <div className=' heroCard p-4 bg-light shadow'>
                <div>
                    <img src='https://cdn-icons-png.flaticon.com/128/6797/6797554.png'/>
                </div>
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