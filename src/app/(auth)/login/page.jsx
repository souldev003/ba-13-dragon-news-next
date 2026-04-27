"use client";
import { authClient } from "@/lib/auth-client";
import { useForm } from "react-hook-form";
import Link from "next/link";

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleFormData = async (formData) => {
    const { data, error } = authClient.signIn.email(formData);

    const user = data.user;
    console.log(user, error);
  };

  return (
    <div className="bg-slate-200 min-h-screen flex items-center justify-center p-4">
      <div className="bg-white p-8 md:p-16 rounded-xl shadow-lg space-y-3 w-full max-w-md">
        <div className="border-b border-gray-200">
          <h2 className="text-2xl font-bold pb-3 text-center text-gray-800">
            Login Your Account
          </h2>
        </div>

        <form onSubmit={handleSubmit(handleFormData)}>
          <fieldset className="fieldset space-y-4">
            <div>
              <legend className="fieldset-legend mb-1">Email</legend>
              <input
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address",
                  },
                })}
                type="email"
                className="input w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-400"
                placeholder="Enter your email"
              />

              {errors.email && (
                <p className="text-red-500 text-sm mt-1.5">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div>
              <legend className="fieldset-legend mb-1">Password</legend>
              <input
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Minimum 6 characters required",
                  },
                })}
                type="password"
                className="input w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-400"
                placeholder="Enter your password"
              />

              {errors.password && (
                <p className="text-red-500 text-sm mt-1.5">
                  {errors.password.message}
                </p>
              )}
            </div>

            <button className="btn bg-gray-700 hover:bg-gray-800 text-white w-full mt-6 py-2 rounded-md transition-colors font-semibold">
              Login
            </button>
          </fieldset>
        </form>

        <p className="text-center text-sm text-gray-500 pt-4">
          Don&apos;t have an account?{" "}
          <Link
            href="/register"
            className="text-blue-600 cursor-pointer hover:underline"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
