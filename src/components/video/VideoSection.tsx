"use client";

import {  ArrowRight, Volume2 } from "lucide-react";
import React from "react";

export default function VideoSection() {
  return (
    <section id="video" className="w-full flex justify-center  bg-gray-50">
      <div className="w-full  relative aspect-video overflow-hidden shadow-lg">
        {/* Responsive YouTube Embed */}
        <iframe
          className="w-full h-full"
          src="https://www.youtube.com/embed/E1czmX6bjFA?start=10&rel=0&modestbranding=1"
          title="Vignam Text to Simulations"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>

        {/* SOUND ON Button - bottom left */}
        <div className="absolute top-4 left-2 sm:top-10 sm:left-4">
          <button className="bg-white text-black flex items-center gap-1 sm:gap-2 px-2 sm:px-4 py-1 sm:py-2 text-xs sm:text-sm rounded-lg shadow hover:bg-gray-100 transition">
            <Volume2 size={16} className="sm:w-5 sm:h-5" />
            <span>SOUND ON</span>
          </button>
        </div>

        {/* CHECK ON YOUTUBE Button - bottom right */}
        <div className="absolute top-4 right-2 sm:top-10 sm:right-4">
          <a href="https://www.youtube.com/watch?v=E1czmX6bjFA" target="_blank">
            <button className="bg-white text-black flex items-center gap-1 sm:gap-2 px-2 sm:px-4 py-1 sm:py-2 text-xs sm:text-sm rounded-lg shadow hover:bg-gray-100 transition">
              <span>CHECK ON YOUTUBE</span>
              <ArrowRight size={16} className="sm:w-5 sm:h-5" />
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}
