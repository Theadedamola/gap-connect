import { motion } from 'framer-motion'
import { BarChart2, Settings, Target, Users } from 'lucide-react'

const services = [
  {
    title: 'Business Strategy Development',
    description:
      'Develop comprehensive strategies aligned with your business goals and market opportunities.',
    Icon: Target,
  },
  {
    title: 'Operations Optimization',
    description:
      'Streamline your operations for maximum efficiency and productivity.',
    Icon: Settings,
  },
  {
    title: 'Market Analysis',
    description:
      'In-depth market research and competitor analysis to position your business effectively.',
    Icon: BarChart2,
  },
  {
    title: 'Leadership Coaching',
    description:
      'Empower your leadership team with executive coaching and development programs.',
    Icon: Users,
  },
]

export const ServicesSection = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl flex flex-col px-6 md:px-10 lg:px-16 gap-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-4 px-4 sm:px-6 lg:px-8"
        >
          <h2 className="text-7xl text-start font-bold text-brown">
            Our Services
          </h2>
          <p>
            Our offerings and services to grow your business and finally bridge
            the gap
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`p-6 flex flex-col items-start gap-4 rounded-2xl hover:shadow-[0px_4px_20px_rgba(0,0,0,0.05)] hover:bg-white transition-all duration-300`}
            >
              <div className="text-charcoal">
                <service.Icon className="h-12 w-12 mx-auto" />
              </div>
              <h3 className="text-5xl font-semibold text-charcoal">
                {service.title}
              </h3>
              <p className="text-charcoal-light">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
