import React from 'react';
// import { Search, Linkedin, Twitter, Github, Globe, MessageCircle, ChevronUp } from 'lucide-react';

const Experience = () => {
  const timelineData = [
    {
      id: 1,
      type: 'experience',
      company: 'Videostori (Masterstroke digiinnovators Pvt. Ltd.)',
      duration: 'AUGUST\'24 - PRESENT',
      achievements: [
        'Full stack developer (MERN)',
        'Developed analytics for Video Player',
        'Built Google Ad compatible video player for Web Apps and android apps',
        'Automated VAST code generation tool',
        'Built whatsapp chat history configuration panel'
      ]
    },
    {
      id: 2,
      type: 'experience',
      company: 'DevOps Spatial',
      duration: 'APRIL\'24 - JULY\'24',
      achievements: [
        'Built 2FA module in MERN stack',
        'Integrated FusionAuth APIs for authentication',
        'Generated QR codes for OTP setup',
        'Verified OTPs from authenticator app',
        'Ensured secure API calls and errors'
      ]
    },
    {
      id: 3,
      type: 'experience',
      company: 'Coding ninjas',
      duration: 'AUGUST\'23 - NOVEMBER\'24',
      achievements: [
        'Learned Core Java fundamentals and Object-Oriented Programming (OOPs) concepts',
        'Gained hands-on experience with MongoDB, Express.js, React.js, and Node.js',
        'Built full-stack web applications using the MERN stack',
        'Worked on real-world projects to apply concepts in practice',
        'Strengthened debugging, API integration, and frontend-backend collaboration skills'
      ]
    },
    {
      id: 4,
      type: 'education',
      company: 'ABES Engineering College',
      duration: 'AUGUST\'19 - JULY\'23',
      achievements: [
        'Graduated B.Tech in Computer Science (2023) from ABES Engineering College',
        'Maintained a strong academic record with 8.0 CGPA',
        'Gained foundational knowledge in data structures, algorithms, and software engineering',
        'Automated VAST code generation tool',
        'Participated in technical workshops, coding contests, and project-based learning'
      ]
    }
  ];

  return (
    <div id="experience" className="min-h-screen bg-black">

      {/* Main Content */}
      <main className="max-w-6xl mx-auto py-15">
        <div className="text-center mb-16">
          <h1 className="text-6xl md:text-7xl mb-6">
            Experience & Education
          </h1>
        </div>

        <div className="relative">
          <div className="absolute left-140 top-0 bottom-0 border-l-2 border-white border-dashed hidden lg:block timeline">
          </div>
            <div className="sticky inline-block rotate-[90deg] top-20 left-182 text-3xl">✈</div>
          <div className="space-y-12">
            {timelineData.map((item, index) => (
              <div key={item.id} className="relative even:lg:ml-160 lg:w-120 px-4 lg:px-0 experience-box">

                <div className="rounded-lg shadow-sm border border-white p-6 shadow-white hover:shadow-md transition-shadow">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-white mb-2">
                        {item.company}
                      </h3>
                      <p className="text-sm text-gray-400 mb-4 font-medium">
                        {item.duration}
                      </p>

                      {/* Achievements List */}
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

export default Experience
