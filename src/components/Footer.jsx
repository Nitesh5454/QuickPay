import React from "react";

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 pt-10 px-4 sm:px-6 md:px-16 lg:px-24 xl:px-32">

      <hr className="border-slate-800 mb-8 sm:mb-10" />

      <div className="flex flex-wrap justify-between gap-10 md:gap-6">
     
        <div className="max-w-80">
        
          <div className="mb-4 flex items-center gap-2">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl ">
              <svg
                className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 xl:w-11 xl:h-11"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-label="QuickPay logo"
              >
                <path
                  d="M6 30L24 4L42 30H30L24 22L18 30H6Z"
                  fill="url(#grad)"
                />
                <defs>
                  <linearGradient
                    id="grad"
                    x1="6"
                    y1="4"
                    x2="42"
                    y2="42"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#0EA5E9" />
                    <stop offset="1" stopColor="#2563EB" />
                  </linearGradient>
                </defs>
              </svg>
            </span>

            <span className="text-base sm:text-lg font-semibold text-slate-100">
              Quick{" "}
              <span className="text-blue-400 text-xl sm:text-2xl font-bold">
                Pay
              </span>
            </span>
          </div>

          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
            QuickPay helps modern businesses accept, manage, and scale payments
            with a single, powerful platform — built for speed, reliability, and
            seamless experiences.
          </p>

        
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 mt-4 text-slate-400">
            <svg
              className="w-5 h-5 sm:w-6 sm:h-6 hover:text-slate-100 cursor-pointer transition"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M7.75 2A5.75 5.75 0 002 7.75v8.5A5.75 5.75 0 007.75 22h8.5A5.75 5.75 0 0022 16.25v-8.5A5.75 5.75 0 0016.25 2h-8.5zM4.5 7.75A3.25 3.25 0 017.75 4.5h8.5a3.25 3.25 0 013.25 3.25v8.5a3.25 3.25 0 01-3.25 3.25h-8.5a3.25 3.25 0 01-3.25-3.25v-8.5zm9.5 1a4 4 0 11-4 4 4 4 0 014-4zm0 1.5a2.5 2.5 0 102.5 2.5 2.5 2.5 0 00-2.5-2.5zm3.5-.75a.75.75 0 11.75-.75.75.75 0 01-.75.75z" />
            </svg>

            <svg
              className="w-5 h-5 sm:w-6 sm:h-6 hover:text-slate-100 cursor-pointer transition"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M13.5 9H15V6.5h-1.5c-1.933 0-3.5 1.567-3.5 3.5v1.5H8v3h2.5V21h3v-7.5H16l.5-3h-3z" />
            </svg>

            <svg
              className="w-5 h-5 sm:w-6 sm:h-6 hover:text-slate-100 cursor-pointer transition"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M22 5.92a8.2 8.2 0 01-2.36.65A4.1 4.1 0 0021.4 4a8.27 8.27 0 01-2.6 1A4.14 4.14 0 0016 4a4.15 4.15 0 00-4.15 4.15c0 .32.04.64.1.94a11.75 11.75 0 01-8.52-4.32 4.14 4.14 0 001.29 5.54A4.1 4.1 0 013 10v.05a4.15 4.15 0 003.33 4.07 4.12 4.12 0 01-1.87.07 4.16 4.16 0 003.88 2.89A8.33 8.33 0 012 19.56a11.72 11.72 0 006.29 1.84c7.55 0 11.68-6.25 11.68-11.67 0-.18 0-.35-.01-.53A8.18 8.18 0 0022 5.92z" />
            </svg>

            <svg
              className="w-5 h-5 sm:w-6 sm:h-6 hover:text-slate-100 cursor-pointer transition"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M4.98 3.5C3.88 3.5 3 4.38 3 5.48c0 1.1.88 1.98 1.98 1.98h.02c1.1 0 1.98-.88 1.98-1.98C6.98 4.38 6.1 3.5 4.98 3.5zM3 8.75h3.96V21H3V8.75zm6.25 0h3.8v1.68h.05c.53-.98 1.82-2.02 3.75-2.02 4.01 0 4.75 2.64 4.75 6.07V21H17v-5.63c0-1.34-.03-3.07-1.88-3.07-1.88 0-2.17 1.47-2.17 2.98V21H9.25V8.75z" />
            </svg>
          </div>
        </div>

    
        <FooterColumn
          title="PRODUCTS"
          items={[
            "Payment Gateway",
            "Payment Links",
            "Payment Pages",
            "Subscriptions",
            "Payouts",
          ]}
        />

       
        <FooterColumn
          title="DEVELOPERS"
          items={["API Docs", "Integration Guides", "SDKs", "Status"]}
        />

      
        <FooterColumn
          title="COMPANY"
          items={["About QuickPay", "Careers", "Press", "Partners"]}
        />

    
        <div className="max-w-80 w-full sm:w-auto">
          <p className="text-xs sm:text-sm font-semibold text-slate-200 tracking-wide">
            STAY UPDATED
          </p>
          <p className="mt-3 text-xs sm:text-sm text-slate-400 leading-relaxed">
            Get product updates, best practices, and insights to grow your
            business.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center mt-4 gap-2 sm:gap-0">
            <input
              type="email"
              className="bg-slate-900 border border-slate-700 rounded sm:rounded-l sm:rounded-r-none h-9 px-3 text-xs sm:text-sm outline-none focus:border-indigo-500 transition w-full sm:w-auto"
              placeholder="Your email"
            />
            <button className="flex items-center justify-center bg-indigo-500 hover:bg-indigo-400 h-9 w-full sm:w-10 rounded sm:rounded-r sm:rounded-l-none transition">
              <svg
                className="w-4 h-4 text-white"
                aria-hidden="true"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 12H5m14 0-4 4m4-4-4-4"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

  
      <hr className="border-slate-800 mt-8" />

      <div className="flex flex-col md:flex-row gap-3 items-center justify-between py-5 text-xs md:text-sm">
        <p className="text-slate-500 text-center md:text-left">
          © {new Date().getFullYear()} QuickPay. All rights reserved.
        </p>

        <ul className="flex flex-wrap items-center justify-center md:justify-end gap-3 md:gap-4 text-slate-500">
          <li>
            <a href="#" className="hover:text-slate-100">
              Privacy
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-slate-100">
              Terms
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-slate-100">
              Compliance
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};


const FooterColumn = ({ title, items }) => (
  <div className="min-w-36">
    <p className="text-xs sm:text-sm font-semibold text-slate-200 tracking-wide">
      {title}
    </p>
    <ul className="mt-3 flex flex-col gap-1.5 sm:gap-2 text-xs sm:text-sm">
      {items.map((item, index) => (
        <li key={index}>
          <a href="#" className="hover:text-slate-100 transition">
            {item}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

export default Footer;
