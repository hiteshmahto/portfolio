"use client";

import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import bookImage from "@/assets/images/shoeDog.png";
import Image from "next/image";
import PythonIcon from "@/assets/icons/python.svg";
import SqlIcon from "@/assets/icons/sql.svg";
import ExcelIcon from "@/assets/icons/excel.svg";
import PowerBiIcon from "@/assets/icons/powerbi.svg";
import NumpyIcon from "@/assets/icons/numpy.svg";
import PandasIcon from "@/assets/icons/pandas.svg";
import MatplotlibIcon from "@/assets/icons/matplotlib.svg";
import SeabornIcon from "@/assets/icons/seaborn.svg";
import HtmlIcon from "@/assets/icons/html5.svg";
import CssIcon from "@/assets/icons/css3.svg";
import JavaScriptIcon from "@/assets/icons/square-js.svg";
import CppIcon from "@/assets/icons/cpp.svg";
import GithubIcon from "@/assets/icons/github.svg";
import { CardHeader } from "@/components/CardHeader";
import { ToolboxItems } from "@/components/ToolboxItems";
import { motion } from "framer-motion";
import { useRef } from "react";

const toolBoxItems = [
  {
    title: "Python",
    iconType: PythonIcon,
  },
  {
    title: "SQL",
    iconType: SqlIcon,
  },
  {
    title: "Excel",
    iconType: ExcelIcon,
  },
  {
    title: "PowerBI",
    iconType: PowerBiIcon,
  },
  {
    title: "NumPy",
    iconType: NumpyIcon,
  },
  {
    title: "Pandas",
    iconType: PandasIcon,
  },
  {
    title: "Matplotlib",
    iconType: MatplotlibIcon,
  },
  {
    title: "Seaborn",
    iconType: SeabornIcon,
  },
  {
    title: "GitHub",
    iconType: GithubIcon,
  },
  {
    title: "HTML5",
    iconType: HtmlIcon,
  },
  {
    title: "CSS3",
    iconType: CssIcon,
  },
  {
    title: "JavaScript",
    iconType: JavaScriptIcon,
  },
  {
    title: "C++",
    iconType: CppIcon,
  },
];

const hobbies = [
  {
    title: "Painting",
    emoji: "🎨",
    left: "5%",
    top: "5%",
  },
  {
    title: "Meditation",
    emoji: "🧘🏻‍♂️",
    left: "50%",
    top: "5%",
  },
  {
    title: "Music",
    emoji: "🎶",
    left: "10%",
    top: "35%",
  },
  {
    title: "Cooking",
    emoji: "🧑🏻‍🍳",
    left: "35%",
    top: "40%",
  },
  {
    title: "Reading",
    emoji: "📚",
    left: "70%",
    top: "45%",
  },
  {
    title: "Sleeping",
    emoji: "😴",
    left: "5%",
    top: "65%",
  },
  {
    title: "Gardening",
    emoji: "🪴",
    left: "45%",
    top: "70%",
  },
];

export const AboutSection = () => {
  const constraintRef = useRef(null);

  return (
    <div id="about" className="py-20">
      <div className="container">
        <SectionHeader
          eyebrow="About Me"
          title="A Glimpse Into My World"
          description="Learn more about who I am, what I do, and what inspires me."
        />
        <div className="mt-20 flex flex-col gap-8">
          <Card className="h-[320px]">
            <CardHeader
              title="My Toolbox"
              description="Discover the tools and technologies I leverage to extract insights and drive data-driven solutions."
              className=""
            />
            <ToolboxItems
              items={toolBoxItems}
              className=""
              itemsWrapperClassName="animate-move-left [animation-duration:30s]"
            />
            <ToolboxItems
              items={toolBoxItems}
              className="mt-6"
              itemsWrapperClassName="animate-move-right [animation-duration:15s]"
            />
          </Card>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
            <Card className="h-[320px] md:col-span-2 lg:col-span-1">
              <CardHeader
                title="My Reads"
                description="Explore the books shaping my perspectives."
              />
              <div className="w-40 mx-auto mt-2 md:mt-0">
                <Image src={bookImage} alt="Book Cover" />
              </div>
            </Card>

            <Card className="h-[320px] flex flex-col  md:col-span-3 lg:col-span-2">
              <CardHeader
                title="Beyond the Code"
                description="Explore my interest and hobbies beyond the digital realm."
                className="px-6 py-6"
              />
              <div className="relative flex-1" ref={constraintRef}>
                {hobbies.map(hobby => (
                  <motion.div
                    key={hobby.title}
                    className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute"
                    style={{
                      left: hobby.left,
                      top: hobby.top,
                    }}
                    drag
                    dragConstraints={constraintRef}
                  >
                    <span className="font-medium text-gray-950">
                      {hobby.title}
                    </span>
                    <span>{hobby.emoji}</span>
                  </motion.div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
