import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import XIcon from "@/assets/icons/x.svg";
import GithubIcon from "@/assets/icons/github.svg";
import LinkedInIcon from "@/assets/icons/linkedin.svg";

const footerLinks = [
  {
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/hiteshmahto/",
    component: <LinkedInIcon className="size-7" />,
  },
  {
    title: "GitHub",
    href: "https://github.com/hiteshmahto",
    component: <GithubIcon className="size-7" />,
  },
  {
    title: "Twitter",
    href: "https://x.com/Hitesh_Mahto_",
    component: <XIcon className="size-7" />,
  },
];

export const Footer = () => {
  return (
    <footer className="relative overflow-x-clip">
      <div
        style={{
          maskImage:
            "radial-gradient(50% 50% at bottom center, black, transparent)",
          WebkitMaskImage:
            "radial-gradient(50% 50% at bottom center, black, transparent)",
        }}
        className="absolute h-[400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-emerald-300/30 -z-10"
      ></div>
      <div className="container">
        <div className="border-t border-white/15 py-6 text-lg flex flex-col md:flex-row md:justify-between items-center gap-8">
          <div className="text-white/40">Made with Love💖</div>
          <nav className="flex flex-col md:flex-row items-center gap-8">
            {footerLinks.map(link => (
              <a
                href={link.href}
                key={link.title}
                className="inline-flex items-center gap-1.5 hover:text-white/80"
                target="_blank"
              >
                {link.component}
                <span className="font-semibold">{link.title}</span>
                <ArrowUpRightIcon className="size-4" />
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};
