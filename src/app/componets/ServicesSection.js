import React from "react";

function ServicesSection() {
  const serviceData = [
    {
      title: "Upload JD",
      subTitle:
        "Whats special about your services or offerings? Give your audience a reason to choose you over your competition. Cite it above, then flesh it out here.",
      img: "https://cdn-icons-png.flaticon.com/128/2706/2706950.png",
    },
    {
      title: "Upload JD",
      subTitle:
        "Whats special about your services or offerings? Give your audience a reason to choose you over your competition. Cite it above, then flesh it out here.",
      img: "https://cdn-icons-png.flaticon.com/128/11515/11515286.png",
    },
    {
      title: "Upload JD",
      subTitle:
        "Whats special about your services or offerings? Give your audience a reason to choose you over your competition. Cite it above, then flesh it out here.",
      img: "https://cdn-icons-png.flaticon.com/128/9119/9119160.png",
    },
    {
      title: "Upload JD",
      subTitle:
        "Whats special about your services or offerings? Give your audience a reason to choose you over your competition. Cite it above, then flesh it out here.",
      img: "https://cdn-icons-png.flaticon.com/128/4807/4807598.png",
    },
    {
      title: "Upload JD",
      subTitle:
        "Whats special about your services or offerings? Give your audience a reason to choose you over your competition. Cite it above, then flesh it out here.",
      img: "https://cdn-icons-png.flaticon.com/128/2966/2966773.png",
    },
    {
      title: "Upload JD",
      subTitle:
        "Whats special about your services or offerings? Give your audience a reason to choose you over your competition. Cite it above, then flesh it out here.",
      img: "https://cdn-icons-png.flaticon.com/128/7601/7601227.png",
    },
  ];
  return (
    <div className="container marginNavTop">
      <div className="pageHeading mb-4">
        <h2>Services</h2>
        <p>
          Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
          consectetur velit
        </p>
      </div>
      <div className="row m-0 p-0  ">
        {serviceData?.map((v, i) => {
          return (
            <div className="col-4 m-0 p-0">
              <div className="serviceCard text-center px-3 py-4 m-4  shadow-sm bg-light">
                <img src={v?.img} />
                <h2 className='my-3'>{v?.title}</h2>
                <p>{v?.subTitle}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ServicesSection;
