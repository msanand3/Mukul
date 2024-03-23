import React from 'react';
import OJ from '../assets/Portfolio.png';

export default function Projects() {


  const projects = [
    {
      title: "React Portfolio",
      details: "The Modern Portfolio Website, meticulously crafted with the dynamic capabilities of React and the styling finesse of Tailwind CSS, stands as a captivating digital showcase of my skills, accomplishments, and creative journey. This web application encapsulates a contemporary and immersive user experience, aligning seamlessly with my professional narrative.",
      img: OJ,
      links: [
        {
          icon: (
            <img
              alt=""
              src="https://img.icons8.com/ios-filled/50/000000/link--v1.png"
              className="h-full"
            ></img>
          ),
          link: "/"
        },
        {
          icon: <i class="devicon-github-original"></i>,
          link: "/",
        },
      ]
    },
  ];

  return (
    <div className="relative overflow-hidden" id="projects">
      <div className=" max-w-6xl mx-auto p-5 py-20" id="experience">
        <div className="text-6xl md:text-7xl text-center md:text-left font-medium text-gray-300 pb-4 mb-16">
          Projects
        </div>

        <div className="grid md:grid-cols-4 gap-4">
          {projects.map((proj) => {
            return (
              <div className="p-4 shadow-md space-y-4">
                <div className="h-32 overflow-hidden border-b relative">
                  <img alt="" src={proj.img} className="w-full absolute left-0 my-auto "></img>
                </div>
                <div className="text-2xl text-cyan-500">{proj.title}</div>
                <div className="h-20 overflow-y-auto text-gray-400 font-light text-xs">
                  {proj.details}
                </div>
                <div className="flex justify-end space-x-4 items-center opacity-40">
                  {proj.links.map((link) => {
                    return (
                      <a
                        href={link.link}
                        target={'_blank'}
                        rel="noreferrer"
                        className="h-5 cursor-pointer text-2xl text-gray-500 flex items-center"
                      >
                        {link.icon}
                      </a>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
