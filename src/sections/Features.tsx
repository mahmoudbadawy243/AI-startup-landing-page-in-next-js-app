"use client";
import { DotLottiePlayer } from "@dotlottie/react-player";
import productImage from "../assets/product-image.png";
import Image from "next/image";

const tabs = [
  {
    icon: "/assets/lottie/vroom.lottie",
    title: "User-friendly dashboard",
    isNew: false,
    backgroundPositionX: 0,
    backgroundPositionY: 0,
    backgroundSizeX: 150,
  },
  {
    icon: "/assets/lottie/click.lottie",
    title: "One-click optimization",
    isNew: false,
    backgroundPositionX: 98,
    backgroundPositionY: 100,
    backgroundSizeX: 135,
  },
  {
    icon: "/assets/lottie/stars.lottie",
    title: "Smart keyword generator",
    isNew: true,
    backgroundPositionX: 100,
    backgroundPositionY: 27,
    backgroundSizeX: 177,
  },
];

export const Features = () => {
  return (
    <section className="py-20 md:py-24">
      <div className="container">
        <h1 className="text-5xl md:text-6xl font-semibold bg-[radial-gradient(100%_100%_at_top_left,white,white,rgb(74,32,138,.5))] bg-white text-transparent bg-clip-text text-center">
          Elevate your SEO efforts
        </h1>
        <p className="text-lg md:text-xl text-white/70 mt-6 text-center max-w-2xl mx-auto">
          EFrom small startups tolarge interprises, Our AI driven tool has
          revolutionized the way busnisses approach SEO
        </p>
        <div className="mt-10 flex flex-col lg:flex-row gap-3 ">
          {tabs.map((tab) => (
            <div
              key={tab.title}
              className="border border-white/15 flex p-3 rounded-xl gap-3 lg:flex-1 relative"
            >
              <div className="absolute inset-0 border border-[#A369FF] -m-px rounded-xl [mask-image:radial-gradient(100px_100px_at_0%_0%,black,transparent)]"></div>
              <div className="h-12 w-12 border border-white/15 rounded-lg inline-flex items-center justify-center">
                <DotLottiePlayer
                  src={tab.icon}
                  className="h-5 w-5"
                  autoplay
                  loop
                />
              </div>
              <div className="font-medium inline-flex items-center">
                {tab.title}
                {tab.isNew && (
                  <div className="text-sm rounded-full h-6 py-1 px-2 ml-2 bg-[#8c44ff] text-black font-semibold inline-flex items-center justify-center">
                    new
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
        <div
          className="aspect-video bg-cover border border-white/20 rounded-lg mt-6"
          style={{ backgroundImage: `url(${productImage.src})` }}
        ></div>
        {/* <Image src={productImage} alt="product image" /> */}
      </div>
    </section>
  );
};
