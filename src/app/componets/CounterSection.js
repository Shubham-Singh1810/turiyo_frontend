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
    <div className="row mt-5 pt-3">
      {counterArr?.map((v, i) => {
        return (
          <div className="col-3">
            <div className="counterCard">
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
