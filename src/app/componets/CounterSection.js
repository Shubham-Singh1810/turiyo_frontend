import React from "react";

function CounterSection() {
  const counterArr = [
    {
      title: "Clients",
      count: "232",
    },
    {
      title: "Projects",
      count: "521",
    },
    {
      title: "Hours Of Support",
      count: "1453",
    },
    {
      title: "Workers",
      count: "32",
    },
  ];
  return (
    <div className="row mt-5 pt-3 bg-light">
      {counterArr?.map((v, i) => {
        return (
          <div className="col-lg-3 col-md-6 col-12">
            <div className="counterCard mb-5 mb-lg-0">
              <h1>{v?.count}</h1>
              <p>{v?.title}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default CounterSection;
