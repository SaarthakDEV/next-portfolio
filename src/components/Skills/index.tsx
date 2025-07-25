import React from 'react';

const Skills = () => {
  const techStack = [
    { id: "html", heading: "HTML", logo: "/logos/html.svg", color: "from-orange-500 to-red-500" },
    { id: "css", heading: "CSS", logo: "/logos/css.svg", color: "from-blue-500 to-purple-500" },
    { id: "javascript", heading: "JavaScript", logo: "/logos/javascript.svg", color: "from-yellow-400 to-orange-500" },
    { id: "typescript", heading: "TypeScript", logo: "/logos/typescript.svg", color: "from-blue-600 to-indigo-600" },
    { id: "bootstrap", heading: "Bootstrap", logo: "/logos/bootstrap.svg", color: "from-purple-500 to-pink-500" },
    { id: "material-ui", heading: "Material-UI", logo: "/logos/material-ui.svg", color: "from-blue-400 to-cyan-400" },
    { id: "tailwindcss", heading: "TailwindCSS", logo: "/logos/tailwindcss.svg", color: "from-cyan-400 to-blue-500" },
    { id: "java", heading: "Java", logo: "/logos/java.svg", color: "from-red-500 to-yellow-500" },
    { id: "nodejs", heading: "NodeJS", logo: "/logos/nodejs.svg", color: "from-green-500 to-emerald-500" },
    { id: "expressjs", heading: "ExpressJS", logo: "/logos/expressjs.svg", color: "from-gray-600 to-gray-800" },
    { id: "rest-api", heading: "REST API", logo: "/logos/rest-api.svg", color: "from-indigo-500 to-purple-600" },
    { id: "mongodb", heading: "MongoDB", logo: "/logos/mongodb.svg", color: "from-green-600 to-green-800" },
    { id: "sql", heading: "SQL", logo: "/logos/sql.svg", color: "from-blue-500 to-indigo-700" },
    { id: "github", heading: "Github", logo: "/logos/github.svg", color: "from-gray-700 to-black" },
    { id: "reactjs", heading: "ReactJS", logo: "/logos/react.svg", color: "from-cyan-400 to-blue-500" },
    { id: "redux", heading: "Redux", logo: "/logos/redux.svg", color: "from-purple-600 to-indigo-600" },
    { id: "zustand", heading: "Zustand", logo: "/logos/zustand.svg", color: "from-yellow-500 to-orange-500" },
    { id: "nextjs", heading: "NextJS", logo: "/logos/next.svg", color: "from-black to-gray-800" },
    { id: "socket-io", heading: "Socket.io", logo: "/logos/socket.svg", color: "from-green-400 to-blue-500" },
    { id: "webpack", heading: "Webpack", logo: "/logos/webpack.svg", color: "from-blue-600 to-cyan-500" },
    { id: "docker", heading: "Docker", logo: "/logos/docker.svg", color: "from-blue-500 to-blue-700" },
    { id: "aws-s3", heading: "AWS S3", logo: "/logos/s3.svg", color: "from-orange-400 to-yellow-500" },
    { id: "aws-ec2", heading: "AWS EC2", logo: "/logos/ec2.svg", color: "from-orange-500 to-red-500" },
    { id: "wordpress", heading: "WordPress", logo: "/logos/wordpress.svg", color: "from-blue-600 to-indigo-600" },
  ];

  return (
    <section id="skills" className="min-h-screen bg-black text-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-6xl md:text-7xl mb-6">
            Skills & Technologies
          </h1>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-6">
          {techStack.map((tech) => (
            <div
              key={tech.id}
              className="group relative overflow-hidden"
            >
              {/* Card */}
              <div className="bg-black border border-gray-800 rounded-2xl hover:rounded-2xl p-6 h-full flex flex-col items-center justify-center text-center transition-all duration-300 hover:scale-105 hover:bg-gray-800 hover:border-gray-600 cursor-pointer">
                {/* Gradient Background Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${tech.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl`}></div>
                
                {/* Logo/Icon */}
                <div className="relative z-10 text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  <img src={tech.logo} alt="logo"/>
                </div>
                
                {/* Technology Name */}
                <h3 className="relative z-10 text-sm font-semibold text-white transition-colors duration-300">
                  {tech.heading}
                </h3>
                
                {/* Shine Effect */}
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