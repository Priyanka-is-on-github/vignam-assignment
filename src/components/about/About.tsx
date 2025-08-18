"use client";

import { JSX, useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";
import { ArrowRight, Settings, Cog, Wrench, Box } from "lucide-react";

interface Item {
  id: string;
  label: string;
  icon: JSX.Element;
}

type ImagePath = string;
export default function AboutSection() {
  const [index, setIndex] = useState<number>(0);

  useEffect(() => {
    AOS.init({ duration: 1200, once: true, easing: "ease-in-out" });
  }, []);

  const items: Item[] = [
    {
      id: "01.",
      label: "Custom Brackets",
      icon: <Wrench className="w-5 h-5" />,
    },
    { id: "02.", label: "Steel Adapters", icon: <Cog className="w-5 h-5" /> },
    {
      id: "03.",
      label: "Motor Mounts",
      icon: <Settings className="w-5 h-5" />,
    },
    { id: "04.", label: "Enclosures", icon: <Box className="w-5 h-5" /> },
  ];

  const images: ImagePath[] = [
    "/images/cnc-parts.jpg",
    "/images/cnc-parts-1.webp",
    "/images/cnc-parts-2.jpg",
    "/images/cnc-parts-3.jpg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="w-full px-4 sm:px-6 lg:px-12 pt-20 mt-16 bg-white">
      <button
        className="bg-blue-800 text-white flex items-center px-4 sm:px-8 py-2 rounded-lg shadow hover:bg-blue-900 transition"
        data-aos="fade-up"
      >
        About
      </button>

      <div className="flex flex-col lg:flex-row justify-between mt-8 gap-10 lg:gap-16">
        {/* Left Section */}
        <div className="w-full lg:w-1/2" data-aos="fade-up">
          <h1 className="text-3xl md:text-6xl  text-gray-900 ">
            Revolutionizing <br className="hidden sm:block" /> Manufacturing
            with
            <br className="hidden sm:block" /> Speed and{" "}
            <span className="italic font-serif bg-gradient-to-r from-gray-300 via-gray-500 to-gray-300 bg-clip-text text-transparent">
              Precision
            </span>
          </h1>

          {/* List */}
          <div className="mt-8 sm:mt-10 space-y-3">
            {items.map((item, index) => (
              <div
                key={index}
                className="flex justify-between items-center p-3 shadow-sm group cursor-pointer transition-all duration-300"
                data-aos="fade-up"
                data-aos-delay={index * 200}
              >
                <div className="flex items-center gap-6 sm:gap-8">
                  <span className="font-medium text-sm text-gray-700 group-hover:hidden">
                    {item.id}
                  </span>
                  <ArrowRight className="hidden group-hover:block text-blue-600 w-5 h-5" />
                  <p className="font-medium text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                    {item.label}
                  </p>
                </div>
                <div className="text-gray-700 group-hover:text-blue-600 transition-colors duration-300">
                  {item.icon}
                </div>
              </div>
            ))}
          </div>

          {/* Image slider */}
          <div
            className="relative w-full h-48 sm:h-60 md:h-60 mt-6 overflow-hidden rounded-xl shadow-lg bg-gray-100"
            data-aos="fade-up"
          >
            <motion.img
              key={index}
              src={images[index]}
              alt={`Slide ${index}`}
              className="w-full h-full object-contain"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />
          </div>
        </div>

        {/* Right Section */}
        <div
          className="flex flex-col items-start space-y-8 lg:space-y-36 w-full lg:w-1/4 shadow-sm"
          data-aos="fade-up"
        >
          <div className="p-4">
            <div className="flex items-center space-x-4">
              <img
                src="/images/ayrton-senna.jpg"
                alt="CEO"
                className="w-14 h-14 rounded-xl object-cover"
              />
              <div>
                <h3 className="font-semibold text-lg">Ayrton Senna</h3>
                <p className="text-gray-500 text-sm">
                  CEO & Senior Partner at Forge
                </p>
              </div>
            </div>

            <p className="mt-4 font-semibold text-sm leading-5 sm:leading-6">
              At Forge, we believe that getting custom CNC parts should be fast,
              reliable, and effortless. That’s why we built a fully streamlined
              platform that turns your CAD files into production-ready parts—
              delivered in as fast as one day. Whether you’re prototyping or
              scaling, we remove the friction from manufacturing so you can
              focus on building what matters.
            </p>

            <p className="mt-4 font-semibold text-sm leading-5 sm:leading-6">
              We operate high-performance CNC machines backed by in-house
              automation and a trusted network of suppliers. From one-off
              prototypes to small production runs, our system is built to
              deliver precise, high-quality parts with speed. You can also
              reserve your own dedicated CNC machine through our RM (Reserved
              Machines) offering—your own production line, without the overhead.
            </p>
          </div>

          <p className="mt-6 lg:mt-9 text-xs uppercase tracking-wide text-gray-900 px-4">
            Every detail matters — we craft each part with care, accuracy, and a
            finish that feels just right.
          </p>
        </div>
      </div>
    </section>
  );
}
