"use client";

import SpinAnimation from "@/components/utility/SpinAnimation";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaMapMarkerAlt, FaTelegramPlane, FaUserPlus } from "react-icons/fa";

const BannerDesignSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5, x: 200 }}
      whileInView={{ x: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
      className="flex-[1.5] flex justify-center items-center gap-6 bg-[url('/assets/layer.png')] bg-top p-5 bg-no-repeat bg-contain"
    >
      <div className="flex flex-col gap-6">
        <div className="relative">
          <SpinAnimation>
            <Image
              src="/assets/Rectangle1.png"
              alt="banner image"
              className="rounded-[1.6rem]"
              width={180}
              height={250}
            />
          </SpinAnimation>
          <motion.div
            initial={{ opacity: 0, scale: 0.1, x: -400 }}
            animate={{
              opacity: 1,
              scale: 1,
              x: 0,
              y: [0, -20, 50, 13, 6, 0], // Rocket-like up-and-down movement
            }}
            transition={{
              duration: 3,
              delay: 0.1,
              ease: "easeInOut",
              repeatType: "reverse",
            }}
            className="bg-[#F85E9F] p-3 rounded-full w-fit text-white absolute -bottom-5 -left-6 shadow-md shadow-[#ba376e]"
          >
            <FaTelegramPlane className="text-2xl" />
          </motion.div>
        </div>
        <div>
          <SpinAnimation>
            <Image
              src="/assets/Rectangle22.png"
              alt="banner image"
              width={180}
              height={250}
              className="rounded-[1.6rem]"
            />
          </SpinAnimation>
        </div>
      </div>
      <div className="flex flex-col items-center h-fit my-auto relative">
        <SpinAnimation>
          <Image
            src="/assets/Rectangle3.png"
            alt="banner image"
            width={220}
            height={300}
          />
        </SpinAnimation>
        <motion.div
          initial={{ opacity: 0, scale: 0.1, y: 200 }}
          whileInView={{ y: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="bg-[#FF5722] p-3 rounded-full w-fit text-white shadow-md shadow-[#9f482e] -mt-[10%] z-10 bounce-slow"
        >
          <FaUserPlus className="text-2xl" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.1, y: -300 }}
          whileInView={{ y: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 100, 
            damping: 10,
            duration: 5, 
          }}
          className="bg-white py-1 md:py-3 shadow-xl px-2 md:px-4 rounded-full w-fit mt-5 flex items-center gap-1 top-8 absolute -right-16"
        >
          <FaMapMarkerAlt className="text-xl text-[#FACD49]" />
          <p className="font-semibold text-sm">Top Places</p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default BannerDesignSection;
