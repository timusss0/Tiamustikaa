import { PiShootingStarThin } from "react-icons/pi";
import { FaPaperPlane } from "react-icons/fa";
import { useState } from "react";
import { motion , AnimatePresence } from "motion/react";

export const Contact = () => {

    const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "28721d0f-c67a-4074-8054-1ea6dfc73f6d");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    setResult(data.success ? "Message Sent Successfully!" : "Error");
  };

return (
    <section className="mt-24 pb-8 relative z-10" id="contact">
        
        {/* TOP TEXT */}
        <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false }}
        >
            <p className="text-2xl text-content justify-center font-semibold inline-flex items-center gap-1 border-outer px-3 rounded-2xl mb-4">
                <PiShootingStarThin className="text-4xl font-bold" />Contact
            </p>

            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: false }}
                className="flex justify-center"
            >
                <h2 className="flex min-[825px]:hidden text-2xl md:text-3xl lg:text-4xl font-bold text-gradient mb-8">
                    Let's make something <br /> awesome together
                </h2>
            </motion.div>

            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: false }}
                className="flex justify-center"
            >
                <h2 className="hidden min-[825px]:flex z-10 text-center text-xl md:text-3xl lg:text-4xl font-bold text-gradient mb-8">
                    Let's make something awesome together
                </h2>
            </motion.div>
        </motion.div>

        {/* FORM */}
        <form 
            onSubmit={onSubmit} 
            className="max-w-4xl mx-auto grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-6 px-4 text-xl font-semibold"
        >
            {/* LEFT INPUTS */}
            <motion.div 
                className="flex flex-col space-y-6"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
                variants={{
                    hidden: {},
                    visible: { transition: { staggerChildren: 0.15 } }
                }}
            >
                <motion.input 
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    className="border-b-2 border-outer bg-transparent focus:outline-none focus:border-pink-500 border-rose-300 py-2"
                    required
                    variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0 }
                    }}
                />

                <motion.input 
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    className="border-b-2 border-outer bg-transparent focus:outline-none focus:border-pink-500 border-rose-300 py-2"
                    required
                    variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0 }
                    }}
                />
            </motion.div>

            {/* RIGHT INPUTS */}
            <motion.div 
                className="flex flex-col space-y-6"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
                variants={{
                    hidden: {},
                    visible: { transition: { staggerChildren: 0.15 } }
                }}
            >
                <motion.input 
                    type="text"
                    name="company"
                    placeholder="Company Profile"
                    className="border-b-2 border-outer bg-transparent focus:outline-none focus:border-pink-500 border-rose-300 py-2"
                    required
                    variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0 }
                    }}
                />

                <motion.input 
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    className="border-b-2 border-outer bg-transparent focus:outline-none focus:border-pink-500 border-rose-300 py-2"
                    required
                    variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0 }
                    }}
                />
            </motion.div>

            {/* TEXTAREA */}
            <motion.div 
                className="md:col-span-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: false }}
            >
                <textarea 
                    name="message"
                    placeholder="Your Message..."
                    className="w-full h-24 resize-none border-b-2 border-outer bg-transparent focus:outline-none focus:border-pink-500 border-rose-300 py-2"
                    required
                ></textarea>
            </motion.div>

            {/* BUTTON */}
            <motion.div 
                className="md:col-span-2"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: false }}
            >
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    type="submit"
                    className="mt-3 flex gap-3 p-4 rounded-xl bg-gradient-to-r from-pink-500 to-purple-400 text-[1rem] font-semibold items-center hover:opacity-90 transition-opacity text-white"
                >
                    Send Message <FaPaperPlane />
                </motion.button>

                <p className="max-w-4xl mx-auto">{result}</p>
            </motion.div>
        </form>
    </section>
)
}