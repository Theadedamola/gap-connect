import { motion } from 'framer-motion'
import bridgeRoad from './bridge road-pana.svg'

export const CallToAction = () => {
  return (
    <section className="py-24">
      <div className="w-full mx-auto px-6 md:px-10 lg:px-16 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-white px-6 border flex flex-col items-center justify-center border-yellow-100 mx-auto rounded-2xl"
        >
          <h2 className="text-3xl font-bold text-charcoal mt-10">
            Ready to Transform Your Business?
          </h2>
          <p className="max-w-xl text-charcoal-light">
            Our goal is to make your business grow, with our expert thinking and
            solutions, lets bridge the gap together
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-brown mt-10 hover:bg-brown/80 text-white text-lg px-8 py-3 rounded-md transition-colors duration-300"
          >
            Book a Consultation
          </motion.button>
          <div className="flex overflow-hidden">
            <img src={bridgeRoad} alt="" className="w-96" />
            <img src={bridgeRoad} alt="" className="w-96" />
            <img src={bridgeRoad} alt="" className="w-96" />
            <img src={bridgeRoad} alt="" className="w-96" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
