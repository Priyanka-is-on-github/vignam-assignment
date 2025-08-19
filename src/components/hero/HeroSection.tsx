"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Hero3D from "./HeroAnimation";

export default function HeroSection() {
  return (
    <section className="w-full text-center py-24 md:py-24  overflow-hidden ">
      <div className="max-w-4xl mx-auto px-4">
        {/* Heading */}
        <h1 className="text-3xl md:text-6xl  text-gray-900 leading-tight">
          Precision
          <span className="italic font-serif bg-gradient-to-r from-gray-300 via-gray-500 to-gray-300 bg-clip-text text-transparent">
            CNC
          </span>
          Parts
          <br />
          Shipped as Fast as Tomorrow
        </h1>
      </div>

      {/* 3D image */}
      <div className="md:mt-6 flex justify-center gap-6 flex-wrap">
        <Hero3D />
      </div>

      {/* Bottom info texts */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-6  px-6  md:h-40 ">
        <div className="flex flex-col justify-end h-full ">
          <span className="text-xs sm:text-xm text-gray-700 text-center md:text-left">
            12+ YEARS OF DELIVERING <br className="hidden sm:block" /> PERFECT
            DETAILS
          </span>
        </div>

        <div className=" flex flex-col justify-end text-center md:text-center max-w-md  h-full  ">
          <p className="text-gray-900 text-sm sm:text-base  ">
            Upload your CAD file, and we’ll take care of machining, finishing,
            and shipping —
            <br className="hidden sm:block" /> accurate parts delivered fast, no
            stress.
          </p>

          <div className="mt-4 flex justify-center">
            <button className="bg-blue-800 text-white flex items-center gap-2 px-6 sm:px-8 py-2 rounded-lg shadow hover:bg-blue-900 transition">
              <ArrowRight className="w-5 h-5" />
              Upload your design
            </button>
          </div>
        </div>

        <div className="flex flex-col justify-end h-full ">
          <span className="text-xs sm:text-xm text-gray-700 text-center md:text-right">
            OVER 100,000 PARTS <br className="hidden sm:block" /> MANUFACTURED
            ANNUALLY
          </span>
        </div>
      </div>
    </section>
  );
}
