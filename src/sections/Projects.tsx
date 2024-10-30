import Image from "next/image";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import GithubIcon from "@/assets/icons/github.svg";
import whatsappAppAnalyzer from "@/assets/images/whatsapp-app-analyzer.png";
import spotifyClone from "@/assets/images/spotify.png";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import ongoingProject from "@/assets/images/ongoingProject.png";

const portfolioProjects = [
  {
    year: "Ongoing Project",
    title: "User Engagement Analysis",
    isOngoing: true,
    results: [
      { title: "Analyze trends for customer loyalty" },
      { title: "Predict trends in customer visits" },
      { title: "Pinpoint factors boosting ratings" },
    ],
    liveLink: "",
    githubLink: "",
    image: ongoingProject,
  },
  {
    year: "Oct 2024",
    title: "WhatsApp Chat Analyzer",
    isOngoing: false,
    results: [
      { title: "Uncover hidden chat patterns" },
      { title: "Visualize messaging trends effortlessly" },
      { title: "Explore emoji sentiment insights" },
    ],
    liveLink: "https://whatsapp-chats-insights.streamlit.app/",
    githubLink: "https://github.com/hiteshmahto/Whatsapp-Chat-Analyzer",
    image: whatsappAppAnalyzer,
  },
  {
    year: "July 2024",
    title: "Spotify UI Clone",
    isOngoing: false,
    results: [
      { title: "Sleek Spotify UI Replica" },
      { title: "Basic Playback Functionality Implemented" },
      { title: "Seamless Music Experience Achieved" },
    ],
    liveLink: "https://spotify-clone-hitesh.netlify.app/",
    githubLink: "https://github.com/hiteshmahto/spotify-clone",
    image: spotifyClone,
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="pb-16 pt-20 lg:py-24">
      <div className="container">
        <SectionHeader
          eyebrow="Real-World Applications"
          title="Featured Projects"
          description="Unlocking insights through innovative data analysis."
        />
        <div className="flex flex-col mt-10 md:mt-20 gap-20">
          {portfolioProjects.map(project => (
            <Card
              key={project.title}
              className="px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20"
            >
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <div className="flex items-center gap-2">
                    {project.isOngoing && (
                      <div className="bg-green-500 size-2.5 rounded-full relative">
                        <div className="bg-green-500 absolute inset-0 rounded-full animate-ping-large"></div>
                      </div>
                    )}
                    <span className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                      {project.year}
                    </span>
                  </div>
                  <h3 className="font-serif text-2xl mt-2 md:mt-5 md:text-4xl">
                    {project.title}
                  </h3>
                  <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                  <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                    {project.results.map(result => (
                      <li
                        key={result.title}
                        className="flex gap-2 text-sm md:text-base text-white/50"
                      >
                        <CheckCircleIcon className="size-5 md:size-6" />
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>
                  <a href={project.liveLink} target="_blank">
                    <button
                      disabled={project.isOngoing}
                      className={`h-12 w-full md:w-auto px-6 lg:px-5 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8 md:mr-3 ${
                        project.isOngoing
                          ? "bg-gray-400 text-gray-600 cursor-not-allowed"
                          : "bg-white text-gray-950"
                      }`}
                    >
                      <span>Live Site</span>
                      <ArrowUpRightIcon className="size-4" />
                    </button>
                  </a>
                  <a href={project.githubLink} target="_blank">
                    <button className="bg-gray-900 text-white h-12 w-full md:w-auto px-6 lg:px-5 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-2">
                      <span>Source Code</span>
                      <GithubIcon className="size-6" />
                      <ArrowUpRightIcon className="size-4" />
                    </button>
                  </a>
                </div>
                <div className="relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none"
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
