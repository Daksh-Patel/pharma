import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header/header"
import Footer from "@/components/footer/footer"
// import SocialSidebar from "@/components/socialSidebar"
import { TooltipProvider } from "@/tailwind-components/ui/tooltip"
import WhatsappFloat from "@/components/whatsappFloat"

const geistSans = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
})

const geistMono = Inter({
  variable: "--font-mono",
  subsets: ["latin"],
})

export const metadata = {
  title: "Gristy Pharma",
}

export default function RootLayout({ children }) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} overflow-x-hidden antialiased`}
      >
        <TooltipProvider>
          {" "}
          <Header />
          {/* <SocialSidebar /> */}
          {children}
          <Footer />
          <WhatsappFloat />
        </TooltipProvider>
      </body>
    </html>
  )
}
