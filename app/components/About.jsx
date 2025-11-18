import { PiShootingStarThin } from "react-icons/pi";
import Link from "next/link";
import {HiDownload} from "react-icons/hi";
import Image from "next/image";
import { motion } from "motion/react";


export const About = () => {

   // animation varians
  const container = {
    hidden:{},
    show:{
      transition:{
        starggerChildren:0.2
      }
    }
  }
const item = {
  hidden:{opacity:0,y:30},
  show:{opacity:1,y:0,transition:{duration:0.6}}
}


    return(
    <section className="mt-5 pb-8 mb-30" id="about">
      {/* TITLE ABOUT */}
   {/* <motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: false, amount: 0.3 }}
  className="text-center"
>
  <p className="text-2xl z-10 font-semibold inline-flex justify-center items-center gap-1 border-outer px-3 rounded-2xl mb-4">
    <PiShootingStarThin className="text-4xl font-bold" />
    About
  </p>

  <h2 className="text-lg md:text-3xl lg:text-4xl relative z-10 font-bold text-gradient mb-8">
    Making the web work better for everyone
  </h2>
</motion.div> */}
         <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false, amount: 0.3 }}
            className="text-center mt-12">
            <p
              className="text-2xl font-semibold inline-flex items-center md:mt-0 gap-1 border-outer px-3 rounded-2xl mb-4"
              id="about" >
              <PiShootingStarThin className="text-4xl  font-bold" /> About
            </p>
            <h2 className="text-sm md:text-3xl lg:text-4xl font-bold text-gradient mb-4">
             Making the web work better for everyone
            </h2>
          </motion.div>


{/* GRID 3 COLUMN */}
<motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.2 }}
  viewport={{ once: false, amount: 0.3 }}
  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto justify-between relative z-10"
>

  {/* DESKRIPSI */}
  <div className="space-y-4">
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      viewport={{ once: false, amount: 0.3 }}
      className=" leading-relaxed md:w-[430px] lg:text-start text-justify md:text-start"
    >
      I am a Computer Science student who has been interested in programming since vocational school when I majored in Software Engineering. Since then, I have mastered PHP and continued to develop my skills in web development. During college, I participated in the Student Creativity Program from the Ministry of Education, Culture, Research, and Technology, successfully obtained funding, and completed the project.
    </motion.p>

    <motion.p
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.5 }}
      viewport={{ once: false, amount: 0.3 }}
      className="leading-relaxed"
    >
       My internship experience has given me a better understanding of the dynamics of real-world work. I am ready to enter the workforce with a strong desire to learn and a passion to contribute my best.
    </motion.p>

    {/* BUTTON */}
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.7 }}
      viewport={{ once: false, amount: 0.3 }}
    >
      <Link
        href="/resume.pdf"
        className="px-5 mt-3 py-3 rounded-xl bg-gradient-to-r from-pink-500 to-purple-400 text-white font-medium inline-flex items-center gap-2 shadow-lg hover:shadow-xl transition-all"
        download
      >
        Download CV
        <HiDownload />
      </Link>
    </motion.div>
  </div>

  {/* DATA DIRI */}
  <motion.div
    initial={{ opacity: 0, x: 30 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.7, delay: 0.4 }}
    viewport={{ once: false, amount: 0.3 }}
    className="space-y-6 md:ml-26 ml-0 mt-12 md:mt-0 lg:mt-0"
  >
    {[
      { label: "Name", value: "Tia Mustika Ramadhani" },
      { label: "Phone", value: "0859-6586-5409" },
      { label: "Email", value: "mus770101@gmail.com" }
    ].map((item, i) => (
      <motion.div
        key={i}
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.5 + i * 0.15 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <p className="text-xs uppercase text-gray-500 tracking-wide">{item.label}</p>
        <p className="text-lg font-semibold">{item.value}</p>
      </motion.div>
    ))}

    {/* GITHUB */}
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.8 }}
      viewport={{ once: false, amount: 0.3 }}
    >
      <p className="text-xs uppercase text-gray-500 tracking-wide">GitHub</p>
      <Link
        href="https://github.com/timusss0"
        className="text-lg font-semibold cursor-pointer hover:text-purple-600 transition"
      >
        https://github.com/timusss0
      </Link>
    </motion.div>
  </motion.div>

  {/* FOTO */}
  <motion.div
    initial={{ opacity: 0, scale: 0.85 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.7, delay: 0.5 }}
    viewport={{ once: false, amount: 0.3 }}
    className="hidden md:flex lg:flex justify-center"
  >
    <Image
      src="/IMG1.jpg"
      alt="Foto Tia"
      width={280}
      height={350}
      className="object-cover rounded-xl shadow-md"
    />
  </motion.div>

</motion.div>
</section>

    )
}