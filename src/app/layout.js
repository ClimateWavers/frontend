"use client";
import "./globals.scss";
import { useState } from "react";
import Footer from "@/components/Footer";
import useMyRouter from "../hooks/useMyRouter";
import DashboardHeader from "@/components/DashboardHeader";
import DashboardMenu from "@/components/DashboardMenu";
import { Toaster } from "react-hot-toast";
import AddPin from "@/components/AddPin";
import SendMoney from "@/components/SendMoney";

const description =
  "Payments should be fun and seamless so we provide fast, easy, secure and affordable transactions for businesses and individuals";

const metadata = {
  title: {
    template: `%s | ValuBox`,
    default: "ValuBox",
  },
  description: description,
  applicationName: "ValuBox",
  themeColor: "#135549",
  category: "technology",
  keywords: [
    "Airtime",
    "Convert Airtime",
    "Sell Airtime",
    "Send Money",
    "Buy Airtime",
    "Convert airtime to cash",
    "Payment",
  ],
  openGraph: {
    title: "ValuBox",
    description: description,
    url: "",
    siteName: "Next.js",
    images: [
      {
        url: "",
        width: 800,
        height: 600,
      },
      {
        url: "",
        width: 1800,
        height: 1600,
        alt: "",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  twitter: {
    card: "summary_large_image",
    title: "ValuBox",
    description: description,
    siteId: "",
    creator: "@lekanSaheedDev",
    creatorId: "",
    images: [""],
  },
};

export default function RootLayout({ children }) {
  const unprotected_routes = ["/login", "/signup"];
  const router = useMyRouter();
  // const noFooter =
  const [menu, setMenu] = useState(false)
  const [pin, setPin] = useState(false)


  // setTimeout(() => {
  //   setPin(true)
  // }, 5000)

  // console.log(router.pathname);

  return (
    <html lang="en">
      <Toaster />
      <body>
        {unprotected_routes.includes(router.pathname) ? (
          <>{children}</>
        ) : (
          <>
            <DashboardHeader menuHandler={() => setMenu(!menu)} menu={menu} />
            <div className="">
              <DashboardMenu isMobile={menu} menuHandler={() => setMenu(!menu)} menu={menu} />
              <div className="sm:ml-[230px] ml-0 p-2 pr-[20px] sm:pr-[40px] "  >
                {children}
              </div>
            </div>
            {
              pin === true ?
                <AddPin pin={pin} setPin={setPin} />
              :
                null
            }
            {/* {
              isOpen === true ?
                <SendMoney isOpen={isOpen} setIsOpen={() => setIsOpen(!isOpen)} />
              :
                null
            } */}
          </> 
        )}
      </body>
    </html>
  );
}
