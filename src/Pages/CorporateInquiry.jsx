import React from "react";

const CorporateInquiry = () => {
  return (
    <div className="h-full mt flex items-center justify-center bg-white p-6">
      <div className="w-full max-w-6xl flex">
        {/* Left - Image Section */}
        <div className="w-2/3">
          <img
            src="/corporate.webp"
            alt="Corporate Gifting"
            className="w-full object-cover"
          />
        </div>

        {/* Right - Text & Buttons */}
        <div className="w-1/3 flex flex-col items-center justify-center text-center px-8 py-12">
          <p className="text-gray-800 text-lg font-medium mb-6 leading-relaxed">
            Please fill out the form below based on the type of inquiry you have.
            <br /> Thank you.
          </p>

          <div className="flex flex-col gap-4 w-full">
            <button className="border border-black px-6 py-3 text-black font-medium transition hover:bg-black hover:text-white w-full">
              For Corporate & Gifting
            </button>
            <button className="border border-black px-6 py-3 text-black font-medium transition hover:bg-black hover:text-white w-full">
              Distribution Business
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CorporateInquiry;

