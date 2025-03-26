import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Captcha from "../components/Captcha"; 

const CreateAccount = () => {
  const [captchaVerified, setCaptchaVerified] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    if (!captchaVerified) {
      alert("Please complete the CAPTCHA");
      return;
    }
    console.log("Form Data:", data);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="bg-white shadow-lg p-8 w-full max-w-lg rounded-lg">
        <h2 className="text-2xl font-semibold mb-6">CREATE NEW CUSTOMER ACCOUNT</h2>

        {/* Personal Information */}
        <h3 className="text-lg font-medium mb-2">Personal Information</h3>
        <hr className="mb-4" />

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* First Name */}
          <div>
            <label className="block font-medium text-gray-700">
              First Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              {...register("firstName", { required: "First name is required" })}
              className="w-full px-4 py-2 border rounded-lg"
            />
            {errors.firstName && <p className="text-red-500">{errors.firstName.message}</p>}
          </div>

          {/* Last Name */}
          <div>
            <label className="block font-medium text-gray-700">
              Last Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              {...register("lastName", { required: "Last name is required" })}
              className="w-full px-4 py-2 border rounded-lg"
            />
            {errors.lastName && <p className="text-red-500">{errors.lastName.message}</p>}
          </div>

          {/* CAPTCHA */}
          <Captcha onVerify={setCaptchaVerified} />

          {/* Submit Button */}
          <button
            type="submit"
            className={`w-full px-4 py-2 text-white font-medium rounded-lg ${
              captchaVerified ? "bg-black hover:bg-gray-900" : "bg-gray-400 cursor-not-allowed"
            }`}
            disabled={!captchaVerified}
          >
            CREATE AN ACCOUNT
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateAccount;
