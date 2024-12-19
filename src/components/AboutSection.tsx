import { motion } from 'framer-motion'
import image1 from './image 1.jpeg'
import image2 from './image 2.jpg'
import image3 from './image 3.jpg'

export const AboutSection = () => {
  return (
    <section className="w-full px-6 md:px-10 lg:px-16 py-40">
      <div className="max-w-4xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-7xl font-bold text-brown mb-6">About Us</h2>
          <p className="text-sm leading-relaxed text-gray-600">
            At GAP CONNECT, we specialize in bridging the gap between business
            challenges and effective solutions. Our team empowers businesses to
            achieve their goals by identifying pain points and implementing
            tailored strategies.
          </p>
        </motion.div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-8">
        <img
          src={image3}
          alt=""
          className="h-full md:row-span-2 rounded-xl"
        />
        <img
          src={image2}
          alt=""
          className="h-full rounded-xl"
        />
        <img
          src={image1}
          alt=""
          className="h-full rounded-xl"
        />
      </div>
    </section>
  )
}
