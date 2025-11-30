
import AnimatedBackground from "./ui/animated_background";
import {
  Link,
  FileText,
  QrCode,
  Repeat2,
  Receipt,
  BadgeIndianRupee,
} from "lucide-react";

export default function AnimatedCardHover() {
  const ITEMS = [
    {
      id: 1,
      icon: <Link size={28} />,
      title: "Payment Links",
      description:
        "Accept payments instantly: Share links via email, text, or social.",
    },
    {
      id: 2,
      icon: <FileText size={28} />,
      title: "Payment Pages",
      description: "Accept payments without coding on a custom-branded store.",
    },
    {
      id: 3,
      icon: <BadgeIndianRupee size={28} />,
      title: "Payment Buttons",
      description:
        "Effortlessly add a Pay Now button without any coding knowledge.",
    },
    {
      id: 4,
      icon: <Receipt size={28} />,
      title: "Invoices",
      description:
        "Generate GST invoices, get instant payments from customers.",
    },
    {
      id: 5,
      icon: <QrCode size={28} />,
      title: "QR Code",
      description:
        "Grow your business with your own, branded multi-feature QR code.",
    },
    {
      id: 6,
      icon: <Repeat2 size={28} />,
      title: "Subscriptions",
      description: "Automate recurring payments via cards & UPI.",
    },
  ];

  return (
    <div className="w-full py-12 sm:py-14 md:py-16">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-2 px-4">
        Not a developer?
      </h2>
      <p className="text-center text-slate-400 mb-8 sm:mb-10 text-sm sm:text-base px-4">
        Our No-Code products have you covered
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 px-4 sm:px-6 md:px-16">
        <AnimatedBackground
          className="rounded-xl bg-slate-900 border border-slate-900"
          transition={{
            type: "spring",
            bounce: 0.2,
            duration: 0.6,
          }}
          enableHover
        >
          {ITEMS.map((item, index) => (
            <div
              key={item.id}
              data-id={`card-${index}`}
              className="cursor-pointer overflow-hidden"
            >
              <div className="flex select-none flex-col space-y-3 p-4 sm:p-5 md:p-6">
                <div className="text-indigo-400">{item.icon}</div>

                <h3 className="text-base sm:text-lg font-semibold">
                  {item.title}
                </h3>

                <p className="text-slate-400 text-sm leading-relaxed">
                  {item.description}
                </p>

                <div className="flex gap-3 mt-4">
                  <button className="text-indigo-400 font-medium text-sm hover:underline">
                    Sign Up
                  </button>
                  <button className="text-slate-300 font-medium text-sm hover:underline">
                    Know More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </AnimatedBackground>
      </div>
    </div>
  );
}
