import { PiGameController, PiGraduationCapFill ,PiShootingStarThin} from "react-icons/pi";
import { FaLaptop } from "react-icons/fa6";
import { motion , AnimatePresence } from "motion/react";

const educationData = [
    {
        year:"2023-2026",
        title:"Informatics",
        institution:"Universitas Pembangunan Jaya",
        description:"Studying Informatics with a strong focus on web development and software engineering. Actively involved in academic projects, student organization work, and hands-on application development using PHP, Laravel, MySQL."
    },
    {
        year:"2023",
        title:"Junior Web Developer",
        institution:"Vocational School Graduate Academy - Digital Talent Scholarship",
        description:"Completed the Junior Web Developer program under the Digital Talent Scholarship. The training covered HTML, CSS, and PHP for building responsive and functional websites. At the end of the program, I took the official competency exam to earn the Junior Web Developer certification from BNSP."
    },
    {
        year:"2020-2023",
        title:"Software Engineer",
        institution:"Vocational high school for software engineering ",
        description:"Learned the foundations of programming, databases, and system design. Worked on several practical projects, including a hotel booking website for the final competency exam. Gained experience with Java, PHP, MySQL, HTML, CSS, and Bootstrap."
    },

]

const workData = [
  {
    year: "Agu 2025 - Okt 2025",
    title: "Full-stack Developer Intern",
    institution: "Chameleon",
    description:
      "Worked on continuing an existing WordPress project using plugins, ACF, and custom code snippets to ensure client requirements were met. Also conducted research and development to integrate a frontend using Next.js with a WordPress-powered backend."
  },
  {
    year: "Mar 2024 - Jun 2024",
    title: "Web Developer",
    institution: "PT Cipta Sukses Globalindo (CSG)",
    description:
      "Developed web applications using Laravel 10, covering both frontend and backend. Built a comprehensive Sales Management Dashboard for real-time sales monitoring, helping improve operational efficiency and decision-making. Implemented CRUD features and worked with MySQL for database management."
  }
];

export const Resume = () => {
return (
    <section className="min-h-screen lg:mt-22 mt-28 pb-12 max-w-7xl mx-auto flex flex-col justify-center">

      {/* TITLE */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false, amount: 0.3 }}
        className="text-center mt-12"
      >
        <p
          className="text-2xl font-semibold inline-flex items-center mt-44 md:mt-0 gap-1 border-outer px-3 rounded-2xl mb-4"
          id="resume"
        >
          <PiShootingStarThin className="text-4xl  font-bold" /> Resume
        </p>
        <h2 className="text-xl md:text-3xl lg:text-4xl font-bold text-gradient mb-8">
          Education and practical experience
        </h2>
      </motion.div>

    
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 space-y-12 relative mb-18 z-10">

        <div className="ml-0 lg:ml-[100px]">
          <motion.h3
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false, amount: 0.3 }}
            className="text-lg md:text-2xl  font-bold  mb-5"
          >
            My Education
          </motion.h3>

          <div className="relative">

            <motion.div
              initial={{ opacity: 0, height: 0 }}
              whileInView={{ opacity: 1, height: "100%" }}
              transition={{ duration: 0.8 }}
              viewport={{ once: false, amount: 0.3 }}
              className="absolute left-4 top-0 bottom-0 w-0.5 pink-gradient opacity-60"
            ></motion.div>


            {educationData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: false, amount: 0.3 }}
                className="relative flex items-start space-x-6 pb-8"
              >
        
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.15 }}
                  viewport={{ once: false, amount: 0.3 }}
                  className="w-8 h-8 pink-gradient rounded-full flex items-center justify-center"
                >
                  <PiGraduationCapFill className="w-4 h-4" />
                </motion.div>

          
                <div className="flex-1 min-w-0">
                  <span className="text-sm font-medium bg-primary/10 px-2 py-1 rounded-2xl">
                    {item.year}
                  </span>
                  <h4 className="text-lg font-semibold">{item.title}</h4>
                  <p className="mb-2">{item.institution}</p>
                  <p className="text-sm">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

          <div className="ml-0 lg:ml-[100px]">
          <motion.h3
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false, amount: 0.3 }}
            className="text-lg md:text-2xl  font-bold mb-5"
          >
            My Intern Experience
          </motion.h3>

          <div className="relative">
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              whileInView={{ opacity: 1, height: "100%" }}
              transition={{ duration: 0.8 }}
              viewport={{ once: false, amount: 0.3 }}
              className="absolute left-4 top-0 bottom-0  w-0.5 pink-gradient opacity-60"
            ></motion.div>

            {workData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: false, amount: 0.3 }}
                className="relative flex items-start space-x-6 pb-8"
              >
                {/* ICON */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.15 }}
                  viewport={{ once: false, amount: 0.3 }}
                  className="w-8 h-8 pink-gradient rounded-full flex items-center justify-center"
                >
                  <FaLaptop className="w-4 h-4" />
                </motion.div>

                {/* TEXT */}
                <div className="flex-1 min-w-0">
                  <span className="text-sm font-medium bg-primary/10 px-2 py-1 rounded-2xl">
                    {item.year}
                  </span>
                  <h4 className="text-lg font-semibold ">{item.title}</h4>
                  <p className=" mb-2 ">{item.institution}</p>
                  <p className=" text-sm  ">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}