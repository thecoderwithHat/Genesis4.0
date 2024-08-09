import Navbar from "@/components/Navbar";
import {
  Dialog,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";
import bb from "@/public/bb.png";
import Footer from "@/components/Footer";
import EventCard from "@/components/EventCard";

export const metadata = {
  title: "Genesis 4.0",
  description:
    "Genesis is the largest technical fest of IEEE MUJ.",
  keywords: "hackathon, IEEEMUJ, genesis, genesis4.0, coding, programming, tech",
  url: "https://genesis.ieeemuj.com",
  openGraph: {
    title: "Genesis 4.0",
    description:
      "Genesis is the largest technical fest of IEEE MUJ.",
    url: "https://genesis.ieeemuj.com",
    images:
      "https://res.cloudinary.com/drtmfrghg/image/upload/v1708016443/opengraph-image_vkiopn.jpg",
    siteName: "Genesis 4.0",
    locale: "en_US",
    type: "website",
  },
};

export default function Schedule() {

  return (
    <>
      <Navbar />
      <div
        className="bg-custom-gradient flex flex-col min-h-screen py-40"
      >
        <div className="w-full flex flex-col gap-6 xl:gap-8">
          <div className="flex flex-col items-center gap-4">
            <p className="text-[#F5F0D8] font-normal text-center text-[3rem] sm:text-[4rem] md:text-[5rem]">
              Our Upcoming Events
            </p>
            <p
              className="w-full xl:max-w-[80%] text-[#C3C3C3] font-[Inter]
                text-center font-normal text-[1.25rem] md:text-[1.5rem]"
            >
            </p>
          </div>
        </div>

        <div
          className="flex flex-row flex-wrap justify-center gap-12 2xl:gap-12 px-8"
        >
          {[1, 2, 3].map((value, index) => (
            <EventCard key={index} />
          ))}

        </div>
      </div>

      {/*<div className="bg-black w-full h-full py-24 lg:py-40">
        <div
          className="flex flex-col justify-between gap-20 md:flex-row
          px-4 md:px-8 xl:px-20 2xl:px-40"
        >
          <p
            className="max-w-3xl text-6xl md:text-[5.5rem] lg:text-[7rem] xl:text-[9rem]
              text-white font-normal md:leading-[8rem] lg:leading-[10rem]
              tracking-tighter md:tracking-[-0.2rem]"
          >
            Empower
            <br /> Your Digital
            <br /> Odyssey!
          </p>

          <FooterAnimation />
        </div>
      </div> */}

      <Footer />
    </>
  );
}
