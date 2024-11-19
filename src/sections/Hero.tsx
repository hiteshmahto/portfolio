"use client";

import memojiImage from "@/assets/images/memoji-computer.png";
import Image from "next/image";
import ArrowDown from "@/assets/icons/arrow-down.svg";
import grainImage from "@/assets/images/grain.jpg";
import StarIcon from "@/assets/icons/star.svg";
import SparkleIcon from "@/assets/icons/sparkle.svg";
import { HeroOrbit } from "@/components/HeroOrbit";
import DownloadIcon from "@/assets/icons/download.svg";

export const HeroSection = () => {
  return (
    <div className="pt-32 pb-12 md:py-48 lg:py-59 relative z-0 overflow-x-clip ">
      <div
        className="absolute inset-0"
        style={{
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent, black 10%, black 70%, transparent)",
          maskImage:
            "linear-gradient(to bottom, transparent, black 10%, black 70%, transparent)",
        }}
      >
        <div
          className="absolute inset-0 -z-30 opacity-5"
          style={{
            backgroundImage: `url(${grainImage.src})`,
          }}
        ></div>
        <div className="size-[620px] hero-ring"></div>
        <div className="size-[820px] hero-ring"></div>
        <div className="size-[1020px] hero-ring"></div>
        <div className="size-[1220px] hero-ring"></div>
        <HeroOrbit
          size={430}
          rotation={-14}
          shouldOrbit
          orbitDuration="20s"
          shouldSpin
          spinDuration="3s"
        >
          <SparkleIcon className="size-8 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit
          size={440}
          rotation={79}
          shouldOrbit
          orbitDuration="22s"
          shouldSpin
          spinDuration="3s"
        >
          <SparkleIcon className="size-5 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={520} rotation={-41} shouldOrbit orbitDuration="24s">
          <div className="size-2 bg-emerald-300/20 rounded-full" />
        </HeroOrbit>
        <HeroOrbit
          size={530}
          rotation={178}
          shouldOrbit
          orbitDuration="26s"
          shouldSpin
          spinDuration="3s"
        >
          <SparkleIcon className="size-10 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit
          size={550}
          rotation={20}
          shouldOrbit
          orbitDuration="28s"
          shouldSpin
          spinDuration="6s"
        >
          <StarIcon className="size-12 text-emerald-300" />
        </HeroOrbit>
        <HeroOrbit
          size={590}
          rotation={98}
          shouldOrbit
          orbitDuration="30s"
          shouldSpin
          spinDuration="6s"
        >
          <StarIcon className="size-8 text-emerald-300" />
        </HeroOrbit>
        <HeroOrbit size={650} rotation={-5} shouldOrbit orbitDuration="32s">
          <div className="size-2 bg-emerald-300/20 rounded-full" />
        </HeroOrbit>
        <HeroOrbit
          size={710}
          rotation={144}
          shouldOrbit
          orbitDuration="34s"
          shouldSpin
          spinDuration="3s"
        >
          <SparkleIcon className="size-14 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit
          size={200}
          rotation={144}
          shouldOrbit
          orbitDuration="10s"
          shouldSpin
          spinDuration="3s"
        >
          <SparkleIcon className="size-14 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={250} rotation={-41} shouldOrbit orbitDuration="18s">
          <div className="size-4 bg-emerald-300/20 rounded-full" />
        </HeroOrbit>
        <HeroOrbit size={720} rotation={85} shouldOrbit orbitDuration="36s">
          <div className="size-3 bg-emerald-300/20 rounded-full" />
        </HeroOrbit>
        <HeroOrbit size={890} rotation={15} shouldOrbit orbitDuration="10s">
          <div className="size-8 bg-emerald-300/40 rounded-full" />
        </HeroOrbit>
        <HeroOrbit
          size={800}
          rotation={-72}
          shouldOrbit
          orbitDuration="18s"
          shouldSpin
          spinDuration="6s"
        >
          <StarIcon className="size-28 text-emerald-300" />
        </HeroOrbit>
        <HeroOrbit
          size={600}
          rotation={-12}
          shouldOrbit
          orbitDuration="8s"
          shouldSpin
          spinDuration="2s"
        >
          <StarIcon className="size-20 text-emerald-300/10" />
        </HeroOrbit>
        <HeroOrbit
          size={650}
          rotation={-72}
          shouldOrbit
          orbitDuration="10s"
          shouldSpin
          spinDuration="6s"
        >
          <StarIcon className="size-20 text-emerald-300/10" />
        </HeroOrbit>
        <HeroOrbit
          size={900}
          rotation={-72}
          shouldOrbit
          orbitDuration="42s"
          shouldSpin
          spinDuration="2s"
        >
          <StarIcon className="size-24 text-emerald-300/50" />
        </HeroOrbit>
      </div>
      <div className="container">
        <div className="flex flex-col items-center">
          <Image
            src={memojiImage}
            className="size-[100px]"
            alt="Person peeking from behind laptop"
          />
          <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg">
            <div className="bg-green-400 size-2.5 rounded-full relative">
              <div className="bg-green-400 absolute inset-0 rounded-full animate-ping-large"></div>
            </div>
            <div className="text-sm font-medium">Open for Work</div>
          </div>
        </div>
        <div className="max-w-lg mx-auto">
          <h1 className="font-serif text-4xl md:text-6xl text-center mt-8 tracking-wide">
            I&apos;m Hitesh Mahto Data Enthusiast
          </h1>
          <p className="mt-4 text-center text-white/60 md:text-lg">
            Driven by data, I deliver actionable insights to empower smarter
            decisions. Let&apos;s transform your data into a strategic asset!
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4">
          <button
            className="inline-flex items-center gap-2 border border-white/15 bg-white text-gray-900 h-12 px-6 rounded-xl z-0 hover:bg-gray-200 hover:text-gray-800 transition duration-200"
            onClick={() =>
              window.open("/hitesh_mahto_resume_updated.pdf", "_blank")
            }
          >
            <span className="font-semibold">Download Resume</span>
            <DownloadIcon className="size-6" />
          </button>
          <button
            className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl z-0 group hover:bg-white/5 transition duration-200"
            onClick={() => {
              const projectSection = document.getElementById("projects");
              if (projectSection) {
                projectSection.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            <span className="font-semibold">Explore My Work</span>
            <ArrowDown className="size-4 group-hover:animate-bounceDownUp" />
          </button>
        </div>
      </div>
    </div>
  );
};
