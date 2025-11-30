import  { useState, useEffect } from "react";

const FeatureShowcaseSection = () => {
  const [active, setActive] = useState(null);
  const [isMobile, setIsMobile] = useState(false);


  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth < 768); 
    };

    checkScreen();
    window.addEventListener("resize", checkScreen);

    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  const cards = [
    {
      id: 1,
      title: "Accept Payments",
      text: "Accept cards, UPI, netbanking and more with a single powerful checkout built for higher conversions.",
      img: "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: 2,
      title: "Make Payouts",
      text: "Send instant payouts to vendors, partners and employees directly to their bank accounts or UPI IDs.",
      img: "https://images.unsplash.com/photo-1586880244406-556ebe35f282?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: 3,
      title: "Get Credit & Loans",
      text: "Unlock flexible working capital and business loans based on your QuickPay transaction history.",
      img: "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: 4,
      title: "Automate Payroll",
      text: "Run payroll in clicks with automated salary calculations, payouts and basic compliance.",
      img: "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1200&auto=format&fit=crop",
    },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
        * { font-family: 'Poppins', sans-serif; }
      `}</style>

      <section className="w-full py-14 px-4 sm:px-6">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-center">
          Power Every Part of Your Business
        </h1>

        <p className="text-sm md:text-base text-slate-500 text-center mt-3 max-w-lg mx-auto">
          From collecting payments to managing payouts and payroll, QuickPay
          gives you everything you need.
        </p>

        <div className="flex flex-col md:flex-row items-stretch gap-4 md:gap-6 w-full max-w-6xl mt-10 mx-auto h-auto md:h-[420px]">
          {cards.map((card) => (
            <div
              key={card.id}
              // ✔ Mobile → tap to expand
              onClick={() => {
                if (isMobile) {
                  setActive(active === card.id ? null : card.id);
                }
              }}
              className={`
                relative group grow transition-all duration-500 rounded-2xl overflow-hidden cursor-pointer
                w-full md:w-56
                ${
                  isMobile
                    ? active === card.id
                      ? "h-80"
                      : "h-56"
                    : "h-64 sm:h-72 md:h-[420px]"
                }
                md:hover:w-full
              `}
            >
              <img
                className="h-full w-full object-cover"
                src={card.img}
                alt={card.title}
              />

              {/* Overlay */}
              <div
                className={`
                  absolute inset-0 flex flex-col justify-end p-6 text-white bg-black/60 
                  transition-all duration-300

                  ${
                    isMobile
                      ? active === card.id
                        ? "opacity-100"
                        : "opacity-0"
                      : "opacity-0 md:group-hover:opacity-100"
                  }
                `}
              >
                <h2 className="text-xl sm:text-2xl font-semibold">
                  {card.title}
                </h2>
                <p className="text-xs sm:text-sm mt-2">{card.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default FeatureShowcaseSection;
