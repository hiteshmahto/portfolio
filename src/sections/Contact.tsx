"use client";

import { useState } from "react";

import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg";
import ClipboardIcon from "@/assets/icons/Copy-128.svg";

export const ContactSection = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    navigator.clipboard.writeText("hiteshmahto786@gmail.com");
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 100);
  };
  return (
    <div id="contact" className="py-16 pt-12 lg:py-24 lg:pt-20">
      <div className="container">
        <div className="bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 py-8 px-10 rounded-3xl text-center md:text-left relative overflow-hidden z-0">
          <div
            className="absolute inset-0 opacity-5 -z-10"
            style={{
              backgroundImage: `url(${grainImage.src})`,
            }}
          ></div>
          <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
            <div>
              <h2 className="font-serif text-2xl md:text-3xl">
                Let’s Transform Data into Powerful Decisions
              </h2>
              <p className="text-lg md:text-xl mt-4 inline-flex items-center gap-2">
                <span>hiteshmahto786@gmail.com</span>
                <ClipboardIcon
                  className={`size-6 cursor-pointer transition-transform transform ${
                    isClicked ? "translate-y-1" : ""
                  }`}
                  onClick={handleClick}
                />
              </p>
            </div>
            <div>
              <a
                href="mailto:hiteshmahto786@gmail.com"
                className="text-white bg-gray-900 inline-flex items-center px-6 h-12 rounded-xl gap-2 w-max border border-gray-900"
              >
                <span className="font-semibold">Contact Me</span>
                <ArrowUpRightIcon className="size-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
