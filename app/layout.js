import { Syne } from "next/font/google";
import "./globals.css";

const syne = Syne({
  subsets:["latin"],
  weight:["400","500","600","700","800"]
})

export const metadata = {
  title: "Tia Portfolio Website",
  description: "Software Engineer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${syne.className} antialiased`}
        
      >
        {children}
      </body>
    </html>
  );
}
