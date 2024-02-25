import React from "react";
import HomeImage from "../component/homeData/HomeImage";

import { motion } from "framer-motion";
import HomeLeft from "../component/homeData/HomeLeft";
import CertificatesSection from "../component/homeData/CertificatesSection";

const pageTransitionVariants = {
  hidden: {
    x: "-100vw",
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      when: "beforeChildren",
      staggerChildren: 0.4,
    },
  },
  exit: {
    x: "-100vw",
  },
};

const Home = () => {
  return (
    <motion.div
      className="min-h-screen bg-gray-200 p-4 font-primary text-xl font-medium text-gray-500 dark:bg-bodyColor 
    dark:text-gray-300 sm:p-8"
      variants={pageTransitionVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div className=" mb-36 flex flex-col items-center justify-between gap-8 border-b-2 border-gray-300 border-opacity-50 py-16 pb-24 dark:border-gray-900 sm:px-4 lg:flex-row lg:items-center lg:gap-16">
        {/* Home left side */}

        <HomeLeft />
        {/* Home Right side */}
        <HomeImage />
      </div>

      {/* Cerificates */}
      <CertificatesSection />
    </motion.div>
  );
};

export default Home;
