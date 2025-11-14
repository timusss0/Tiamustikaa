import { PiShootingStarThin } from "react-icons/pi";
import Link from "next/link";
import {HiDownload} from "react-icons/hi";
import Image from "next/image";
export const About = () => {
    return(
       <section className="mt-12 pb-8 mb-30 " id="about">
        <div className="text-center ">
            <p className="text-2xl text-content font-semibold inline-flex items-center gap-1 border-outer px-3 rounded-2xl mb-4"><PiShootingStarThin className="text-4xl font-bold" />About</p>
            <h2 className="text-xl md:text-3xl lg:text-4xl font-bold text-gradient mb-8">Making the web work better for everyone</h2>
        </div>
          {/* 3 COLUMN */}
      <div className="grid grid-cols-1 md:grid-cols-3 max-w-6xl mx-auto justify-between ">

        {/* DESKRIPSI */}
        <div className="space-y-4">
          <p className="text-gray-700 leading-relaxed w-[430px]">
            I am a Computer Science student who has been interested in programming since vocational school when I majored in Software Engineering. Since then, I have mastered PHP and continued to develop my skills in web development. During college, I participated in the Student Creativity Program from the Ministry of Education, Culture, Research, and Technology, successfully obtained funding, and completed the project.
          </p>

          <p className="text-gray-700 leading-relaxed">
            My internship experience has given me a better understanding of the dynamics of real-world work. I am ready to enter the workforce with a strong desire to learn and a passion to contribute my best.
          </p>

          <Link
            href="/resume.pdf"
            className="px-5 mt-3 py-3 rounded-xl bg-purple-500 text-white font-medium inline-flex items-center gap-2"
            download
          >
            Download CV
            <HiDownload />
          </Link>
        </div>

        {/* DATA DIRI */}
        <div className="space-y-6 ml-26">
          <div>
            <p className="text-xs uppercase text-gray-500 tracking-wide">Name</p>
            <p className="text-lg font-semibold">Tia Mustika Ramadhani</p>
          </div>

          <div>
            <p className="text-xs uppercase text-gray-500 tracking-wide">Phone</p>
            <p className="text-lg font-semibold">0859-6586-5409</p>
          </div>

          <div>
            <p className="text-xs uppercase text-gray-500 tracking-wide">Email</p>
            <p className="text-lg font-semibold">mus770101@gmail.com</p>
          </div>

          <div>
            <p className="text-xs uppercase text-gray-500 tracking-wide">GitHub</p>
            <Link
              href="https://github.com/timusss0"
              className="text-lg font-semibold cursor-pointer"
            >
              https://github.com/timusss0
            </Link>
          </div>
        </div>

        {/* FOTO */}
        <div className="flex justify-center">
          <Image
            src="/IMG1.jpg"
            alt="Foto Tia"
            width={280}
            height={350}
            className="object-cover rounded-xl shadow-md"
          />
        </div>

      </div>
    </section>
    )
}