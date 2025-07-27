import { TECH_STACK } from "@/libs/constant";
import React from "react";

const Skills = () => {

  return (
    <section
      id="skills"
      className="min-h-screen bg-black text-white py-20 px-4"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-6xl md:text-7xl mb-6">Skills & Technologies</h1>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4 md:gap-6">
          {TECH_STACK.map((tech) => (
            <div key={tech.id} className="group relative overflow-hidden">
              <div className="bg-black border border-gray-800 rounded-2xl hover:rounded-2xl p-6 h-full flex flex-col items-center justify-center text-center transition-all duration-300 hover:scale-105 hover:bg-gray-800 hover:border-gray-600 cursor-pointer">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${tech.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl`}
                ></div>

                <div className="relative text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  <img src={tech.logo} alt="logo" />
                </div>

                <h3 className="relative text-sm font-semibold text-white transition-colors duration-300">
                  {tech.heading}
                </h3>

                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-all duration-1000 ease-out"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
