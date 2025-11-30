import React from "react";

const Middle = () => {
  return (
    <section className="w-full bg-white dark:bg-[linear-gradient(to_bottom_right,#0f172a,#020617)] from-slate-900 via-slate-950 to-black dark:bg-grid-white/[0.05] py-14 sm:py-16 md:py-20 px-4 sm:px-6 md:px-10 lg:px-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 md:gap-10">
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
            Empowering Businesses to Make{" "}
            <span className="text-blue-600">
              Payments Simple, Secure & Faster
            </span>
          </h1>

          <p className="mt-4 text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-lg mx-auto md:mx-0">
            QuickPay helps businesses accept online payments instantly.
          </p>

          <button className="mt-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 sm:px-7 py-2.5 sm:py-3 rounded-lg shadow-md transition-all text-sm sm:text-base cursor-pointer">
            Know More
          </button>
        </div>

        <div className="flex-1 flex justify-center">
          <img
            src="/hero1.png"
            alt="QuickPay Payment Illustration"
            className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg rounded-xl shadow-lg object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Middle;
