"use client";

import quantumLogo from "@/assets/logo-quantum.png";
import acmeLogo from "@/assets/logo-acme.png";
import echoValleyLogo from "@/assets/logo-echo.png";
import pulseLogo from "@/assets/logo-pulse.png";
import outsideLogo from "@/assets/logo-apex.png";
import celestialLogo from "@/assets/logo-celestial.png";

import Image from "next/image";
import { motion } from "framer-motion";

export const LogoTicker = () => {
  return (
    <>
      <div className=" py-8 md:py-16">
        <div className="flex overflow-hidden  [mask-image:linear-gradient(to_right,transparent,black,transparent)] ">
          <motion.div
            className="flex gap-14 flex-none pr-14"
            animate={{ x: "-50%" }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear",
              repeatType: "loop",
            }}
          >
            <Image
              src={acmeLogo}
              className="logo-ticker-image h-10 w-auto "
              alt="acme logo"
            />
            <Image
              src={quantumLogo}
              className="logo-ticker-image h-10 w-auto"
              alt="quantum logo"
            />
            <Image
              src={echoValleyLogo}
              className="logo-ticker-image h-10 w-auto"
              alt=" logo"
            />
            <Image
              src={celestialLogo}
              className="logo-ticker-image h-10 w-auto"
              alt="celestial logo"
            />
            <Image
              src={pulseLogo}
              className="logo-ticker-image h-10 w-auto"
              alt="pulse logo"
            />

            <Image
              src={outsideLogo}
              className="logo-ticker-image h-10 w-auto"
              alt="apex logo"
            />

            {/* copy only for animation */}

            <Image
              src={acmeLogo}
              className="logo-ticker-image h-10 w-auto"
              alt="acme logo"
            />
            <Image
              src={quantumLogo}
              className="logo-ticker-image h-10 w-auto"
              alt="quantum logo"
            />
            <Image
              src={echoValleyLogo}
              className="logo-ticker-image h-10 w-auto"
              alt=" logo"
            />
            <Image
              src={celestialLogo}
              className="logo-ticker-image h-10 w-auto"
              alt="celestial logo"
            />
            <Image
              src={pulseLogo}
              className="logo-ticker-image h-10 w-auto"
              alt="pulse logo"
            />

            <Image
              src={outsideLogo}
              className="logo-ticker-image h-10 w-auto"
              alt="apex logo"
            />

            {/* also copy only for animation */}

            <Image
              src={acmeLogo}
              className="logo-ticker-image h-10 w-auto"
              alt="acme logo"
            />
            <Image
              src={quantumLogo}
              className="logo-ticker-image h-10 w-auto"
              alt="quantum logo"
            />
            <Image
              src={echoValleyLogo}
              className="logo-ticker-image h-10 w-auto"
              alt=" logo"
            />
            <Image
              src={celestialLogo}
              className="logo-ticker-image h-10 w-auto"
              alt="celestial logo"
            />
            <Image
              src={pulseLogo}
              className="logo-ticker-image h-10 w-auto"
              alt="pulse logo"
            />

            <Image
              src={outsideLogo}
              className="logo-ticker-image h-10 w-auto"
              alt="apex logo"
            />
          </motion.div>
        </div>
      </div>
    </>
  );
};
