"use client";
import HeaderButton from "@/components/HeaderButton";
import starimg from "../assets/stars.png";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { useEffect, useRef } from "react";

// --------------------------------------------------------------------------------------------------------------

const useRelativeMousePosition = (to: RefObject<HTMLElement>) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const updateMousePosition = (event: MouseEvent) => {
    if (!to.current) return;
    const { top, left } = to.current.getBoundingClientRect();
    mouseX.set(event.x - left);
    mouseY.set(event.y - top);
  };

  useEffect(() => {
    window.addEventListener("mousemove", updateMousePosition);
    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  return [mouseX, mouseY];
};
// ------------------------------------------------------------------------------------------------------------

export const CallToAction = () => {
  // ---------------------------------------------------------------------------------------------------------
  const borderDivRef = useRef<HTMLDivElement>(null);
  const [mouseX, mouseY] = useRelativeMousePosition(borderDivRef);
  const maskImage = useMotionTemplate`radial-gradient(50% 50% at ${mouseX}px ${mouseY}px , black , transparent`;

  // --------------------------------------------------------------------------------------------------------------

  return (
    <section className="py-20 md:py-28">
      <div className="container">
        <div
          className="border border-white/15 py-24 rounded-xl overflow-hidden relative    group"
          style={{ backgroundImage: ` url(${starimg.src})` }}
        >
          <div className="absolute -z-10 inset-0 bg-blend-overlay bg-[rgb(74,32,138)] [mask-image:radial-gradient(50%_50%_at_50%_35%,black,transparent)] group-hover:opacity-0 transition duration-500"></div>
          {/* copy for animation */}
          <motion.div
            ref={borderDivRef}
            style={{ maskImage }}
            className="absolute -z-10 inset-0 bg-blend-overlay bg-[rgb(74,32,138)] [mask-image:)] group-hover:opacity-100 transition duration-500"
          ></motion.div>
          {/* ----------------------------------------- */}
          <h2 className=" text-5xl md:text-6xl font-semibold max-w-md mx-auto bg-[radial-gradient(100%_100%_at_top_left,white,white,rgb(74,32,138,.5))] bg-white text-transparent bg-clip-text text-center">
            AI-driven SEO for eveyone
          </h2>
          <p className=" text-lg md:text-xl max-w-xs mx-auto text-center text-white/70 px-4 mt-5">
            Achieve clear, Impactful results without the complexity
          </p>
          <div className="flex justify-center mt-8">
            <HeaderButton />
          </div>
        </div>
      </div>
    </section>
  );
};
