"use client";

import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaTelegramPlane, FaUserPlus } from "react-icons/fa";
import { MdCardTravel, MdPlayCircleFilled } from "react-icons/md";
import { Typewriter } from "react-simple-typewriter";

const Banner = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-center common-padding mt-16 lg:mt-12">
      <motion.div
        initial={{ opacity: 0, scale: 0.5, y: 200 }}
        whileInView={{ y: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
        className="space-y-8"
      >
        <div className="bg-white theme-text text-sm sm:text-base font-semibold w-fit px-6 flex items-center gap-2 py-2 rounded-full">
          Explore the Chittagong!
          <MdCardTravel />
        </div>
        <h1 className="text-4xl md:text-5xl xl:text-7xl font-bold h-40 md:h-48 lg:h-64 xl:h-72">
          Travel{" "}
          <span className="theme-text">
            top <br /> destination <br />
          </span>{" "}
          of the <br />
          <span className="theme-text">
            <Typewriter
              words={[
                "Chittagong",
                "Cox's bazar",
                "Bandarban",
                "Saintmartin",
                "Rangamati",
              ]}
              loop={true}
              cursor
            />
          </span>
        </h1>
        <p className="text-slate-500 text-sm">
          We always make our customer happy by providing <br /> as many choices
          as possible valuable price
        </p>
        <div className="flex flex-col sm:flex-row items-end gap-3">
          <button className="custom-btn">Get Started</button>
          <button className="custom-btn-two">
            <MdPlayCircleFilled />
            Watch Demo
          </button>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.5, x: 200 }}
        whileInView={{ x: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="flex gap-6 bg-[url('/assets/layer.png')] bg-top p-5 md:p-16 bg-no-repeat bg-contain"
      >
        <div className="flex flex-col gap-6">
          <div className="relative">
            <img src="/assets/Rectangle1.png" alt="" className="" />
            <div className="bg-[#F85E9F] p-3 rounded-full w-fit text-white absolute -bottom-5 -left-6 shadow-md shadow-[#ba376e]">
              <FaTelegramPlane className="text-4xl" />
            </div>
          </div>
          <div>
            <img src="/assets/Rectangle22.png" alt="" />
          </div>
        </div>
        <div className="flex flex-col items-center h-fit my-auto relative">
          <img src="/assets/Rectangle3.png" alt="" />
          <div className="bg-[#FF5722] p-3 rounded-full w-fit text-white mt-5 shadow-md shadow-[#9f482e]">
            <FaUserPlus className="text-3xl" />
          </div>
          <div className="bg-white py-1 md:py-3 shadow-xl px-2 md:px-4 rounded-full w-fit mt-5 flex items-center gap-2 absolute bottom-36 -right-16">
            <FaMapMarkerAlt className="text-xl text-[#FACD49]" />
            <p className="font-semibold text-sm">Top Places</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Banner;
