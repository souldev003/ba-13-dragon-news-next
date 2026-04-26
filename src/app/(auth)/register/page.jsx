"use client";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";

const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleRegister = (data) => {
    console.log("Registration Data:", data);
  };

  return (
    <div className="bg-slate-100 min-h-screen flex items-center justify-center p-4">
      <div className="bg-white p-6 md:p-10 rounded-sm shadow-sm w-full max-w-lg">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-700">
          Register your account
        </h2>

        <hr className="mb-6 border-gray-100" />

        <form onSubmit={handleSubmit(handleRegister)} className="space-y-4">
          {/* Your Name */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1.5">
              Your Name
            </label>
            <input
              {...register("name", { required: "Name is required" })}
              type="text"
              className="w-full bg-gray-100 border-none p-3 text-sm rounded-md focus:ring-1 focus:ring-gray-400 outline-none"
              placeholder="Enter your name"
            />
            {errors.name && (
              <p className="text-red-500 text-[10px] mt-1">
                {errors.name.message}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1.5">
              Photo URL
            </label>
            <input
              {...register("photoURL")}
              type="text"
              className="w-full bg-gray-100 border-none p-3 text-sm rounded-md focus:ring-1 focus:ring-gray-400 outline-none"
              placeholder="Enter your photo URL"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1.5">
              Email
            </label>
            <input
              {...register("email", {
                required: "Email is required",
                pattern: { value: /^\S+@\S+$/i, message: "Invalid email" },
              })}
              type="email"
              className="w-full bg-gray-100 border-none p-3 text-sm rounded-md focus:ring-1 focus:ring-gray-400 outline-none"
              placeholder="Enter your email address"
            />
            {errors.email && (
              <p className="text-red-500 text-[10px] mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1.5">
              Password
            </label>
            <input
              {...register("password", {
                required: "Password is required",
                minLength: { value: 6, message: "Min 6 characters" },
              })}
              type="password"
              className="w-full bg-gray-100 border-none p-3 text-sm rounded-md focus:ring-1 focus:ring-gray-400 outline-none"
              placeholder="Enter your password"
            />
            {errors.password && (
              <p className="text-red-500 text-[10px] mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          <div className="flex items-center space-x-2">
            <input
              {...register("terms", { required: true })}
              type="checkbox"
              id="terms"
              className="w-3.5 h-3.5 rounded border-gray-300"
            />
            <label htmlFor="terms" className="text-xs text-gray-600">
              Accept <span className="font-bold">Term & Conditions</span>
            </label>
          </div>

          <button className="w-full bg-[#404040] hover:bg-black text-white py-3 rounded-md transition-colors font-semibold text-base mt-2">
            Register
          </button>
        </form>

        <p className="text-center text-xs text-gray-500 mt-5">
          Already have an account?{" "}
          <Link
            href="/login"
            className="text-red-500 font-bold hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
