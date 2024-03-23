import React from 'react';
import oa from '../assets/primera.png'

export default function Experience() {
  return (
    <div className=" max-w-6xl mx-auto p-5 py-20" id="experience">
      <div className="text-6xl md:text-7xl text-center md:text-left font-medium text-gray-300 pb-4 mb-16">
        Experience
      </div>
      {experiences.map((exp) => {
        return (
          <div className="w-full shadow-md p-5 rounded-lg mb-10 border-2 border-yellow-600">
            <div className=" grid md:grid-cols-4 gap-4 md:order-2">
              <div
                className="w-full h-40 flex items-center justify-center my-auto hover:scale-105 transform transition ease-in cursor-pointer"
                onClick={() => window.open(exp.companyUrl || window.location, '_blank')}
              >
                <img
                  className="max-h-full max-w-full rounded-md"
                  src={
                    exp.img 
                  }
                  alt=""
                ></img>
              </div>
              <div className="md:col-span-3 space-y-4 my-auto">
                <div className="text-lg md:text-2xl text-cyan-500">{exp.company}</div>
                <div className="md:flex justify-between">
                  <div className="text-xl text-slate-500 ">{exp.position}</div>
                  <div className=" text-slate-400">{exp.date}</div>
                </div>
                <div className=" text-gray-400 font-extralight text-sm">
                  <ul className="list-disc">
                    {exp.details.map((detail) => (
                      <li>{detail}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

const experiences = [
  {
    position: 'Software Engineer',
    company: 'PrimEra',
    details: [
      'I am a highly skilled software developer with almost 2 years of experience in Frontend ,SQL Server and SSIS. I am a team player diligent, with good interpersonal communication skills combined with self-motivation, initiative, and the ability to creatively think. I have completed my Bachelor’s in Computer Science and Engineering from India. I have completed Python and Linux command certifications. .'
    ],
    date: 'Jan 2024 - Persent',
    img: oa ,   
    companyUrl: 'https://primeramed.com/',
  },
  {
    position: 'Software Engineer',
    company: 'CitiusTech',
    details: [
      'I am a highly skilled software developer with almost 2 years of experience in Frontend ,SQL Server and SSIS. I am a team player diligent, with good interpersonal communication skills combined with self-motivation, initiative, and the ability to creatively think. I have completed my Bachelor’s in Computer Science and Engineering from India. I have completed Python and Linux command certifications. .'
    ],
    date: 'Nov 2021 - Dec 2023',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPt3MdCs2A0PaSx7HTGDrHfQwa3MLkDOq0Cq1lmBbh&s',
    companyUrl: 'https://www.citiustech.com/',
  },
];
