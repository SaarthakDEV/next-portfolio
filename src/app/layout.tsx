import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Saarthak's Portfolio",
  description: "Creative full-stack developer portfolio showcasing web development projects, UI/UX designs, and JavaScript, React, and Next.js expertise. Explore my work and let's build something amazing together.",
  keywords: [ "Saarthak",
  "Portfolio",
  "Full-Stack Developer",
  "Web Developer",
  "React",
  "Next.js",
  "JavaScript",
  "UI/UX Design",
  "Frontend Developer",
  "Developer Portfolio"],
  icons: {
    icon: "/og-image.png"
  },
  openGraph: {
  title: "Saarthak's Portfolio",
  description: "Explore creative web development projects built with JavaScript, React, and Next.js.",
  url: "https://next-portfolio-khaki-psi.vercel.app/",
  siteName: "Saarthak's Portfolio",
  images: [
    {
      url: "/og-image.png", 
      width: 1200,
      height: 630,
      alt: "Saarthak's Portfolio Open Graph Image",
    },
  ],
  type: "website",
},
twitter: {
  card: "summary_large_image",
  title: "Saarthak's Portfolio",
  description: "Showcasing modern full-stack development work with React and Next.js.",
  images: ["/og-image.png"],
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
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=G-5MTF58B4HL`}
          strategy="afterInteractive"
        />
        <Script id="ga-setup" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-5MTF58B4HL');
          `}
        </Script>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400..700&display=swap"
          rel="stylesheet"
        ></link>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
