import localFont from "next/font/local";
import "./globals.css";
import { NavbarWithMegaMenu, Navbar1, SearchBar } from "@/Components";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <>
          <Navbar1 />
          <SearchBar />
          <NavbarWithMegaMenu />
        </>

        <div className="mx-auto  max-w-screen-2xl">{children}</div>
      </body>
    </html>
  );
}
