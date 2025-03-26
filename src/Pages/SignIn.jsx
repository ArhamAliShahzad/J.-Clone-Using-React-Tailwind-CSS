import React from "react";
import { useForm } from "react-hook-form";

const SignIn = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log("User Signed In:", data);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        {/* Heading */}
        <h2 className="text-2xl font-semibold text-center mb-6">Sign In</h2>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          {/* Email Field */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Email Address</label>
            <input
              type="email"
              {...register("email", {
                required: "Email is required",
                pattern: { value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/, message: "Invalid email format" }
              })}
              className="w-full border px-4 py-2 rounded-md focus:ring-2 focus:ring-black"
              placeholder="Enter your email"
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
          </div>

          {/* Password Field */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Password</label>
            <input
              type="password"
              {...register("password", { required: "Password is required", minLength: { value: 6, message: "Must be at least 6 characters" } })}
              className="w-full border px-4 py-2 rounded-md focus:ring-2 focus:ring-black"
              placeholder="Enter your password"
            />
            {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
          </div>

          {/* Forgot Password */}
          <div className="text-right">
            <a href="/forgot-password" className="text-gray-600 text-sm hover:underline">Forgot password?</a>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 bg-black text-white font-semibold rounded-md hover:bg-gray-800 transition-all"
          >
            Sign In
          </button>
        </form>

        {/* Divider */}
        <div className="text-center text-gray-500 text-sm mt-4">
          Don't have an account? <a href="/account" className="text-black font-medium hover:underline">Sign Up</a>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
