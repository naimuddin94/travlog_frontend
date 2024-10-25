"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Partners = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5, x: 200 }}
      whileInView={{ x: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
      className="relative py-5"
    >
      <Image
        src="/assets/sign.png"
        alt="sign"
        width={48}
        height={48}
        className="absolute w-12 -top-20 opacity-20"
      />
      <div className="flex flex-wrap gap-4 justify-center lg:justify-between common-padding">
        <Image
          src="/assets/Group05.png"
          alt="partner logo"
          className="h-4 md:h-8"
          width={150}
          height={48}
        />
        <Image
          src="/assets/Group04.png"
          alt="partner logo"
          width={150}
          height={48}
          className="h-4 md:h-8"
        />
        <Image
          src="/assets/Group03.png"
          alt="partner logo"
          width={180}
          height={44}
          className="h-4 md:h-8"
        />
        <Image
          src="/assets/Group02.png"
          alt="partner logo"
          width={150}
          height={48}
          className="h-4 md:h-8"
        />
        <Image
          src="/assets/Group01.png"
          alt="partner logo"
          width={120}
          height={48}
          className="h-3 md:h-6"
        />
      </div>
    </motion.div>
  );
};

export default Partners;
