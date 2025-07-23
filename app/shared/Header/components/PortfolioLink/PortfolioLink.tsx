import React from "react";
import Image from "next/image";

const PortfolioLink: React.FC = () => {
  return (
    <a
      href="https://portfolio-of-samuel.vercel.app/#projects"
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col items-center space-x-2 group hover:underline transition"
    >
      <div className="relative">
        <Image
          src="/images/Profilovka.jpg"
          alt="My Projects"
          width={60}
          height={60}
          className="rounded-full shadow-md border-2 border-caribean group-hover:scale-110 transition-transform duration-200"
        />
        
      </div>
      <div className="flex flex-col">
        <span className="font-semibold text-caribean-light text-lg group-hover:underline">
          My Website
        </span>
        <span className="text-xs text-silver text-center">See my projects</span>
      </div>
    </a>
  );
};

export default PortfolioLink;