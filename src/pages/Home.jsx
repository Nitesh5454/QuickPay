// src/pages/Home.jsx (or wherever this lives)
import React from "react";
import { InfiniteMovingCardsDemo } from "../components/MovingCard";
import Middle from "../components/Middle";
import SwapPage from "../components/SwapPage";
import Industry from "../components/Industry";
import AnimatedCardHover from "../components/PaymentBottom";
import Upfooter from "../components/Upfooter";
import Footer from "../components/Footer";
 import { NumberTicker } from "../components/ui/number";

const Home = () => {
  return (
    <div
      className="min-h-screen bg-[linear-gradient(to_bottom_right,#0f172a,#020617)]
      from-slate-900 via-slate-950 to-black text-slate-50"
    >
      {/* === HERO SECTION === */}
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 py-14 sm:py-18 md:py-20 flex flex-col md:flex-row items-center gap-10 md:gap-14">
        {/* LEFT: Text */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 sm:mb-5">
            Powerful payments for modern businesses
          </h1>

          <p className="text-slate-300 text-sm sm:text-base md:text-lg max-w-xl mx-auto md:mx-0 mb-6 sm:mb-8">
            Accept fast, secure payments and manage transactions effortlessly
            with an intelligent all-in-one payment platform.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 sm:gap-4 mb-3 sm:mb-4">
            <button className="px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 rounded-full text-sm md:text-base font-medium bg-indigo-500 hover:bg-indigo-400 transition shadow-lg shadow-indigo-500/30 cursor-pointer">
              Get Started
            </button>

            <button className="px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 rounded-full text-sm md:text-base font-medium border border-slate-600/80 text-slate-100 hover:bg-slate-800/60 transition cursor-pointer">
              Contact Sales
            </button>
          </div>

          <p className="text-[11px] sm:text-xs md:text-sm text-slate-400">
            No setup fees • Instant activation • Trusted by <NumberTicker value={10000} className={`text-slate-400`}>
              </NumberTicker>+ businesses
          </p>
        </div>

        {/* RIGHT: Dashboard Card */}
        <div className="flex-1 flex justify-center md:justify-end mt-8 md:mt-0">
          <div className="w-full max-w-xs sm:max-w-sm md:max-w-md rounded-3xl bg-slate-900/60 border border-indigo-500/10 shadow-xl shadow-indigo-500/20 backdrop-blur-xl px-5 sm:px-6 py-5 sm:py-6">
            <h3 className="text-indigo-300 font-semibold text-base sm:text-lg mb-3 sm:mb-4">
              Payments Dashboard
            </h3>

            <p className="text-[11px] sm:text-xs uppercase tracking-wide text-slate-400">
              Today&apos;s Revenue
            </p>

            <NumberTicker
              className="text-2xl sm:text-3xl font-semibold mt-1 mb-3"
              value={229000}
              prefix="₹"
            >
              ₹
            </NumberTicker>

            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 text-emerald-300 text-[11px] sm:text-xs px-3 py-1 mb-4 sm:mb-5">
              <span className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-emerald-400 text-[10px] font-bold text-slate-900">
                ✓
              </span>
              <span>95% Successful</span>
            </div>

            <p className="text-[11px] sm:text-xs font-medium text-slate-400 mb-3">
              Payment Breakdown
            </p>

            <div className="space-y-2 text-sm">
              <div className="flex justify-between items-center rounded-xl bg-slate-800/70 px-3 py-2">
                <span className="text-indigo-300 font-medium">UPI</span>
                <span className="text-slate-100 font-semibold">₹ 96,200</span>
              </div>

              <div className="flex justify-between items-center rounded-xl bg-slate-800/60 px-3 py-2">
                <span className="text-sky-300 font-medium">Cards</span>
                <span className="text-slate-100 font-semibold">₹ 78,500</span>
              </div>

              <div className="flex justify-between items-center rounded-xl bg-slate-800/60 px-3 py-2">
                <span className="text-blue-300 font-medium">NetBanking</span>
                <span className="text-slate-100 font-semibold">₹ 54,300</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* === MOVING CARDS SECTION === */}
      <div className="w-full mt-8 sm:mt-10">
        <InfiniteMovingCardsDemo />
      </div>

      <div className="mt-6 sm:mt-8 w-full">
        <Middle />
      </div>

      <div className="mt-6 sm:mt-8 w-full">
        <SwapPage />
      </div>

      <div className="mt-4 sm:mt-6">
        <Industry />
      </div>

      <div className="mt-4 sm:mt-6">
        <AnimatedCardHover />
      </div>

      <div className="mt-4 sm:mt-6">
        <Upfooter />
      </div>

      <div className="mt-2 sm:mt-4">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
