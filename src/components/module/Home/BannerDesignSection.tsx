"use client";

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
          <Image
            src="/assets/Rectangle1.png"
            alt="banner image"
            className=""
            width={180}
            height={250}
          />
          <div className="bg-[#F85E9F] p-3 rounded-full w-fit text-white absolute -bottom-5 -left-6 shadow-md shadow-[#ba376e]">
            <FaTelegramPlane className="text-2xl" />
          </div>
        </div>
        <div>
          <Image
            src="/assets/Rectangle22.png"
            alt="banner image"
            width={180}
            height={250}
          />
        </div>
      </div>
      <div className="flex flex-col items-center h-fit my-auto relative">
        <Image
          src="/assets/Rectangle3.png"
          alt="banner image"
          width={220}
          height={300}
        />
        <div className="bg-[#FF5722] p-3 rounded-full w-fit text-white shadow-md shadow-[#9f482e] -mt-[10%]">
          <FaUserPlus className="text-2xl" />
        </div>
        <div className="bg-white py-1 md:py-3 shadow-xl px-2 md:px-4 rounded-full w-fit mt-5 flex items-center gap-2 absolute bottom-36 -right-16">
          <FaMapMarkerAlt className="text-xl text-[#FACD49]" />
          <p className="font-semibold text-sm">Top Places</p>
        </div>
      </div>
    </motion.div>
  );
};

export default BannerDesignSection;
