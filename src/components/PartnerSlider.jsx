import { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export function InfiniteMovingCardsDemo() {
  const [isMobile, setIsMobile] = useState(false);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <div
      className="w-full h-24 sm:h-32 md:h-40 lg:h-48 rounded-md flex flex-col antialiased 
      bg-white dark:bg-[linear-gradient(to_bottom_right,#0f172a,#020617)] 
      from-slate-900 via-slate-950 to-black dark:bg-grid-white/[0.05] 
      items-center justify-center relative overflow-hidden px-2 sm:px-4"
      onClick={() => {
        if (isMobile) setPaused(!paused);
      }}
    >
      <InfiniteMovingCards
        items={companyLogos}
        direction="right"
        speed="slow"
        pauseOnHover={!isMobile}
        pause={paused}
      />
    </div>
  );
}

const companyLogos = [
  { logo: "/logos/nykaa.svg", alt: "NYKAA" },
  { logo: "/logos/adda.svg", alt: "ADDA247" },
  { logo: "/logos/ola.svg", alt: "OLA" },
  { logo: "/logos/swiggy.svg", alt: "Swiggy" },
  { logo: "/logos/zomato.svg", alt: "ZOMATO" },
  { logo: "/logos/rapido.svg", alt: "Rapido" },
  { logo: "/logos/bookmyshow.svg", alt: "BOOKMYSHOW" },
  { logo: "/logos/urban.png", alt: "URBAN COMPANY" },
  { logo: "/logos/flipkart.svg", alt: "Flipkart" },
  { logo: "/logos/zoho1.svg", alt: "ZOHO" },
  { logo: "/logos/goibibo.png", alt: "Goibibo" },
];
