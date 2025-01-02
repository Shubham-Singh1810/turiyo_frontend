import React from "react";
import Slider from "react-slick";

function HomeSlider({data}) {
 
  var settings = {
    
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 1500,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="container">
      <Slider {...settings}>
        {data?.map((v, i) => {
          return (
            <div className="">
              <div className="m-3 mx-4 p-4 shadow h-100">
                <div>
                  <img src={v?.img} className="imgHeightSlider img-fluid" />
                </div>
                <div className="mt-3">
                  <h3 style={{ height: "70px" }} className="mb-0">
                    {v?.heading}
                  </h3>
                  <p className="text-secondary" style={{ height: "180px" }}>
                    {v?.para}
                  </p>
                </div>
                <button className="btn-danger btn shadow" style={{ background: "#C0202E" }}>
                  Learn More
                </button>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}

export default HomeSlider;
