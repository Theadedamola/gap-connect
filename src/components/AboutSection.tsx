import { motion } from 'framer-motion'

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
          src="https://img.freepik.com/free-photo/close-up-young-man-having-meeting_23-2149060254.jpg?t=st=1734607916~exp=1734611516~hmac=9d49aa1767cb3e51f8eba88821c7484836534339997e5e5fbd68d84c42a931bd&w=740"
          alt=""
          className="h-full md:row-span-2 rounded-xl"
        />
        <img
          src="https://img.freepik.com/free-photo/man-sitting-down-office-job-interview-desk-with-his-employers_23-2149034553.jpg?t=st=1734607595~exp=1734611195~hmac=087456a89e100696cd75382514a4b6b6b5e9524b1f220d2679a6da5f937a4f50&w=1480"
          alt=""
          className="h-full rounded-xl"
        />
        <img
          src="https://img.freepik.com/free-photo/male-employee-getting-used-his-new-office-job-along-with-female-colleagues_23-2149034607.jpg?t=st=1734607946~exp=1734611546~hmac=93b83e1383039870d2e901ca7a6c81c4752ac9c28735d0d40eccc6fadca230e4&w=1480"
          alt=""
          className="h-full rounded-xl"
        />
      </div>
    </section>
  )
}
