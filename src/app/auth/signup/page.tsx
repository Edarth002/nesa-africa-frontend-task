"use client";
import React from "react";
import { useState } from "react";

interface FormState {
  firstname: string;
  lastname: string;
  password: string;
  confirmPassword: string;
  email: string;
  number: string;
  isChecked: boolean;
}

const Signup = () => {
  const [form, setForm] = useState<FormState>({
    firstname: "",
    lastname: "",
    password: "",
    confirmPassword: "",
    email: "",
    number: "",
    isChecked: false,
  });
  const [success, setSuccess] = useState(Boolean);
  const [error, setError] = useState(String);
  const [loading, setLoading] = useState(false);

  const handleForm = (e: any) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSuccessState = () =>{
    setSuccess((prev) => !prev)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  setLoading(true);

  let errorMessage = "";
  //Regular Expression to confirm email and phone number patterns
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneNumberRegex = /^\+?\d{10,15}$/;

  if (form.firstname.length < 1) {
    errorMessage = "Firstname is required";
  } else if (form.lastname.length < 1) {
    errorMessage = "Lastname is required";
  } else if (form.email.length < 1) {
    errorMessage = "Email is required";
  } else if (!emailRegex.test(form.email)) {
  errorMessage = "Please enter a valid email address";
  } else if (!phoneNumberRegex.test(form.number)) {
  errorMessage = "Please enter a valid phone number";
  } 
  else if (form.number.length < 1) {
    errorMessage = "Phone number is required";
  } else if (form.password.length < 1) {
    errorMessage = "Password is required";
  } else if (form.password !== form.confirmPassword) {
    errorMessage = "Ensure that confirm password matches password";
  }else if (!form.isChecked) {
  errorMessage = "You must accept the Terms of Service";
}

  if (errorMessage) {
    setError(errorMessage);
    setSuccess(false);
    setLoading(false);
    return;
  }

  setError("");
  
  setForm({firstname: "",
    lastname: "",
    password: "",
    confirmPassword: "",
    email: "",
    number: "",
    isChecked: false,
  });
  setSuccess(true);

  setLoading(false);
};

  return (
    <div className="relative w-full h-auto min-h-screen md:p-7 p-5">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover -z-10"
      >
        <source src="hero.mp4" type="video/mp4" />
      </video>
      {success ? (<section className="md:w-1/3 w-full flex flex-col justify-center mx-auto md:p-10 p-5 rounded-xl border border-black/20 bg-black/5 backdrop-blur-md shadow-lg animate-slideIn">
        <p className="absolute right-3 top-3 text-2xl text-stone-200 cursor-pointer animate-pulse" onClick={handleSuccessState}>X</p>
        <img src="/checked.png" alt="Success Icon" width={50} height={50} className="w-1/3 mx-auto justify-center flex invert"/>
        <p className="md:text-3xl text-2xl text-white py-5">You Have Successfully Signed Up!</p>
        <p className="text-sm text-stone-400">Now you have signed up, you can enjoy access to our awesome gallery, you can download images and videos for free! But, don't forget to credit our equally awesome contributors</p>
        <p className="text-sm text-stone-100 mt-3">We would redirect you to login page shortly, so you can get started</p>
      </section>):(
      <form
        className="md:w-1/2 flex flex-col justify-center mx-auto md:p-10 p-5 rounded-xl border border-black/20 bg-black/5 backdrop-blur-md shadow-lg animate-slideIn"
      >
        <div className="bg-black md:w-2/5 w-4/5 rounded-full flex mt-3 p-0.5 h-10">
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
            onChange={handleForm}
            value={form.firstname}
            name="firstname"
          />
          <input
            type="text"
            placeholder="lastName"
            className="w-1/2 border-[1px] border-stone-400 text-white outline-none rounded-md mt-3 p-2 placeholder-stone-500"
            onChange={handleForm}
            value={form.lastname}
            name="lastname"
          />
        </div>
        <input
          type="text"
          placeholder="Enter your email"
          className="w-full border-[1px] border-stone-400 text-white outline-none rounded-md mt-3 p-2 placeholder-stone-500"
          onChange={handleForm}
          value={form.email}
          name="email"
        />
        <input
          type="text"
          placeholder="(+234) 803 456 8768"
          className="w-full border-[1px] border-stone-400 text-white outline-none rounded-md mt-3 p-2 placeholder-stone-500"
          onChange={handleForm}
          value={form.number}
          name="number"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full border-[1px] border-stone-400 text-white outline-none rounded-md mt-3 p-2 placeholder-stone-500"
          onChange={handleForm}
          value={form.password}
          name="password"
        />
        <input
          type="password"
          placeholder="Confirm Password"
          className="w-full border-[1px] border-stone-400 text-white outline-none rounded-md mt-3 p-2 placeholder-stone-500"
          onChange={handleForm}
          value={form.confirmPassword}
          name="confirmPassword"
        />
        <div className="flex mt-5 items-ce
        nter space-x-2 text-white">
          <label htmlFor="Terms of Service" >Terms of Service</label>
          <input
            type="checkbox"
            name="isChecked"
            onChange={handleForm}
            checked={form.isChecked}
            className="bg-black text-black"
          />
        </div>
        <button
          value="Submit"
          className="bg-white rounded-md p-2 text-black text-lg hover:bg-white/80 mt-7 cursor-pointer duration-500"
          onClick={handleSubmit}>
            {loading ? "Submitting..." : "Submit"}
            </button>
        <p className="text-red-500 text-sm mt-2">{error}</p>
      </form>)}
      
    </div>
  );
};

export default Signup
