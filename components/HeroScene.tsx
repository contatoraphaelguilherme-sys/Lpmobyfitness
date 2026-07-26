"use client";

import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function HeroScene() {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imageY = useTransform(scrollYProgress, [0, 1], [0, reduced ? 0 : 34]);
  const detailY = useTransform(scrollYProgress, [0, 1], [0, reduced ? 0 : -22]);

  return (
    <div ref={ref} className="relative min-h-[510px] lg:min-h-[620px]">
      <motion.div
        initial={reduced ? false : { opacity: 0, clipPath: "inset(0 0 100% 0)" }}
        animate={reduced ? undefined : { opacity: 1, clipPath: "inset(0 0 0% 0)" }}
        transition={{ duration: 0.75, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-x-0 top-0 h-[86%] overflow-hidden bg-[#0b2d53]"
      >
        <motion.div style={{ y: imageY }} className="absolute -inset-y-8 inset-x-0">
          <Image
            fill
            priority
            sizes="(max-width:1024px) 100vw, 52vw"
            className="object-cover object-center"
            src="/704751844_18437592055187774_5767273397684912022_n.jpg"
            alt="Equipe da Moby Fitness reunida na academia"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#06182c]/70 via-transparent to-transparent" />
      </motion.div>

      <motion.div
        style={{ y: detailY }}
        initial={reduced ? false : { opacity: 0, x: 18 }}
        animate={reduced ? undefined : { opacity: 1, x: 0 }}
        transition={{ duration: 0.55, delay: 0.48 }}
        className="absolute bottom-0 right-0 w-[76%] border-l-[6px] border-[#1b8ef2] bg-[#f6fbff] p-5 text-[#071d38] shadow-[0_22px_60px_rgba(0,0,0,.18)] sm:w-[62%] md:p-7"
      >
        <p className="text-[10px] font-extrabold uppercase tracking-[.2em] text-[#087bea]">Mais que treino</p>
        <p className="mt-2 max-w-sm text-sm font-extrabold leading-6 md:text-base">
          Um espaço de saúde, esporte e convivência para diferentes gerações.
        </p>
      </motion.div>

      <motion.div
        initial={reduced ? false : { opacity: 0, scale: 0.92 }}
        animate={reduced ? undefined : { opacity: 1, scale: 1 }}
        transition={{ duration: 0.45, delay: 0.62 }}
        className="absolute -left-3 top-8 grid h-24 w-24 place-items-center rounded-full border border-white/35 bg-[#087bea] text-center text-[10px] font-extrabold uppercase leading-4 tracking-[.13em] text-white sm:-left-8 sm:h-28 sm:w-28"
      >
        Guarujá
        <br />
        SP
      </motion.div>
    </div>
  );
}
