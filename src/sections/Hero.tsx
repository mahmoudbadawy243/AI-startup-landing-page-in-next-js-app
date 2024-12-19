"use client";
import HeaderButton from "@/components/HeaderButton";
import starImage from "../assets/stars.png";
import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section
      className="h-[500px] md:h-[900px] mb-10 relative md:-mt-32 px-6 flex items-center text-center overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)] "
      style={{ backgroundImage: `url(${starImage.src})` }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(50%_50%_at_center_center,rgb(144,69,255,.5)_15%,rgb(14,0,36,.5)_78%,transparent)]"></div>

      <motion.div
        animate={{ rotate: "10turn" }}
        transition={{ duration: 100, repeat: Infinity }}
        style={{
          translateX: "-50%",
          translateY: "-50%",
        }}
        className="absolute h-64 w-64 bg-purple-500  rounded-full border border-white/20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 hero-ball-effect"
      ></motion.div>
      <div className="absolute h-[370px] w-[370px] border rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-90 border-white/20"></div>
      <div className="absolute h-[470px] w-[470px] border rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-90 border-white/20"></div>
      <div className="absolute h-[600px] w-[600px] border rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-90 border-white/20"></div>
      <div className="md:container md:p-6 mt-20 md:mt-20 relative">
        <h1 className="text-8xl md:text-[168px] md:leading-none font-semibold  bg-[radial-gradient(100%_100%_at_top_left,white,white,rgb(74,32,138,.5))] bg-white text-transparent bg-clip-text text-center">
          AI SEO
        </h1>
        <p className="text-lg md:text-xl text-white/70 mt-6 text-center max-w-xl mx-auto">
          Elevate your site visibility effortlessly with AI, where smart
          technology meets user-friendly SEO tools.
        </p>
        <div className="flex justify-center mt-5"></div>
        <HeaderButton />
      </div>
    </section>
  );
};
