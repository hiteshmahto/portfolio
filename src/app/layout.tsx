import type { Metadata } from "next";
import { Inter, Calistoga } from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const calistoga = Calistoga({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Hitesh Mahto - Portfolio",
  description:
    "Welcome to Hitesh Mahto's professional portfolio. Explore projects, skills, and learning journey in data science, web development, and analytics. Eager to solve real-world problems using technology and continuous learning.",
  keywords:
    "Hitesh Mahto, portfolio, data science, web development, data analysis, Power BI, Python, Pandas, NumPy, Matplotlib, Tailwind CSS, projects, machine learning, AI, coding, programming, job seeker, frontend developer, backend developer, full-stack developer, software engineer",
  openGraph: {
    title: "Hitesh Mahto - Portfolio",
    description:
      "Discover the learning journey and professional aspirations of Hitesh Mahto. Learn about projects, skills, and expertise being developed in data science and web development.",
    url: "https://www.hiteshmahto.tech/",
    type: "website",
    images: [
      {
        url: "/hitesh-mahto.png",
        width: 1200,
        height: 630,
        alt: "Hitesh Mahto - Professional Portfolio",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Favicon Links */}
        <link rel="icon" href="/favicon.ico" sizes="any" />

        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />

        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/android-chrome-192x192.png"
        />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />

        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#111827" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Hitesh Mahto",
              url: "https://www.hiteshmahto.tech/",
              sameAs: [
                "https://www.linkedin.com/in/hiteshmahto",
                "https://github.com/hiteshmahto",
                "https://leetcode.com/u/hiteshmahto/",
              ],
              jobTitle: "Aspiring Data Scientist, Web Developer, Data Analyst",
              description:
                "A passionate learner working towards building expertise in data analysis, web development, and crafting data-driven solutions using technologies like Python, Power BI, Pandas, NumPy, Matplotlib, HTML, CSS, and JavaScript.",
            }),
          }}
        />
      </head>
      <body
        className={twMerge(
          inter.variable,
          calistoga.variable,
          "bg-gray-900 text-white antialiased font-sans scroll-smooth"
        )}
      >
        {children}
      </body>
    </html>
  );
}
