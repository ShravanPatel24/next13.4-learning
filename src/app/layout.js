import Link from "next/link";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Link style={{ textDecoration: "none", color: "black" }} href="/">
          <h1>Home Page 🏚️</h1>
        </Link>
        {children}
      </body>
    </html>
  );
}
