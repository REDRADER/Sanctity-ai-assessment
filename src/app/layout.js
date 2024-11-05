import { DM_Sans } from "next/font/google";
import "./globals.css";
import ThProvider from "./ThProvider";
import ThemeSwitcher from "./ThemeSwitcher";
import Navbar from "@/components/Navbar/Navbar";
import Lenis from "@/lib/Lenis"
import Contact from "@/components/Home/Contact/Contact";


const dm_sans = DM_Sans({ subsets: ["latin"] });


export const metadata = {
  metadataBase: new URL('https://sanctity.ai'),
  title: "Sanctity.ai",
  description: "Discover Sanctity AI, where innovative solutions and ethical practices converge to build a future with cutting-edge artificial intelligence. Explore how we empower humans with SAFE, RELIABLE, and RESPONSIBLE AI technologies. Join us as we roll out groundbreaking products designed to enhance your world. Sign up now for early access and be part of the revolution.",
  keywords: 'Ai Development',
  openGraph: {
    title: `Sanctity`,
    description: 'Discover Sanctity AI, where innovative solutions and ethical practices converge to build a future with cutting-edge artificial intelligence. Explore how we empower humans with SAFE, RELIABLE, and RESPONSIBLE AI technologies. Join us as we roll out groundbreaking products designed to enhance your world. Sign up now for early access and be part of the revolution.',
    url: `https://sanctity.ai`,
    siteName: `Sanctity`,
    images: [
      {
        url: `https://sanctity.ai/images/logo.png`,
        width: 800,
        height: 600,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};


export default function RootLayout({ children }) {
  return (
    <html  lang="en" className="dark" style={{ colorScheme: "dark" }}>
      <body
       className={`${dm_sans.className} bg-[--background]`}
   
      >
         <ThProvider>
        <Lenis>
          <Navbar/>
        
        {children}
        <Contact/>
        </Lenis>
        </ThProvider>
      </body>
    </html>
  );
}
