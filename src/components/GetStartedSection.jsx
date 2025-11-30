import React from "react";

const GetStartedSection = () => {
  return (
    <div className="w-full mt-12 sm:mt-16 md:mt-20 py-12 sm:py-14 md:py-16 px-4 sm:px-6 bg-white dark:bg-[linear-gradient(to_bottom_right,#0f172a,#020617)] from-slate-900 via-slate-950 to-black dark:bg-grid-white/[0.05]">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 leading-tight px-2">
          Power your business with{" "}
          <span className="bg-linear-to-r from-indigo-400 to-sky-400 bg-clip-text text-transparent text-4xl sm:text-5xl md:text-6xl">
            QuickPay
          </span>
        </h1>

        <p className="text-slate-400 text-xs sm:text-sm md:text-base mb-6 sm:mb-8 max-w-xl mx-auto px-2">
          QuickPay is built to help businesses of every size accept payments
          faster, securely, and globally without hassle.
        </p>

        <button className="px-6 sm:px-8 py-2.5 sm:py-3 rounded-full text-sm sm:text-base font-medium bg-indigo-500 hover:bg-indigo-400 transition shadow-lg shadow-indigo-500/30 cursor-pointer">
          Sign Up Now
        </button>
      </div>
    </div>
  );
};

export default GetStartedSection;
