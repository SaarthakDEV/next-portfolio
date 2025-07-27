import { TIMELINE_DATA } from "@/libs/constant";
import { ExperienceType } from "@/libs/types";
import React from "react";

const Experience = () => {
  

  return (
    <div id="experience" className="min-h-screen bg-black">
      <main className="max-w-6xl mx-auto py-15">
        <div className="text-center mb-16">
          <h1 className="text-6xl md:text-7xl mb-6">Experience & Education</h1>
        </div>

        <div className="relative">
          <div className="absolute left-[48.5%] top-0 bottom-0 border-l-2 border-white border-dashed hidden lg:block timeline">
            <div className="sticky inline-block rotate-[90deg] top-15 ml-[-51%] text-3xl">
              ✈
            </div>
          </div>
          <div className="space-y-12">
            {TIMELINE_DATA.map((item: ExperienceType) => (
              <div
                key={item.id}
                className="relative even:lg:ml-160 lg:w-120 px-4 lg:px-0 experience-box"
              >
                <div className="rounded-lg shadow-sm border border-white p-6 shadow-white hover:shadow-md transition-shadow">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-white mb-2">
                        {item.company}
                      </h3>
                      <p className="text-sm text-gray-400 mb-4 font-medium">
                        {item.duration}
                      </p>

                      <ul className="space-y-2">
                        {item.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start ">
                            <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <span className="text-gray-200 leading-relaxed">
                              {achievement}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Experience;
