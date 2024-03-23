import React from 'react';
import MA from "../assets/MA.png"

export default function About() {
  return (
    <div className=" max-w-6xl mx-auto p-5 py-20" id="about">
      <div className="text-6xl md:text-7xl text-center md:text-left font-medium text-gray-300 pb-4 mb-16">
        About Me
      </div>

      <div className="md:flex items-center space-y-8 md:space-y-0">
        <div className="md:order-last basis-1/3 h-full">
          <img
            src={MA
            }
            className="rounded-full h-52 w-52 mx-auto"
            alt=""
          ></img>
        </div>
        <div className="basis-2/3 space-y-4">
          <span className="text-gray-500 text-xl">Hi, I am </span>
          <div className="text-cyan-500 text-4xl font-bold">Mukul Anand</div>
          <div className="text-xl text-gray-500 font-semibold">Passionate Coder</div>
          <div className="font-light text-gray-400">
          I love being around people who push me to do better, and I do the same for them. I enjoy learning new things and teaching others. Facing tough challenges excites me. I like trying different ways to do things rather than sticking to one. I think it's great to know a bit about many things rather than only focusing on one.            
          </div>
        </div>
      </div>
      <div className="md:flex justify-between">
        <a
          className="p-2 cursor-pointer rounded-lg relative px-10 w-max flex items-center m-auto space-x-4 border bg-cyan-500"
          href={'https://drive.google.com/file/d/12XJss_UM--c1n2VIbDbw-wcF54HkjxeU/view?usp=sharing'}
          target={'_blanck'}
          rel="noreferrer"
        >
          <div>Resume</div>
          <img
            className="h-6 w-6"
            src="https://img.icons8.com/material-outlined/48/000000/link--v1.png"
            alt=""
          ></img>
        </a>
      </div>
    </div>
  );
}