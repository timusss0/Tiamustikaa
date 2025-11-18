import { PiShootingStarThin } from "react-icons/pi";
import { motion } from "motion/react";

export const Portfolio = () => {
  const projects = [
    {
      title: "Forkawarior",
      image: "/FORKAWARIOR.png",
      tags: ["HTML", "Tailwind CSS"],
    },
    {
      title: "Ship Alert",
      image: "ship-alertt.png",
      tags: ["IoT", "Laravel", "MySQL", "Bootstrap"],
    },
    {
      title: "Upinjam",
      image: "/UPinjam.png",
      tags: ["Laravel", "MySQL", "Tailwind CSS"],
    },
    {
      title: "MyPortfolio",
      image: "/Myportfolio.png",
      tags: ["Next.js", "Tailwind CSS"],
    },
  ];

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.25,
      },
    },
  };

  const card = {
    hidden: { opacity: 0, y: 60, rotateX: -10 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="mt-5 pb-8 mb-30" id="portfolio">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false, amount: 0.3 }}
        className="text-center"
      >
        <p
          className="text-2xl font-semibold inline-flex items-center md:mt-0 gap-1 border-outer px-3 rounded-2xl mb-4"
          id="portfolio"
        >
          <PiShootingStarThin className="text-4xl font-bold" /> Portfolio
        </p>
        <h2 className="text-sm md:text-3xl lg:text-4xl font-bold text-gradient mb-4">
          Check out my featured project
        </h2>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-8xl"
      >
        {projects.map((project) => (
          <motion.div
            key={project.title}
            variants={card}
            whileHover={{ scale: 1.03, rotateY: 3 }}
            transition={{ type: "spring", stiffness: 120, damping: 12 }}
            className="group relative bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 cursor-pointer"
          >
            <motion.div
              whileHover={{ scale: 1 }}
              transition={{ duration: 0.4 }}
              className="flex justify-center relative overflow-hidden w-full"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full md:h-[200px] sm:object-contain lg:h-[415px] object-cover rounded-xl items-center transition-transform duration-500 group-hover:scale-105"
              />

              <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/60 via-black/20 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="flex flex-wrap gap-2 mb-2">
                  {project.tags.map((tagText, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 text-white text-sm font-medium border rounded-xl border-white/10 backdrop-blur-md bg-gradient-to-r from-pink-400/100 to-pink-300/100"
                    >
                      {tagText}
                    </span>
                  ))}
                </div>

                <h3 className="text-white font-bold text-xl drop-shadow-md">
                  {project.title}
                </h3>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};
