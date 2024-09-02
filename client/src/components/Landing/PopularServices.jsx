import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

function PopularServices() {
  const router = useRouter();
  const popularServicesData = [
    { name: "Decentralized Applications", label: "Building user-facing apps on decentralized networks", image: "/service1.png" },
    { name: "Smart Contracts Development Design", label: "Writing and deploying self-executing blockchain contracts", image: "/service2.jpeg" },
    {
      name: "Blockchain Integration",
      label: "Writing and deploying self-executing blockchain contracts",
      image: "/service3.jpeg",
    },
    {
      name: "Frontend Development",
      label: "Designing and developing interactive user interfaces for the web",
      image: "/service4.jpeg",
    },
    {
      name: "Backend Development",
      label: "Creating server-side logic and managing databases for web apps",
      image: "/service5.jpeg",
    },
    { name: "Full-Stack Development", label: "End-to-end web development, covering both frontend and backend", image: "/service6.jpeg" },
    {
      name: "Tokens & NFTs",
      label: "Creating and managing digital assets like tokens and non-fungible tokens",
      image: "/service7.jpeg",
    },
    // { name: "Translation", label: "Go global", image: "/service8.jpeg" },
  ];
  return (
    <div className="mx-20 my-16">
      <h2 className="text-4xl mb-5 text-[#404145] font-bold">
        Popular Services
      </h2>
      <ul className="flex flex-wrap gap-4">
        {popularServicesData.map(({ name, label, image }) => {
          return (
            <li
              key={name}
              className="relative cursor-pointer"
              onClick={() => router.push(`/search?category=${name}`)}
            >
              <div className="absolute z-10 text-white left-5 top-4 right-5">
                <h6 className="font-extrabold text-2xl">{name}</h6>
                <span>{label}</span>
              </div>
              <div className="h-80 w-72 ">
                <Image src={image} fill alt="service" />
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default PopularServices;
