import React from "react";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-Cblue home"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="animate__animated animate__bounce text-4xl sm:text-7xl font-bold bg-gradient-to-r from-cyan-200 to-cyan-400 bg-clip-text text-transparent">
            Mukul Anand
          </h2>
          <div className=""></div>
          <p className="text-gray-400 py-4 max-w-md text-lg">
            Software Engineer || IIIT Manipur
          </p>
        </div>       
      </div>
    </div>
  );
};

export default Home;
