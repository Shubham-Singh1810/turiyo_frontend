import React from "react";

function ServicesSection() {
  const serviceData = [
    {
      title: "Blockchain",
      subTitle:
        "A revolutionary digital innovation which is still in evolution phase and showing the  power of distributed system and databases. blockchain is a type of distributed ledger technology That means it’s a collection of shared, confirmed, encrypted data distributed across multiple geographic locations.",
      img: "https://tequre.com/wp-content/uploads/2020/04/Big-Data-Intelligence.png",
    },
    {
      title: "Big Data & AI",
      subTitle:
        "AI and Big Data are now seemingly inseparable due to the growth of data volume in digital transformation phase. AI and analytics works together to unleash the hidden value of the data. Big data is proven technology to handle massive volume of data reliably along with the best data process approach I.e. Map-reduce",
      img: "https://tequre.com/wp-content/uploads/2020/04/Big-Data-Development.png",
    },
    {
      title: "Microservices",
      subTitle:
        "Digital transformation to design and develop highly scalable and distributed system to handle the new age business complexities. Microservices provide the ideal architecture for continuous integration & continuous delivery. It is proven very useful in the era of containerization and cloud computing",
      img: "https://tequre.com/wp-content/uploads/2020/04/Big-Data-Analytics.png",
    },
   
  ];
  return (
    <div className="container marginNavTop">
      <div className="pageHeading mb-4">
        <h2>Services <span style={{color:"#C0202E"}}>offered By Tequre</span> </h2>
        
      </div>
      <div className="row m-0 p-0  ">
        {serviceData?.map((v, i) => {
          return (
            <div className="col-lg-4 col-12 m-0 p-0">
              <div className="serviceCard text-center px-3 py-4 m-4  shadow bg-light">
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
