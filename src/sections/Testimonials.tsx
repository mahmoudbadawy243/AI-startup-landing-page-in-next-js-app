"use client";
import avatar1 from "@/assets/avatar-1.png";
import avatar2 from "@/assets/avatar-2.png";
import avatar3 from "@/assets/avatar-3.png";
import avatar4 from "@/assets/avatar-4.png";
import Image from "next/image";
import { Fragment } from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    text: "“This product has completely transformed how I manage my projects and deadlines”",
    name: "Sophia Perez",
    title: "Director @ Quantum",
    avatarImg: avatar1,
  },
  {
    text: "“These AI tools have completely revolutionized our SEO entire strategy overnight”",
    name: "Jamie Lee",
    title: "Founder @ Pulse",
    avatarImg: avatar2,
  },
  {
    text: "“The user interface is so intuitive and easy to use, it has saved us countless hours”",
    name: "Alisa Hester",
    title: "Product @ Innovate",
    avatarImg: avatar3,
  },
  {
    text: "“Our team's productivity has increased significantly since we started using this tool”",
    name: "Alec Whitten",
    title: "CTO @ Tech Solutions",
    avatarImg: avatar4,
  },
];

export const Testimonials = () => {
  return (
    <section className="py-20 md:py-24">
      <div className="container">
        <h2 className="text-5xl md:text-6xl font-semibold bg-[radial-gradient(100%_100%_at_top_left,white,white,rgb(74,32,138,.5))] bg-white text-transparent bg-clip-text text-center">
          Beyond Expectations.
        </h2>
        <p className="text-lg md:text-xl text-white/70 mt-6 text-center max-w-2xl mx-auto">
          Our revolutionary AI SEO tool has transformed our clients strategies
        </p>
        <div className="flex overflow-hidden mt-16 md:24 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          {/* <motion.div
            initial={{ translateX: "-50%" }}
            animate={{ translateX: "0" }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 20,
              // repeatType: "loop",
            }}
          > */}
          <motion.div
            className="flex gap-5 flex-none pr-5 "
            initial={{ translateX: "-50%" }}
            animate={{ translateX: "0" }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 15,
              // repeatType: "loop",
            }}
          >
            {Array.from({ length: 2 }).map((_, i) => (
              <Fragment key={i}>
                {/* {[...testimonials,...testimonials].map((testimonial) => ( */}
                {testimonials.map((testimonial) => (
                  <div
                    key={testimonial.name}
                    className="relative max-w-xs min-w-[280px] md:min-w-[330px] border border-white/15 rounded-2xl p-6 bg-[linear-gradient(to_bottom_left,rgb(140,69,255,.3),black)] "
                  >
                    <div className="absolute inset-0 border border-[#A369FF] -m-px rounded-xl [mask-image:radial-gradient(200px_200px_at_0%_0%,black,transparent)]"></div>

                    <div className="flex flex-col gap-2">
                      <div className="text-lg md:tetx-2xl ">
                        {testimonial.text}
                      </div>
                      <div className="flex items-center gap-3 mt-5 ">
                        <Image
                          src={testimonial.avatarImg}
                          alt={testimonial.name}
                          className="h-11 w-11 rounded-lg  "
                        />
                        <div>
                          <div>{testimonial.name}</div>
                          <div className="text-sm text-white/50">
                            {testimonial.title}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </Fragment>
            ))}
            {/* </div> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
