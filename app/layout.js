import { Poppins } from "next/font/google";
import "./globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import { ThemeProvider } from "next-themes";

import Loader from "./_components/Loader/Loader";

config.autoAddCss = false;

const poppins_font = Poppins({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "800", "400"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "Underwater Police Force - Legio Glorio",
  description:
    "Stay updated with the latest news and updates from the Underwater Police Force. Learn about our operations, rescues, and technological advancements in underwater policing.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${poppins_font.variable} poppin bg-black dark:bg-white transition-all`}
      >
        <ThemeProvider attribute="class">
          <Loader />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
