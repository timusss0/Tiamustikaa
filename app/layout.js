import { Syne } from "next/font/google";
import "./globals.css";
import { ThemeProviders } from "@/app/components/ThemeProviders";
const syne = Syne({
  subsets:["latin"],
  weight:["400","500","600","700","800"]
})

export const metadata = {
  title: "Tia Portfolio Website",
  description: "Fullstack Developer",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({ children }) {
return (
      <html lang="en" suppressHydrationWarning>
      <body className={`${syne.className} antialiased`}>
        <ThemeProviders>
        {children}
        </ThemeProviders>
      </body>
    </html>
  );
}
