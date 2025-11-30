

import { useState, useEffect } from "react";

export default function Industry() {
  const [current, setCurrent] = useState(0);

  const slides = [
    {
      title: "E-Commerce",
      headline: "Empower your e-commerce business",
      description:
        "Streamline payment management with a unified dashboard, enabling both online and in-person payment collection while enhancing conversion rates and minimizing fraud.",
      customers: "+ 60,000 others",
      button: "See Solutions",
      img: "/ecommerce.png",
    },
    {
      title: "Education",
      headline: "Payments for your education business.",
      description:
        "Effortlessly establish and monitor fee payments and vendor payouts for educational institutions, tutorials, or online courses, whether you have a website or not.",
      customers: "+ 22,000 others",
      button: "See Solutions",
      img: "/education.png",
    },
    {
      title: "BFSI",
      headline: "Payments ecosystem for financial services",
      description:
        "Streamline collection management, automate recurring payments, and expedite loan disbursement for a comprehensive financial solution.",
      customers: "+ 1800 others",
      button: "See Solutions",
      img: "/bfsi.png",
    },
    {
      title: "SaaS",
      headline: "Global Payment Solutions for IT & SaaS Providers",
      description:
        "Seamlessly accept payments in over 100 currencies, facilitate customizable subscription payments, and efficiently execute vendor payouts.",
      customers: "+ 14,500 others",
      button: "See Solutions",
      img: "/saas.png",
    },
    {
      title: "Freelancer",
      headline: "The personalized payment solution for freelancers",
      description:
        "Easily accept payments, even without a website and without any coding expertise, while also enabling the creation of your personalized, branded online store.",
      customers: "",
      button: "See Solutions",
      img: "/free.png",
    },
  ];

  const totalSlides = slides.length;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % totalSlides);
    }, 3000);

    return () => clearInterval(timer);
  }, [totalSlides]);

  return (
    <div className="w-full flex flex-col items-center py-8 md:py-10 lg:py-12 px-4 sm:px-6 md:px-0">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 md:mb-10 leading-snug">
        Powering every industry. <br /> Powering all disruptors.
      </h1>

      <div
        className="w-full max-w-5xl mx-auto overflow-hidden rounded-2xl 
        bg-[linear-gradient(to_bottom_right,#020617,#020617,#020617,#0f172a)] 
        text-slate-50 shadow-sm"
      >
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {slides.map((slide, i) => (
            <div
              key={i}
              className="w-full shrink-0 flex flex-col md:flex-row items-center justify-between p-6 sm:p-8 md:p-10 gap-6 md:gap-8"
            >
              {/* Left content */}
              <div className="flex-1 w-full">
                <h2 className="text-xs sm:text-sm font-semibold text-blue-400 uppercase tracking-wide">
                  {slide.title}
                </h2>

                <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold mt-2 leading-snug">
                  {slide.headline}
                </h3>

                <p className="text-slate-300 mt-4 max-w-lg text-sm md:text-base">
                  {slide.description}
                </p>

                {slide.customers && (
                  <p className="mt-3 text-slate-100 font-semibold text-sm md:text-base">
                    {slide.customers}
                  </p>
                )}

                <button className="mt-6 px-5 sm:px-6 py-2.5 sm:py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-semibold text-sm md:text-base cursor-pointer">
                  {slide.button}
                </button>
              </div>

              {/* Right image */}
              <div className="flex-1 flex justify-center w-full mt-4 md:mt-0">
                <img
                  src={slide.img}
                  alt={slide.title}
                  className="rounded-xl shadow-md object-contain max-h-52 sm:max-h-60 md:max-h-64 w-full"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dot indicators */}
      <div className="flex items-center mt-5 space-x-2">
        {slides.map((_, i) => (
          <span
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2.5 h-2.5 md:w-3 md:h-3 rounded-full cursor-pointer transition-all duration-300 ${
              current === i ? "bg-white" : "bg-white/30"
            }`}
          ></span>
        ))}
      </div>
    </div>
  );
}
