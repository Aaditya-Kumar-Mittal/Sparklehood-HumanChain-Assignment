import React from "react";
import backgroundImage from "../assets/image3.jpg";
function About() {
  return (
    <div
      className="flex flex-col items-center justify-center text-center h-[80vh] p-10 m-10 rounded-lg shadow-lg"
      style={{
        backgroundImage: `url(${backgroundImage})`, // Using the imported image here
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h1 className="text-6xl font-bold mb-6 p-56 text-white font-mono">
        At the forefront of AI safety, HumanChain aims to build a safer, more
        trustworthy, and human-centric digital world.
      </h1>
    </div>
  );
}

export default About;
