import React from "react";

export const Signup = () => {
  return (
    <div className="relative w-full h-screen md:p-16 p-5">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover -z-10"
      >
        <source src="hero.mp4" type="video/mp4" />
      </video>
      <form
        action="POST"
        className="md:w-1/2 flex flex-col justify-center mx-auto p-10 rounded-xl border border-black/20 bg-black/5 backdrop-blur-md shadow-lg "
      >
        <div className="bg-black w-2/5 rounded-full flex mt-3 p-0.5 h-10">
          <button className="text-white w-1/2 rounded-full bg-stone-800">
            Signup
          </button>
          <button className="text-stone-300 border-none w-1/2">Signin</button>
        </div>
        <p className="text-2xl text-white pt-5 pb-1">Create an account</p>
        <div className="flex justify-center items-center space-x-3 mt-3">
          <input
            type="text"
            placeholder="firstName"
            className="w-1/2 border-[1px] border-stone-400 text-white outline-none rounded-md mt-3 p-2 placeholder-stone-500"
          />
          <input
            type="text"
            placeholder="lastName"
            className="w-1/2 border-[1px] border-stone-400 text-white outline-none rounded-md mt-3 p-2 placeholder-stone-500"
          />
        </div>
        <input
          type="text"
          placeholder="Enter your email"
          className="w-full border-[1px] border-stone-400 text-white outline-none rounded-md mt-3 p-2 placeholder-stone-500"
        />
        <input
          type="text"
          placeholder="(+234) 803 456 8768"
          className="w-full border-[1px] border-stone-400 text-white outline-none rounded-md mt-3 p-2 placeholder-stone-500"
        />
        <input
          type="password"
          placeholder="************"
          className="w-full border-[1px] border-stone-400 text-white outline-none rounded-md mt-3 p-2 placeholder-stone-500"
        />
        <div className="flex mt-5 items-center space-x-2 text-white">
          <label htmlFor="Terms of Service">Terms of Service</label>
          <input type="checkbox" className="bg-black text-black" />
        </div>
        <button className="bg-white rounded-md p-2 text-black text-lg hover:bg-white/80 mt-7 cursor-pointer duration-500">
          Submit
        </button>
      </form>
    </div>
  );
};
