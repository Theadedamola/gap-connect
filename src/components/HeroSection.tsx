import { motion } from 'framer-motion'
import bridge from './bridge.svg'


export const HeroSection = () => {
  return (
    <div className="relative max-h-[120vh] flex flex-col items-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-tr from-brown to-charcoal" />
      {/* <div className="w-full absolute inset-0 bottom-0 top-[480px] z-30 m-4 rounded-xl bg-hero-illus bg-contain bg-no-repeat" /> */}
      <div className="relative z-40 max-w-2xl mx-auto mt-40 px-4 sm:px-6 lg:px-8">
        <div className="text-center flex flex-col gap-6 items-center justify-center">
          <motion.h1
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold text-white leading-tight"
          >
            Bridging the Gap for Business Success
          </motion.h1>
          <p className="mb-4 text-white">
            Our goal is to make your business grow, with our expert thinking and
            solutions, we elevate your brand
          </p>
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, type: 'spring', stiffness: 150 }}
            className="w-fit bg-brown hover:bg-brown/80 text-white text-lg px-8 py-3 rounded-md transition-all duration-300 transform hover:scale-105"
          >
            Get Started
          </motion.button>
        </div>
      </div>
      <img
        src={bridge}
        alt=""
        className="relative z-20 max-w-3xl"
      />
    </div>
  )
}
