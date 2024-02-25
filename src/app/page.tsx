"use client"
import ZoomParallex from "./ZoomParallaz";
import { motion, Variants } from "framer-motion"

export default function Home() {

  const animateIn: Variants = {
    hidden: { y: 10, opacity: 0 },
    animate: { y: 0, opacity: 1 }
  }
  return (
    <div className="">
      <div className="h-[130vh]">
        <div className="h-screen">
          <motion.div
            variants={animateIn}
            initial="hidden"
            animate="animate"
            transition={{ staggerChildren: 0.05 }}
            className={flexerS}>
            <motion.div variants={animateIn} className="text-3xl sm:text-4xl lg:text-5xl text-center font-bold ">
              Scroll To See Some Serious Sorcery
            </motion.div>
            <motion.div variants={animateIn} className="opacity-80 mt-1">you saw what i did up there (SSSSS)</motion.div>

            <div className="text-[8px] text-center mt-3">
              <motion.div variants={animateIn}>scroll</motion.div>
              <motion.div variants={animateIn}>scroll</motion.div>
              <motion.div variants={animateIn}>scroll</motion.div>
              <motion.div variants={animateIn}>scroll</motion.div>
              <motion.div variants={animateIn}>scroooooooooll</motion.div>
              <motion.div variants={animateIn}>scrooooooll</motion.div>
              <motion.div variants={animateIn}>scroooll</motion.div>
              <motion.div variants={animateIn}>scroll</motion.div>
              <motion.div variants={animateIn}>sl</motion.div>
            </div>
          </motion.div>
        </div>
      </div>


      <ZoomParallex />


      <div className="h-screen" >
        <div className={flexerS}>
          <motion.div
            variants={animateIn}
            initial="hidden"
            whileInView="animate"
            transition={{ staggerChildren: 0.3 }}
            viewport={{ amount: 0.2 }}
            className="text-3xl space-x-3 sm:text-4xl lg:text-5xl text-center font-bold ">
            <motion.span variants={animateIn} >Shik</motion.span>
            <motion.span variants={animateIn}>Shak</motion.span>
            <motion.span variants={animateIn}>Shok</motion.span>
          </motion.div>
        </div>
      </div>
    </div >
  );
}

const flexerS = "flex flex-col justify-center items-center flex-1 max-w-screen-xl h-full mx-auto px-2"