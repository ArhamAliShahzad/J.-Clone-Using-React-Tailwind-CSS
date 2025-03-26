import React, { useState } from "react";

const generateCaptcha = () => {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  let captcha = "";
  for (let i = 0; i < 5; i++) {
    captcha += chars[Math.floor(Math.random() * chars.length)];
  }
  return captcha;
};

const Captcha = ({ onVerify }) => {
  const [captcha, setCaptcha] = useState(generateCaptcha());
  const [userInput, setUserInput] = useState("");

  const verifyCaptcha = () => {
    if (userInput.toUpperCase() === captcha) {
      onVerify(true);
    } else {
      onVerify(false);
      alert("CAPTCHA incorrect. Try again.");
      setCaptcha(generateCaptcha());
      setUserInput("");
    }
  };

  return (
    <div className="text-center">
      <div className="mb-2 font-mono text-2xl bg-gray-200 p-2 inline-block tracking-widest">
        {captcha}
      </div>
      <input
        type="text"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
        placeholder="Enter CAPTCHA"
        className="w-full px-4 py-2 border rounded-lg mb-2"
      />
      <button
        type="button"
        onClick={verifyCaptcha}
        className="bg-gray-800 text-white px-4 py-2 rounded-lg"
      >
        Verify CAPTCHA
      </button>
    </div>
  );
};

export default Captcha;
