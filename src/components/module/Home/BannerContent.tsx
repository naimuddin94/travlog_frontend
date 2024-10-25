"use client";

import { motion } from "framer-motion";
import { MdCardTravel, MdPlayCircleFilled } from "react-icons/md";
import { Typewriter } from "react-simple-typewriter";

const BannerContent = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5, y: 200 }}
      whileInView={{ y: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7 }}
      className="space-y-6 flex-1"
    >
      <div className="bg-white theme-text text-sm sm:text-base font-semibold w-fit px-6 flex    items-center gap-2 py-2 rounded-full">
        Explore Bangladesh!
        <MdCardTravel />
      </div>
      <h1 className="text-4xl md:text-5xl font-extrabold text-slate-800 tracking-wide">
        Travel{" "}
        <span className="theme-text">
          top <br /> destination <br />
        </span>
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
            cursorColor="#FF204E"
          />
        </span>
      </h1>
      <p className="text-slate-500 text-sm">
        We always make our customer happy by providing <br /> as many choices as
        possible valuable price
      </p>
      <div className="flex flex-col sm:flex-row items-end gap-3">
        <button className="custom-btn">Get Started</button>
        <button className="custom-btn-two">
          <MdPlayCircleFilled />
          Watch Demo
        </button>
      </div>
    </motion.div>
  );
};

export default BannerContent;
