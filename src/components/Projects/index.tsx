import { BLOG_POSTS } from "@/libs/constant";
import { BlogPosts } from "@/libs/types";
import Link from "next/link";
import React from "react";


const Projects = () => {
  return (
    <section id="projects" className="bg-black py-10 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-4">My Work</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post: BlogPosts) => (
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
