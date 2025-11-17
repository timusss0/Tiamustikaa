import { PiShootingStarThin } from "react-icons/pi";
import { motion } from "motion/react";


export const Portfolio = () => {
   const projects = [
  {
    title: "Forkawarior",
    image: "/FORKAWARIOR.png",
    tags: ["HTML", "Tailwind CSS"]
  },
  {
    title: "Ship Alert",
    image: "ship-alertt.png",
    tags: ["IoT", "Laravel", "MySQL", "Bootstrap"]
  },
  {
    title: "Upinjam",
    image: "/UPinjam.png",
    tags: ["Laravel", "MySQL", "Tailwind CSS"]
  },
  {
    title: "MyPortfolio",
    image: "/Myportfolio.png",
    tags: ["Next.js", "Tailwind CSS"]
  }
];
  // animation varians
  const container = {
    hidden:{},
    show:{
      transition:{
        starggerChildren:0.25
      }
    }
  }
const card = {
  hidden:{opacity:0,y:60,rotateX:-10},
  show:{opacity:1,y:0,transition:{duration:0.6,ease:"easeOut"}}
}
  return (
    <section id="portfolio" className="w-full justify-center items-center h-screen">
        <motion.div 
        initial={{opacity:0, x:20}}
        whileInView={{ opacity: 1, y: 1 }}
        transition={{duration:0.6}}
        viewPort={{ once: true }}
        className="text-center ">
            <p className="text-2xl font-semibold inline-flex items-center gap-1 border-outer px-3 rounded-2xl mb-4"><PiShootingStarThin className="text-4xl font-bold" />Portfolio</p>
            <h2 className="text-xl md:text-3xl lg:text-4xl font-bold text-gradient mb-8">Check out my featured project</h2>
        </motion.div>
  <motion.div
   container={container}
        initial="hidden"
        whileInView="show"
        viewPort={{ once: true ,amount:0.2}}
  className="grid grid-cols-1 md:grid-cols-2 gap-8  max-w-8xl">
  {projects.map((project) => (
    <motion.div
     variants={card}
      whileHover={{scale:1.03,rotateY:3}}
      transition={{type:"spring",stiffness:120,damping:12}}
      key={project.title}
      className="group relative bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 cursor-pointer"
    >
      {/* Gambar */}
      <motion.div 
      whileHover={{scale:1.00}}
      transition={{duration:0.4}}
      className=" flex justify-center relative overflow-hidden w-full">
        <img
          src={project.image}
          alt={project.title}
          className="w-full md:h-[200px] sm:object-contain lg:h-[415px] object-cover rounded-xl items-center transition-transform duration-500 group-hover:scale-105"
        />

        {/* Overlay */}
        <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/60 via-black/20 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          {/* Tag */}
          <div className="flex flex-wrap gap-2 mb-2 ">
            {project.tags.map((tagText, index) => (
              <span
                key={index}
                className="px-3 py-1 text-white text-sm font-medium border rounded-xl border-white/10 backdrop-blur-md bg-gradient-to-r from-pink-400/100 to-pink-300/100"
              >
                {tagText}
              </span>
            ))}
          </div>

          {/* Judul */}
          <h3 className="text-white font-bold text-xl drop-shadow-md">
            {project.title}
          </h3>
        </div>
      </motion.div>
    </motion.div>
  ))}
</motion.div>

    </section>
  )
}
