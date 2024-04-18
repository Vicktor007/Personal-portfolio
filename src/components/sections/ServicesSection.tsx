import React from "react";
import Header from "../common/Header";
import ServiceCard from "../cards/ServiceCard";

function ServicesSection() {
  const data = [
    {
      iconUrl: "/images/189.png",
      title: "Web Design",
    },
    {
      iconUrl: "/images/103.png",
      title: "Frontend Web Development",
    },
    
    {
      iconUrl: "/images/59.png",
      title: "Backend Web Development",
    },
    {
      iconUrl: "/images/22.png",
      title: "FullStack Web Development",
    },
  ];
  return (
    <section>
      <Header title="My Skills include the following:" description="" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[31px] mt-[59px]">
        {data.map((service, index) => (
          <ServiceCard {...service} key={index} />
        ))}
      </div>
    </section>
  );
}

export default ServicesSection;
