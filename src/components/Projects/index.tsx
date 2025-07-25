import Link from "next/link";
import React from "react";

type BlogPosts = {
  id: number;
  image: string;
  date: string;
  title: string;
  excerpt: string;
  techStack: string[];
  link: string;
};

const Projects = () => {
  const BLOG_POSTS: BlogPosts[] = [
    {
      id: 1,
      image: "/images/analytics.jpg",
      date: "September, 2024",
      title: "Video Analytics",
      excerpt:
        "Track key performance metrics like impressions, views, watch time, and CTA clicks in real time. Includes detailed insights such as viewer OS, browser, geo-mapping, heatmaps, and engagement data from the last 30 minutes to help optimize video performance and audience targeting.",
      techStack: [
        "NextJs",
        "JavaScript",
        "NodeJs",
        "Apex-Charts",
        "Tailwind CSS",
        "Dash Tail",
        "ShadCN",
      ],
      link: "https://videostori.ai/admin",
    },
    {
      id: 2,
      image: "/images/news.JPG",
      date: "November, 2023",
      title: "News App",
      excerpt:
        "A responsive news app that fetches real-time articles by category using News API. Built with React and Tailwind CSS, and deployed on GitHub Pages.",
      techStack: [
        "React.js",
        "JavaScript",
        "News API",
        "Axios",
        "GitHub Pages",
        "Bootstrap",
      ],
      link: "https://saarthakdev.github.io/News-App/",
    },
    {
      id: 3,
      image: "/images/ai-website.png",
      date: "July, 2025",
      title: "AI Website",
      excerpt:
        "I worked on developing a fast, user-friendly interface and seamless multi-channel distribution. An AI-powered platform for creating interactive marketing videos with features like clickable hotspots, personalization, and in-video shopping.",
      techStack: ["Next.js", "Tailwind CSS", "Typescript", "AWS", "Sanity CMS"],
      link: "https://videostori.ai",
    },
  ];
  return (
    <section id="projects" className="bg-black py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Optional Header */}
        <div className="text-center mb-12">
          <h2 className="text-6xl font-bold text-white mb-4">My Work</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post) => (
            <div
              key={post.id}
              className="bg-black text-white shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden group transform"
            >
              <div className="relative h-50 w-full overflow-hidden rounded-3xl">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500"
                />
              </div>

              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <time className="text-sm text-white font-medium tracking-wide">
                    {post.date}
                  </time>
                </div>

                <Link
                  href={post.link}
                  target="_blank"
                  className="text-xl font-bold text-white mb-4 leading-tight group-hover:text-gray-300 transition-colors duration-200"
                >
                  {post.title}
                </Link>

                <p className="text-white mb-6 leading-relaxed text-sm line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="flex gap-2 flex-wrap">
                  {post.techStack.map((tech, idx) => (
                    <span
                      key={idx + 1}
                      className="ring py-2 px-3 text-sm w-fit rounded-sm text-nowrap border-green-500 text-green-500 hover:text-black hover:bg-green-500"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
